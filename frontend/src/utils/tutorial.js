import introJs from 'intro.js';
import 'intro.js/introjs.css';

const startTutorial = (screenType) => {
        introJs().setOptions({
            steps: screenType === 'desktop' ? [
                {
                    intro: "Bem-vindo ao Diagram Builder! Vamos começar ?",
                    position: 'left'
                },
                {
                    element: document.querySelector('.react-flow__pane'),
                    intro: "Esta é a área de trabalho onde você pode arrastar e soltar elementos para criar seu diagrama.",
                },
                {
                    element: document.querySelector('#edit-area'),
                    intro: "Aqui está a barra lateral de edição do projeto. Você pode alterar o nome do diagrama e salvar seu progresso, além de copiar o ID para compartilhar com outros usuários.",
                },
                {
                    element: document.querySelector('#Stacks'),
                    intro: "Estes são alguns dos vários elementos que podem ser inseridos no seu projeto. Clique e arraste qualquer elemento até a área de trabalho para começar a construir seu diagrama!",
                },
                {
                    intro: "Divirta-se criando seus diagramas!",
                }
            ] : [
                {
                    intro: "Bem-vindo ao Diagram Builder! Vamos começar ?",
                    position: 'left'
                },
                {
                    element: document.querySelector('.react-flow__pane'),
                    intro: "Esta é a área de trabalho onde você pode colocar elementos para criar seu diagrama.",
                },
                {
                    element: document.querySelector('#edit-area'),
                    intro: "Aqui está a barra lateral de edição do projeto. Você pode alterar o nome do diagrama e salvar seu progresso, além de copiar o ID para compartilhar com outros usuários.",
                },
                {
                    element: document.querySelector('#Stacks'),
                    intro: "Estes são alguns dos vários elementos que podem ser inseridos no seu projeto. Clique em algum elemento para selecioná-lo e depois toque na área de trabalho para adicioná-lo ao seu diagrama!",
                },
                {
                    intro: "Divirta-se criando seus diagramas!",
                }
            ]
        }).start();
    };

    export default startTutorial;