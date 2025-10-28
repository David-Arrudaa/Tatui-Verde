/*
 * Lógica para alternar as abas nos formulários 
 * de login-pf.html e login-pj.html
 */
document.addEventListener('DOMContentLoaded', function() {
    
    // Encontra todos os containers de abas na página
    const formContainers = document.querySelectorAll('.form-container');

    formContainers.forEach(container => {
        const tabLinks = container.querySelectorAll('.tab-link');
        const formContents = container.querySelectorAll('.form-content');

        tabLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Remove o comportamento padrão do botão (caso tenha)
                event.preventDefault();
                
                const tabId = this.getAttribute('data-tab');

                // 1. Remove 'active' de todos os links e formulários
                tabLinks.forEach(item => item.classList.remove('active'));
                formContents.forEach(item => item.classList.remove('active'));

                // 2. Adiciona 'active' ao link clicado
                this.classList.add('active');

                // 3. Adiciona 'active' ao formulário correspondente
                const targetForm = container.querySelector('#' + tabId);
                if (targetForm) {
                    targetForm.classList.add('active');
                }
            });
        });
    });
});