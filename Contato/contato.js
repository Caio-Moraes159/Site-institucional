function formatarTelefone(input) {
    let valor = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Formatação: (XXX) X XXXX-XXXX
    let formattedValue = '';

    if (valor.length > 0) {
        formattedValue += `(${valor.substring(0, 3)}`;
    }

    if (valor.length > 3) {
        formattedValue += `) ${valor.substring(3, 4)}`;
    }

    if (valor.length > 4) {
        formattedValue += ` ${valor.substring(4, 8)}`;
    }

    if (valor.length > 8) {
        formattedValue += `-${valor.substring(8, 12)}`;
    }

    // Atualiza o valor no campo de entrada
    input.value = formattedValue;
}

function permitirApenasNumerosOuApagar(event) {
    // Permite apenas números e as teclas de controle (Backspace, Delete)
    if (!(event.key >= '0' && event.key <= '9' || event.key === 'Backspace' || event.key === 'Delete')) {
        event.preventDefault();
    }
}


// Function para verificar se todos os campos estão prenchidos
function verificarCampos() {
    var formulario = document.getElementById("meuFormulario");
    var inputs = formulario.querySelectorAll("input[required], textarea[required]");

    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value.trim()) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
    }

    // Se todos os campos estiverem preenchidos, você pode prosseguir com o envio do formulário.
    // Aqui, você pode adicionar código para enviar os dados para o servidor ou fazer o que for necessário.
    alert("Formulário enviado com sucesso!");
    formulario.submit(); // Isto é opcional, dependendo do seu caso.
}


// Function para o menu hamburguer - Menu responsivo
let show = false;

const menuSection = document.querySelector(".menu-section");
const menuToggle = menuSection.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
    // Inverter o valor de "show"
    show = !show;

    // Ajustar a propriedade "overflow" do body
    document.body.style.overflow = show ? "hidden" : "auto";

    // Selecionar os elementos
    var navElement = document.querySelector('.nav');
    var navHead = document.querySelector('.nav_head');
    var toggleElement = document.querySelector('.menu-toggle');

    // Ajustar as classes e propriedades com base no valor de "show"
    if (show) {
        // Se show for true, mostrar .nav e alterar flex-direction para column
        navElement.style.display = 'block';
        navHead.style.flexDirection = 'column';
        toggleElement.style.marginRight = '25px';
        toggleElement.style.marginTop = '15px';
    } else {
        // Se show for false, ocultar .nav e restaurar flex-direction para o valor padrão (ou conforme necessário)
        navElement.style.display = 'none';
        navHead.style.flexDirection = 'row'; // Isso remove a propriedade flex-direction para que ela use o valor padrão
        toggleElement.style.marginRight = '5px';
        toggleElement.style.marginTop = '0';
    }

    // Para voltar a barra de menu de volta quando a resolução for maior que 768
    if (window.innerWidth > 900) {
        navElement.style.display = 'block';
    }

    // Adicionar ou remover a classe "on" na "menu-section"
    menuSection.classList.toggle("on", show);
});