import React, { useState } from 'react';

function Popup({ onClose }) {
    return (
        <div className="popup-overlay">
            <div className="popup">
                <div className="popup__content">
                    <h2 className="text-2xl mb-10 text-center">Подтверждение</h2>
                    <p>Вы уверены, что хотите удалить данный товар?</p>
                    <div className="mt-5 flex justify-center gap-5">
                        <button className="bg-mainOrange drop-shadow-sm rounded-xl h-fit py-2 px-3"
                            // onClick={toggleDelivery}
                        >
                            <p>Удалить</p>
                        </button>
                        <button className="bg-grayWhite drop-shadow-sm rounded-xl h-fit py-2 px-3"
                                onClick={onClose}
                        >
                            <p>Отмена</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;