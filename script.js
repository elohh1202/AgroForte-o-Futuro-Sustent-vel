document.addEventListener("DOMContentLoaded", () => {
    // Inicializa os ícones do Lucide
    lucide.createIcons();

    // Menu Mobile Alternador (Hamburguer)
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Fecha o menu móvel ao clicar em um link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // Validação e Envio do Formulário de Contato
    const form = document.getElementById("form-contato");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede a página de recarregar

        const nome = document.getElementById("nome").value;

        // Simulação de envio bem-sucedido
        feedback.style.color = "#2e7d32";
        feedback.textContent = `Obrigado pelo contato, ${nome}! Mensagem enviada com sucesso.`;

        // Limpa o formulário
        form.reset();

        // Remove a mensagem após 5 segundos
        setTimeout(() => {
            feedback.textContent = "";
        }, 5000);
    });
});