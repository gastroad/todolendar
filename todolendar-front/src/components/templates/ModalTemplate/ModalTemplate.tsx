import { FC, ReactNode } from 'react';
import closeURL from '../../../assets/images/close.png';

import './ModalTemplate.scss';

export interface ModalTemplateProps {
  children: ReactNode;
  closeModal: () => void;
}

const ModalTemplate: FC<ModalTemplateProps> = ({ children, closeModal }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <img
          alt="modal-close"
          className="modal-close"
          src={closeURL}
          onClick={closeModal}
        />
        {children}
      </div>
    </div>
  );
};

export default ModalTemplate;
