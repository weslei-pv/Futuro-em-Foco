// Array com os nomes e as profissões que seus colegas querem seguir
const colegas = [
    { nome: "SUYANE", profissao: "Enfermeira" },
    { nome: "VINICIOS", profissao: "Engenheiro Civil" },
    { nome: "MATHEUS", profissao: "Eletricista" },
    { nome: "SHIRLLEY", profissao: "Psicóloga" },
    { nome: "AMANDA", profissao: "Jornalista" },
    { nome: "LARISSA", profissao: "Chef de Cozinha" },
    { nome: "MIGUEL", profissao: "Programador" },
    { nome: "THALISON", profissao: "Jogador de Futebol Profissional" },
    { nome: "ANIELY", profissao: "Médica" },
    { nome: "KELLY", profissao: "Fisioterapeuta" },
    { nome: "SISSA", profissao: "Veterinária" },
    { nome: "MAURICIO", profissao: "Cientista de Dados" },
    { nome: "MURILO", profissao: "Arquiteto" },
    { nome: "VANESSA", profissao: "Advogada" }
    // Adicione mais colegas aqui, seguindo o mesmo padrão
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.colleagues-grid');
    const saveBtn = document.getElementById('save-plan-btn');
    const planTextarea = document.getElementById('my-plan-text');
    const message = document.getElementById('saved-plan-message');

    // Função para renderizar os cards dos colegas
    function renderColleagues() {
        colegas.forEach(colega => {
            const card = document.createElement('div');
            card.classList.add('colleague-card');
            
            // Converte o nome para o formato do arquivo da imagem (minúsculas)
            const imgName = colega.nome.toLowerCase();
            
            card.innerHTML = `
                <img src="./images/${imgName}.jpg" alt="Foto de ${colega.nome}">
                <h3>${colega.nome}</h3>
                <p>${colega.profissao}</p>
            `;
            grid.appendChild(card);
        });
    }

    // Função para salvar o plano
    function savePlan() {
        const userPlan = planTextarea.value;
        if (userPlan.trim() !== "") {
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

    saveBtn.addEventListener('click', savePlan);

    renderColleagues();
    loadPlan();
});