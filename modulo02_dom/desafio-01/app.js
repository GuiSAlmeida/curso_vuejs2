new Vue({
    el: '#desafio',
    data: {
        nome: 'Guilherme',
        idade: 34,
        image: 'https://avatars.githubusercontent.com/u/45276342?v=4'
    },
    methods: {
        randomNumber() {
            return Math.random()
        }
    }
})