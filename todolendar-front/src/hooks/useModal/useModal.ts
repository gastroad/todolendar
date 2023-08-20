import { useState, useEffect } from 'react';

const useModal = (): {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
} => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const closeModalOnOutsideClick = (e: MouseEvent) => {
      const modalContent = document.querySelector('.modal-content');
      if (modalContent && !modalContent.contains(e.target as Node)) {
        closeModal();
      }
    };
    const bindEscapeToClose = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', bindEscapeToClose);
    document.addEventListener('mousedown', closeModalOnOutsideClick);

    return () => {
      window.removeEventListener('keydown', bindEscapeToClose);
      document.removeEventListener('mousedown', closeModalOnOutsideClick);
    };
  }, []);

  return { isOpen, openModal, closeModal };
};

export default useModal;
