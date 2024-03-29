import { render, fireEvent } from '@testing-library/react';
import useModal from './useModal';

describe('useModal', () => {
  const TestComponent = () => {
    const { isOpen, openModal, closeModal } = useModal();
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        {isOpen && (
          <div className="modal-content" data-testid="modal-content">
            Modal Content
          </div>
        )}
        <button onClick={closeModal}>Close Modal</button>
      </div>
    );
  };

  it('opens and closes modal', () => {
    const { getByText, queryByText } = render(<TestComponent />);
    expect(queryByText('Modal Content')).toBeNull();
    fireEvent.click(getByText('Open Modal'));
    expect(queryByText('Modal Content')).toBeInTheDocument();
    fireEvent.click(getByText('Close Modal'));
    expect(queryByText('Modal Content')).toBeNull();
  });

  it('closes modal on escape key press', () => {
    const { getByText, queryByTestId } = render(<TestComponent />);
    fireEvent.click(getByText('Open Modal'));
    expect(queryByTestId('modal-content')).toBeInTheDocument();
    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' });
    expect(queryByTestId('modal-content')).toBeNull();
  });

  it('closes modal on outside click', () => {
    const { getByText, queryByText } = render(<TestComponent />);
    fireEvent.click(getByText('Open Modal'));
    expect(queryByText('Modal Content')).toBeInTheDocument();
    fireEvent.mouseDown(document);
    expect(queryByText('Modal Content')).toBeNull();
  });
});
