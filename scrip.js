// Smooth scrolling para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Ejemplo: Validación básica del formulario
document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    this.reset();
});

// Contador de stock (ejemplo)
function updateStockCount() {
    const stockElements = document.querySelectorAll('.stock-count');
    stockElements.forEach(el => {
        const randomStock = Math.floor(Math.random() * 10) + 1;
        el.textContent = `${randomStock} unidades disponibles`;
    });
}

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    updateStockCount();
});