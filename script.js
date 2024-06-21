document.addEventListener('DOMContentLoaded', () => {
    const cpfInput = document.getElementById('cpf');
    const errorMessage = document.getElementById('error-message');

    // Formatação do CPF
    cpfInput.addEventListener('input', () => {
        let value = cpfInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

        // Formata o CPF
        if (value.length > 9) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        } else if (value.length > 6) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');
        } else if (value.length > 3) {
            value = value.replace(/(\d{3})(\d{3})/, '$1.$2');
        }
        
        cpfInput.value = value;
    });

    document.getElementById('login-form').addEventListener('submit', async function(e) {
        e.preventDefault();

        const cpf = cpfInput.value.replace(/\D/g, ''); // Remove formatação
        const senha = document.getElementById('senha').value;

        // Validação de CPF
        if (cpf.length !== 11) {
            errorMessage.textContent = 'CPF deve conter 11 dígitos.';
            return;
        }

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cpf, senha })
        });

        if (response.status === 200) {
            alert('Login successful');
        } else {
            errorMessage.textContent = 'Invalid credentials';
        }
    });

    // script.js

document.addEventListener('DOMContentLoaded', function() {
    const agentLink = document.querySelector('.agent-link');
    const agentLoginForm = document.getElementById('agent-login-form');
    const userLoginForm = document.getElementById('login-form');

    agentLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evita a ação padrão do link

        // Esconder o formulário de login de usuário
        userLoginForm.style.display = 'none';

        // Mostrar o formulário de login de agente
        agentLoginForm.style.display = 'block';
    });
});

});
