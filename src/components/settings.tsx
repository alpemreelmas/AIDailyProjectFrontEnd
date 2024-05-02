"use client"
import React, { useEffect, useRef, useState } from 'react';

function Settings() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const modalRef = useRef<HTMLDivElement>(null)

    const handleSubmit = (e:any) => {
        e.preventDefault();
      };

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setShowModal(false);
            }
        }
    

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
    }, [modalRef])

    

    return (
        
        <div>
            <button onClick={toggleModal} className="icon-menu settings-button">
                <i className="icon-settings" />
            </button>

            {showModal && (
            <div
                className="modal fade default-modal show"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                style={{ display: "block" }}
                aria-modal="true"
                >
                <div ref={modalRef} className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="d-flex mb-3">
                                <div>
                                    <h6 className="mb-0">Application Settings</h6>
                                </div>
                            </div>
                            <form className="form-auth-small m-t-20" onSubmit={handleSubmit}>
                                Application settings
                            </form>
                            <div className="align-right">
                                <button onClick={toggleModal} className="btn btn-default">
                                    Cancel
                                </button>
                                <button type='submit' className="btn btn-success" style={{marginLeft: 10}}>
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                )}

            


        </div>   
            
    );
}

export default Settings;