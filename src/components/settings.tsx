"use client"
import React, { useState } from 'react';

function Settings() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();
      };

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal)
    }

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
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="d-flex mb-3">
                                <div>
                                    <h6 className="mb-0">Settings</h6>
                                </div>
                            </div>
                            <form className="form-auth-small m-t-20" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="signin-email" className="control-label sr-only">
                                    Email
                                    </label>
                                    <input
                                    type="email"
                                    className="form-control round"
                                    id="signin-email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="New Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="signin-password" className="control-label sr-only">
                                    Password
                                    </label>
                                    <input
                                    type="password"
                                    className="form-control round"
                                    id="signin-password"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    placeholder="Old Password"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="signin-password" className="control-label sr-only">
                                    Password
                                    </label>
                                    <input
                                    type="password"
                                    className="form-control round"
                                    id="signin-password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="New Password"
                                    />
                                </div>
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