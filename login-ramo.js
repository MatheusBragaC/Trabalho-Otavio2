document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        window.location.href = "ramo.html"; 
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.category-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = "pendentes.html";
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cadastreSeLink = document.getElementById('Cadastre-se');
    cadastreSeLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'cadastro.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cadastreSeLink = document.getElementById('ENVIAR');
    cadastreSeLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'index.html';
    });
});


