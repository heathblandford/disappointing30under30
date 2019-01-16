import React from 'react';

const AddYourOwn = ({ handleClose, show }) =>{
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return(
        <div className={showHideClassName}>
            <section className="modal-main">
                <h1>Hello from the modal</h1>
                <button onClick={handleClose}>close</button>
            </section>
        </div>
    );
}

export default AddYourOwn;