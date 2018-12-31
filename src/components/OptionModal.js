import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        //Open modal when selectedOption has value and thus is true.
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">You should</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.modalClose}>Let's do it!</button>
    </Modal>
);

export default OptionModal;