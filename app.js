/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:

- O link da sua versão do quiz;
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
- Quais foram as suas menores dificuldades durante a execução desse exercício.

Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues

Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
*/

const correctAnswers = ['B','B','B','B']
const form = document.querySelector('form')
const tryAgainButton = document.querySelector('.modal-button')
const modal = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal-message')
const modalScore = document.querySelector('.modal-score')
const modalNotClose = ['modal-frame','modal-message','modal-score','modal-container']

const checkUserAnswers = correctAnswers => {
    let score = 0

    correctAnswers.forEach( (answer, index) => {
        index += 1
        const userAnswer = form[`inputQuestion${index}`].value
        if(answer == userAnswer){
            score += 25
        }
    } )

    return score
}

const showResult = score => {
    const isBadResult = !(score > 50)
    if(isBadResult){
       modalResultMessage('Podia ser melhor',score)
       return
    }
    modalResultMessage('Muito bem =)',score)
}

const modalResultMessage = (message, score) => {
    modalMessage.textContent = message
    modalScore.textContent = `Você acertou ${score}% do Quiz`
    modal.style.display = 'block'
}

form.addEventListener('submit', event => {
    event.preventDefault()
    const userScore = checkUserAnswers(correctAnswers)
    showResult(userScore)
})

modal.addEventListener('click', event => {
    const clickedElement = event.target.classList[0]
    const closeable = !(modalNotClose.some( item => item === clickedElement))
    if(closeable){
        modal.style.display = 'none'
    }
})
