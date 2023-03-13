window.addEventListener('DOMContentLoaded', function() {
    function closeModal(modalSelector) {
        const modal = document.querySelector(modalSelector);

        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.style.transform = 'scale(0)';
        document.body.style.overflow = '';
    }

    function openModal(modalSelector) {
        const modal = document.querySelector(modalSelector);
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.style.transform = 'scale(1)';
        document.body.style.overflow = 'hidden';
    }

    function modal(triggerSelector, modalSelector) {
        const 
            modalTrigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector);
            email = document.getElementById('emai'),
            passwd = document.getElementById('passwd');

        modalTrigger.forEach(btn => {
            btn.addEventListener('click', () => {
                openModal(modalSelector)

            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.getAttribute('data-close') == "") {
                closeModal(modalSelector);
                email.value = '';
                passwd.value = '';
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && modal.classList.contains('show')) { 
                closeModal(modalSelector);
            }
        });
    }
    modal('[data-modal]', '.wrapper');
})