document.addEventListener('DOMContentLoaded', function() {
    // Dados de exemplo para os planos dos colegas
    const colleaguesData = [
        { name: "VINICIUS", profession: "Agronomia", description: "Descubra tudo sobre uma das profissões mais importantes para o futuro da humanidade. Da produção de alimentos à preservação ambiental, o engenheiro agrônomo é peça fundamental no desenvolvimento sustentável." },
        { name: "KELLY", profession: "Fotografia", description: "Transformo suas memórias mais preciosas em arte visual que durará para sempre" },
        { name: "AMANDA ", profession: "Nutrição & Saúde", description: "O curso de Nutrição forma o profissional de saúde responsável por promover e recuperar a saúde através da alimentação. O currículo abrange Bioquímica, Ciência dos Alimentos e a aplicação clínica de dietas (Dietoterapia). O futuro nutricionista aprende a realizar a avaliação nutricional e a criar planos alimentares personalizados. Com isso, pode atuar em clínicas, hospitais, na saúde pública ou em empresas, sendo essencial para orientar as pessoas rumo a um estilo de vida mais saudável e equilibrado." },
        { name: "MIGUEL ", profession: "", description: "" },
        { name: "SUYANE ", profession: "Engenharia Mecânica", description: "Engenharia Mecânica é um dos cursos mais tradicionais e abrangentes da área de engenharia. Ele forma profissionais capazes de conceber, projetar, analisar, fabricar e manter sistemas mecânicos dos mais simples aos mais complexos." },
        { name: "THALISON", profession: "como se tornar um jogador de vôlei proficional", description: "O voleibol é um dos esportes mais populares do Brasil, país reconhecido mundialmente por sua excelência nessa modalidade. Tornar-se um jogador profissional de vôlei é o sonho de muitos jovens atletas, mas o caminho é desafiador e requer dedicação, talento e perseverança." },
        { name: "ANIELY", profession: "Polícia Rodoviária Federal", description: "A segurança viária, o combate ao crime e a tecnologia são os pilares que sustentam a atuação da PRF em todo o país. O trabalho vai muito além da fiscalização: é um serviço dedicado à proteção e à garantia da vida nas estradas." },
        { name: "SISSA ", profession: "", description: "" }
        { name: "MATHEUS", profession: "Psicologia", description: "Para se tornar psicólogo no Brasil, o primeiro passo é a graduação, que dura em média cinco anos. Durante o curso, você vai explorar diversas áreas do comportamento humano, incluindo teorias como Psicanálise e Terapia Cognitivo-Comportamental, além de realizar estágios em hospitais, escolas e empresas. Para atuar profissionalmente, é necessário registrar-se no Conselho Regional de Psicologia (CRP), garantindo que os serviços prestados sigam padrões éticos e de qualidade. A formação contínua, com especializações, também é fundamental para se destacar no mercado de trabalho." }
        { name: "MAURICIO", profession: "", description: "" }
        { name: "MURILO ", profession: "", description: "" }
        { name: "VANESSA", profession: "Psicologia no Paraná", description: "O curso de Psicologia forma profissionais capazes de analisar e interpretar sentimentos, emoções e comportamentos humanos. Com duração média de 5 anos, o currículo combina disciplinas teóricas e práticas, preparando os estudantes para atuar em diversas áreas como clínica, organizacional, educacional, social e hospitalar." }
        { name: "SHIRLLEY", profession: "Magistratura", description: "Descubra o caminho completo para se tornar magistrado: desde a graduação até a aprovação no concurso. Seu guia definitivo para uma carreira de prestígio na justiça brasileira." } 
        { name: "LARISSA", profession: "Fisioterapia", description: "A fisioterapia é uma ciência da saúde que estuda, previne e trata os distúrbios cinéticos funcionais intercorrentes em órgãos e sistemas do corpo humano. Seu objetivo é preservar, desenvolver ou restaurar a integridade de órgãos, sistemas ou funções, utilizando para isso o movimento como principal recurso terapêutico." }

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