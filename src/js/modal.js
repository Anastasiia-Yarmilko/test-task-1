import { alert } from '@pnotify/core/dist/PNotify.js';
import { Stack } from '@pnotify/core';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";


const refs = {
    openModalBtn: document.querySelector('.open-modal-btn'),
    modalWindow: document.querySelector('.modal__window'),
    closeModalIcon: document.querySelector('[data-action="close-lightbox"]'),
    cancelActionBtn: document.querySelector('[data-action="cancel-action"]'),
    confirmActionBtn: document.querySelector('[data-action="confirm-action"]'),
}

function openModalWindow (event) {
    event.preventDefault();
    
    refs.modalWindow.classList.add('is-open');
}

function closeModalWindow () {
    refs.modalWindow.classList.remove('is-open');
}

function confirmAction () {
    refs.modalWindow.classList.remove('is-open');

    alert({
        text: 'DONE',
        type: 'error',
        delay: 2000,
        stack: new Stack({
            dir1: 'up',
        }),
    })
}

function escBttnAction(event) {
    if (event.keyCode === 27) {
        refs.modalWindow.classList.remove('is-open');
    }
};


function closeModalByOverlay(event) {
    if (event.target.classList.value === 'modal__overlay') {
         refs.modalWindow.classList.remove('is-open');
    }
};

refs.openModalBtn.addEventListener('click', openModalWindow);
refs.closeModalIcon.addEventListener('click', closeModalWindow);
refs.cancelActionBtn.addEventListener('click', closeModalWindow);
refs.confirmActionBtn.addEventListener('click', confirmAction);
refs.modalWindow.addEventListener('click', closeModalByOverlay);
document.addEventListener('keydown', escBttnAction);
