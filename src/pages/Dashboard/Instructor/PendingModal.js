import React from 'react';

const PendingModal = ({ p }) => {
    return (
        <>
            <input type="checkbox" id="pending-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="pending-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className="py-4">{p?.suggested}</p>
                </div>
            </div>
        </>
    );
};

export default PendingModal;