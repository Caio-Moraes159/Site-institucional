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







// Função para mover o parágrafo
function moveParagraph() {
    const textLastImg = document.querySelector('.text_last_img');
    const sectionText2 = document.querySelector('.section_text2');
    
    if (window.innerWidth < 769) {
        // Move o parágrafo para o início da seção section_text2
        if (textLastImg && sectionText2) {
            sectionText2.insertBefore(textLastImg, sectionText2.firstChild);
        }
    } else {
        // Reverte a mudança se a largura for maior que 750px
        const divText1 = document.querySelector('.div_text1');
        if (textLastImg && divText1 && !divText1.contains(textLastImg)) {
            divText1.appendChild(textLastImg);
        }
    }
}

// Adiciona um listener para verificar quando a largura da tela muda
window.addEventListener('resize', moveParagraph);

// Executa a função ao carregar a página
moveParagraph();