// Array com 20 profissões
const profissoes = [
    { nome: "Desenvolvedor de Software", descricao: "Cria e mantém aplicativos e sistemas de computador." },
    { nome: "Designer Gráfico", descricao: "Cria conceitos visuais para comunicar ideias que inspiram e informam." },
    { nome: "Médico(a)", descricao: "Diagnostica e trata doenças, lesões e outras condições médicas." },
    { nome: "Engenheiro(a) Civil", descricao: "Projeta, constrói e supervisiona projetos de infraestrutura." },
    { nome: "Cientista de Dados", descricao: "Analisa e interpreta dados complexos para ajudar na tomada de decisões." },
    { nome: "Arquiteto(a)", descricao: "Planeja e projeta edifícios, paisagens e outros espaços físicos." },
    { nome: "Psicólogo(a)", descricao: "Estuda o comportamento humano e os processos mentais." },
    { nome: "Jornalista", descricao: "Pesquisa, escreve e relata notícias e informações para o público." },
    { nome: "Chef de Cozinha", descricao: "Prepara e supervisiona a produção de alimentos em restaurantes." },
    { nome: "Professor(a)", descricao: "Educa estudantes em várias áreas do conhecimento." },
    { nome: "Advogado(a)", descricao: "Assessora e representa clientes em questões legais." },
    { nome: "Eletricista", descricao: "Instala, mantém e repara sistemas elétricos." },
    { nome: "Fisioterapeuta", descricao: "Ajuda pacientes a recuperar e manter a capacidade física." },
    { nome: "Enfermeiro(a)", descricao: "Cuida da saúde e bem-estar dos pacientes." },
    { nome: "Fotógrafo(a)", descricao: "Usa câmeras para capturar imagens artísticas ou documentais." },
    { nome: "Veterinário(a)", descricao: "Cuida da saúde de animais." },
    { nome: "Cientista Ambiental", descricao: "Estuda e busca soluções para problemas ambientais." },
    { nome: "Publicitário(a)", descricao: "Cria e executa campanhas de marketing para promover produtos e serviços." },
    { nome: "Economista", descricao: "Estuda a produção e distribuição de recursos, bens e serviços." },
    { nome: "Biomédico(a)", descricao: "Realiza pesquisas e análises em laboratórios para diagnóstico de doenças." }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.professions-grid');
    const saveBtn = document.getElementById('save-plan-btn');
    const planTextarea = document.getElementById('my-plan-text');
    const message = document.getElementById('saved-plan-message');

    // Função para renderizar as profissões
    function renderProfissoes() {
        profissoes.forEach(profi => {
            const card = document.createElement('div');
            card.classList.add('profession-card');
            card.innerHTML = `
                <h3>${profi.nome}</h3>
                <p>${profi.descricao}</p>
            `;
            grid.appendChild(card);
        });
    }

    // Função para salvar o plano
    function savePlan() {
        const userPlan = planTextarea.value;
        if (userPlan.trim() !== "") {
            // Salva o plano no armazenamento local do navegador
            localStorage.setItem('meuPlano', userPlan);
            message.textContent = "Plano salvo com sucesso!";
            message.classList.remove('hidden');
            setTimeout(() => {
                message.classList.add('hidden');
            }, 3000);
        } else {
            alert("Por favor, escreva algo no seu plano antes de salvar.");
        }
    }

    // Função para carregar o plano salvo (se existir)
    function loadPlan() {
        const savedPlan = localStorage.getItem('meuPlano');
        if (savedPlan) {
            planTextarea.value = savedPlan;
        }
    }

    // Adiciona o evento de clique ao botão
    saveBtn.addEventListener('click', savePlan);

    // Renderiza as profissões quando a página carrega
    renderProfissoes();
    // Carrega o plano salvo (se houver)
    loadPlan();
});