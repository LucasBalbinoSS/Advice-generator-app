(() => {
    const $conselho = document.querySelector('.js-conselho')
    const $citacao = document.querySelector('.js-citacao')
    
    requisicao()
    requisicaoClique()


    // funcoes
    function requisicao() {
        const url = 'https://api.adviceslip.com/advice'

        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(json => {
            textoAparecer()
            classesRemover()


            $conselho.innerHTML = `Advice #${json.slip.id}`
            $citacao.innerHTML = `"${json.slip.advice}"`
        })
    }

    function requisicaoClique() {
        const $botaoRequisicao = document.querySelector('.js-container-dado-botao')

        $botaoRequisicao.addEventListener('click', () => {
            requisicao()
        })
    }

    function textoAparecer() {
        $conselho.classList.add('texto-aparecer')
        $citacao.classList.add('texto-aparecer')
    }

    function classesRemover() {
        setTimeout(() => {
            $conselho.classList.remove('texto-aparecer')
            $citacao.classList.remove('texto-aparecer')
        }, 1000);
    }

})()