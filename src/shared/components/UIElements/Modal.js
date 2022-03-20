import React from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';
import { CSSTransition } from 'react-transition-group';

import './Modal.css';

const ModalOverlay = props => {
    const content = (
        <div className={`modal ${props.className}`} style={props.style}> {/*style prop to could also add inline styles */}
            <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : (event) => event.preventDefault()}>
                <div className={`modal__content ${props.contentClass}`}>
                    {props.children}
                </div>
                <footer className={`modal__footer ${props.footerClass}`}>
                    {props.footer}
                </footer>
            </form>
        </div>
    )
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}; // This is another component which is not exported but will be use by modal internally.

const Modal = props => {
    // Why do I have a seperate component down there? Because a modal is more than just the overlay, a modal
    //  also needs a backrop and I also want to play a little animation when we open and close the modal, so 
    
    return (
        <React.Fragment>
            {props.show && <Backdrop onClick={props.onCancel}/>}
            <CSSTransition
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames="modal"
            >
                <ModalOverlay {...props}/>
            </CSSTransition>
        </React.Fragment>
    )
};

export default Modal;