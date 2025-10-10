document.addEventListener('DOMContentLoaded', function() {
    // Gerenciar o plano salvo do usuário
    const planTextarea = document.getElementById('my-plan-text');
    const saveButton = document.getElementById('save-plan-btn');
    const savedMessage = document.getElementById('saved-plan-message');

    // Carregar plano salvo se existir
    const savedPlan = localStorage.getItem('careerPlan');
    if (savedPlan) {
        planTextarea.value = savedPlan;
    }

    // Salvar plano quando o botão for clicado
    saveButton.addEventListener('click', function() {
        const planText = planTextarea.value.trim();
        if (planText) {
            localStorage.setItem('careerPlan', planText);
            
            // Mostrar mensagem de sucesso
            savedMessage.classList.remove('hidden');
            
            // Efeito visual no botão
            saveButton.innerHTML = '<i class="fas fa-check"></i> Salvo!';
            saveButton.style.background = 'linear-gradient(135deg, var(--success), #00c853)';
            
            // Restaurar o botão após 2 segundos
            setTimeout(() => {
                savedMessage.classList.add('hidden');
                saveButton.innerHTML = '<i class="fas fa-save"></i> Salvar Meu Plano';
                saveButton.style.background = 'var(--gradient)';
            }, 2000);
        }
    });

    // Rolagem suave para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});