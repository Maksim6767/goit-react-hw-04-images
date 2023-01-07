import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    dataImage: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
  };
  
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscpClick);
  }
  
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscpClick);
  }
  
  handleEscpClick = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  
  onClick = e => {
    if (e.target !== e.currentTarget) {
      this.props.closeModal();
    }
  };
  
  render() {
    const { src, alt } = this.props.dataImage;
    return createPortal(
      <Overlay onClick={this.onClick}>
        <ModalWindow>
          <img src={src} alt={alt} />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}