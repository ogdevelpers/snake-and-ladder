import React from 'react';

export const Modal = ({ message, onConfirm, onCancel, showCancel = false, title = "Message" }: any) => (
    <div className="modal-overlay">
        <div className="modal-content">
            <h3 className="modal-title">{title}</h3>
            <p className="modal-message">{message}</p>
            <div className="modal-actions">
                {showCancel && (
                    <button
                        onClick={onCancel}
                        className="modal-button modal-button-cancel"
                    >
                        Cancel
                    </button>
                )}
                <button
                    onClick={onConfirm}
                    className="modal-button modal-button-confirm"
                >
                    OK
                </button>
            </div>
        </div>
    </div>
);

export const GameIdNotFoundModal = ({ message, onConfirm, onCancel }: any) => (
    <div className="modal-overlay">
        <div className="modal-content">
            <h3 className="modal-title">Game ID Not Found / Overwrite</h3>
            <p className="modal-message">{message}</p>
            <div className="modal-actions">
                <button
                    onClick={onCancel}
                    className="modal-button modal-button-cancel"
                >
                    No
                </button>
                <button
                    onClick={onConfirm}
                    className="modal-button modal-button-confirm modal-button-create-it"
                >
                    Yes, Create It / Overwrite
                </button>
            </div>
        </div>
    </div>
);

export const QuestionModal = ({ question, options, onAnswer }: any) => (
    <div className="modal-overlay modal-question">
        <div className="modal-content modal-question-content">
            <h3 className="modal-question-title">{question.question}</h3>
            <div className="modal-question-options">
                {options.map((option: any, index: number) => (
                    <button
                        key={index}
                        onClick={() => onAnswer(option)}
                        className="modal-question-button"
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    </div>
);