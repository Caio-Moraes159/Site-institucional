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

// Adiciona um ouvinte de evento ao carregar a página
window.addEventListener('resize', updateTitulo);

// Adiciona um ouvinte de evento ao redimensionar a tela
window.addEventListener('load', updateTitulo);



