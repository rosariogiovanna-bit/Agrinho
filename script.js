/* ==========================================================================
   EXECUÇÃO APÓS CARREGAMENTO DO DOM
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    
    // Inicialização das funções principais
    gerenciarDarkMode();
    gerarMensagemDinamica();
    configurarBotaoSaibaMais();
    validarFormulario();
});

/* ==========================================================================
   1. FUNCIONALIDADE: MODO ESCURO (DARK MODE)
   ========================================================================== */
function gerenciarDarkMode() {
    const btnToggle = document.getElementById("toggle-dark-mode");
    
    // Verifica se o usuário já tinha uma preferência salva no navegador
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        btnToggle.textContent = "☀️ Modo Claro";
    }

    // Evento de Clique para alternar o tema
    btnToggle.addEventListener("click", () => {
        const temaAtual = document.documentElement.getAttribute("data-theme");
        
        if (temaAtual === "dark") {
            document.documentElement.removeAttribute("data-theme");
            btnToggle.textContent = "🌙 Modo Escuro";
            localStorage.setItem("tema", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            btnToggle.textContent = "☀️ Modo Claro";
            localStorage.setItem("tema", "dark");
        }
    });
}

/* ==========================================================================
   2. FUNCIONALIDADE: MENSAGEM DINÂMICA DO DIA
   ========================================================================== */
function gerarMensagemDinamica() {
    const containerMensagem = document.getElementById("mensagem-dia");
    
    // Array com frases que mudam de acordo com o dia ou aleatoriamente
    const frasesSustentaveis = [
        "🌱 'A agricultura sustentável não visa apenas alimentar o presente, mas garantir a vida do futuro.'",
        "🚜 'Inovação e tecnologia no campo reduzem em até 40% o desperdício de recursos hídricos.'",
        "🌍 'Preservar as florestas nativas dentro das propriedades rurais garante o retorno dos polinizadores.'",
        "☀️ 'O uso de energia solar no agronegócio cresceu exponencialmente, gerando autonomia e sustentabilidade.'"
    ];

    // Escolhe uma frase aleatória do Array
    const indiceAleatorio = Math.floor(Math.random() * frasesSustentaveis.length);
    
    // Injeta a frase dinamicamente no HTML através do DOM
    containerMensagem.innerHTML = `<strong>Destaque Sustentável:</strong> <p>${frasesSustentaveis[indiceAleatorio]}</p>`;
}

/* ==========================================================================
   3. FUNCIONALIDADE: INTERAÇÃO DO BOTÃO "SAIBA MAIS"
   ========================================================================== */
function configurarBotaoSaibaMais() {
    const btnSaibaMais = document.getElementById("btn-saiba-mais");
    
    btnSaibaMais.addEventListener("click", () => {
        // Rola a tela suavemente até a seção de pilares
        const secaoPilares = document.getElementById("pilares");
        secaoPilares.scrollIntoView({ behavior: "smooth" });
    });
}

/* ==========================================================================
   4. FUNCIONALIDADE: VALIDAÇÃO DO FORMULÁRIO DE INSCRIÇÃO
   ========================================================================== */
function validarFormulario() {
    const form = document.getElementById("form-contato");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", (evento
