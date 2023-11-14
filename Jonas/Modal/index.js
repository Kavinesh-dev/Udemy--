'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOverlay = document.querySelector('.close-modal');
const btnsModal = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsModal.length; i++) {
  btnsModal[i].addEventListener('click', openModal);
}

closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function showkey(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});
