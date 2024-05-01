import React, { useState } from 'react';

function EditNote({ editNote, content }) {
    const [showNoteEditModal, setNoteEditModal] = useState(false);
    const [noteEditInputValue, setNoteEditInputValue] = useState(content);

    const toggleNoteEditModal = () => {
        setNoteEditModal(!showNoteEditModal);
    };

    const handleEditNote = () => {
        editNote(noteEditInputValue);
        setNoteEditInputValue(content)
        toggleNoteEditModal();
    };

    return (
        <div>
            <button className="btn btn-success btn-sm" onClick={toggleNoteEditModal} style={{ marginLeft: 10 }}>
                <i className='icon-pencil'></i>
            </button>

            {showNoteEditModal && (
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
                                        <h6 className="mb-0">Edit Note</h6>
                                    </div>
                                </div>
                                <form className="form-auth-small m-t-20">
                                    <div className="form-group">
                                        <label htmlFor="signin-email" className="control-label sr-only">
                                            Note
                                        </label>
                                        <textarea
                                            placeholder='Type Your Note'
                                            className="default-textarea"
                                            value={noteEditInputValue}
                                            onChange={(e) => setNoteEditInputValue(e.target.value)}
                                        />
                                    </div>
                                </form>
                                <div className="align-right">
                                    <button onClick={toggleNoteEditModal} className="btn btn-default">
                                        Cancel
                                    </button>
                                    <button onClick={handleEditNote} className="btn btn-success" style={{ marginLeft: 10 }}>
                                        Edit Note
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

export default EditNote;
