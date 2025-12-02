import introJs from 'intro.js';
import 'intro.js/introjs.css';

const startTutorial = (screenType) => {
    // Adiciona padding extra no edit-area durante o tutorial mobile
    if (screenType !== 'desktop') {
        const editArea = document.querySelector('#edit-area');
        if (editArea) {
            editArea.classList.add('tutorial-padding-bottom');
        }
    }

    const intro = introJs();
    intro.setOptions({
        steps: screenType === 'desktop' ? [
            {
                intro: "Bem-vindo ao Project Builder! Vamos começar ?",
            },
            {
                element: document.querySelector('.react-flow__pane'),
                intro: "Esta é a área de trabalho onde você pode arrastar e soltar elementos para criar seu diagrama.",
            },
            {
                element: document.querySelector('#edit-area'),
                intro: "Aqui está a barra lateral de edição. Você pode alterar o nome do projeto e salvar seu progresso, além de copiar o ID para compartilhar com outros usuários.",
                position: 'right'
            },
            {
                element: document.querySelector('#Stacks'),
                intro: "Estes são alguns dos vários elementos que podem ser inseridos no seu projeto. Clique e arraste qualquer elemento até a área de trabalho para começar a construir seu projeto!",
                position: 'right'
            },
            {
                intro: "Divirta-se criando seus projetos!",
            }
        ] : [
            {
                intro: "Bem-vindo ao Project Builder! Vamos começar ?",
                position: 'left'
            },
            {
                element: document.querySelector('.react-flow__pane'),
                intro: "Esta é a área de trabalho onde você pode colocar elementos para criar seu diagrama.",
            },
            {
                element: document.querySelector('#edit-area'),
                intro: "Aqui está a barra lateral de edição. Você pode alterar o nome do projeto e salvar seu progresso, além de copiar o ID para compartilhar com outros usuários.",
                position: 'bottom'
            },
            {
                element: document.querySelector('#Stacks'),
                intro: " Clique em algum elemento para selecioná-lo e depois toque na área de trabalho para adicioná-lo ao seu projeto!",
            },
            {
                intro: "Divirta-se criando seus projetos!",
            }
        ]
    });

    // Remove o padding extra ao sair do tutorial
    intro.onexit(() => {
        if (screenType !== 'desktop') {
            const editArea = document.querySelector('#edit-area');
            if (editArea) {
                editArea.classList.remove('tutorial-padding-bottom');
            }
        }
    });

    intro.start();
};

export default startTutorial;