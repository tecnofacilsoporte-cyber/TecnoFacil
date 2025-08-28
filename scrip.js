// Modal de aviso de desarrollo
document.addEventListener('DOMContentLoaded', function() {
    // Crear el modal
    createDevelopmentModal();
    
    // Mostrar el modal al cargar la página
    showModal();
});

function createDevelopmentModal() {
    // Crear el overlay del modal
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'development-modal-overlay';
    modalOverlay.className = 'modal-overlay';
    
    // Crear el contenido del modal
    modalOverlay.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-icon">
                   <img width="48" height="48" src="https://img.icons8.com/color/48/box-important--v1.png" alt="box-important--v1"/>
                </div>
                <h2>Sitio en Desarrollo</h2>
            </div>
            <div class="modal-body">
                <p>¡Hola! 👋</p>
                <p>Te damos la bienvenida a <strong>TecnoFácil</strong>.</p>
                <p>Nuestro sitio web aún se encuentra en desarrollo. Algunas funciones pueden no estar disponibles temporalmente.</p>
                <p>Gracias por tu paciencia mientras trabajamos para ofrecerte la mejor experiencia.</p>
            </div>
            <div class="modal-footer">
                <button id="modal-ok-btn" class="modal-btn">
                    <span>Entendido</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20,6 9,17 4,12"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    // Añadir el modal al body
    document.body.appendChild(modalOverlay);
    
    // Añadir evento al botón OK
    document.getElementById('modal-ok-btn').addEventListener('click', hideModal);
    
    // Cerrar modal al hacer clic fuera del contenido
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            hideModal();
        }
    });
    
    // Cerrar modal con la tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideModal();
        }
    });
}

function showModal() {
    const modal = document.getElementById('development-modal-overlay');
    if (modal) {
        // Prevenir scroll del body
        document.body.classList.add('modal-open');
        
        // Mostrar modal con animación
        setTimeout(() => {
            modal.classList.add('show');
        }, 100);
    }
}

function hideModal() {
    const modal = document.getElementById('development-modal-overlay');
    if (modal) {
        modal.classList.remove('show');
        
        // Remover el modal después de la animación
        setTimeout(() => {
            modal.remove();
            document.body.classList.remove('modal-open');
        }, 400);
    }
}

// Funciones adicionales para uso futuro
window.ModalUtils = {
    show: showModal,
    hide: hideModal,
    create: createDevelopmentModal
};
