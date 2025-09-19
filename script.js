document.addEventListener('DOMContentLoaded', function() {
    // Dados de exemplo para os planos dos colegas
    const colleaguesData = [
        { name: "VINICIUS", profession: "Agronomia", description: "Quero me especializar em pediatria e trabalhar em hospitais infantis." },
        { name: "KELLY", profession: "Engenheiro de Software", description: "Planejo trabalhar em uma grande empresa de tecnologia e desenvolver aplicativos inovadores." },
        { name: "Carla Santos", profession: "Arquiteta", description: "Sonho em projetar edifícios sustentáveis e funcionalmente belos." },
        { name: "Daniel Costa", profession: "Professor de História", description: "Quero lecionar no ensino médio e inspirar jovens a amar a história." },
        { name: "Eduarda Pereira", profession: "Psicóloga", description: "Planejo me especializar em terapia cognitivo-comportamental e abrir meu próprio consultório." },
        { name: "Felipe Rodrigues", profession: "Empreendedor", description: "Quero criar minha própria startup na área de tecnologia educacional." },
        { name: "Gabriela Almeida", profession: "Advogada", description: "Almejo trabalhar com direitos humanos e defender causas importantes para a sociedade." },
        { name: "Hugo Carvalho", profession: "Cientista de Dados", description: "Pretendo analisar grandes volumes de dados para solucionar problemas complexos." }
    ];

    // Preencher a grade de colegas
    const colleaguesGrid = document.querySelector('.colleagues-grid');
    
    colleaguesData.forEach(colleague => {
        const card = document.createElement('div');
        card.className = 'colleague-card glow-effect';
        card.innerHTML = `
            <h3 class="colleague-name">${colleague.name}</h3>
            <p class="colleague-profession"><i class="fas fa-briefcase"></i> ${colleague.profession}</p>
            <p class="colleague-description">${colleague.description}</p>
        `;
        colleaguesGrid.appendChild(card);
    });

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