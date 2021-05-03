new Vue({
	el: '#desafio',
	data: {
		efeito: '',
		userClass: '',
		anotherClass: '',
		hasClass: false,
		inline: '',
		progressBar: 0
	},
	methods: {
		iniciarEfeito () {
			setInterval(() => {
				this.efeito = this.efeito === 'encolher' ? 'destaque' : 'encolher'
			}, 1000);
		},
		iniciarProgresso () {
			setInterval(() => {
				if (this.progressBar < 100) {
					this.progressBar++
				}
			}, 500);
		}
	}
})
