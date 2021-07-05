export default {
    computed: {
		virgula() {
			return this.name.replace(/\s/g, ',')
		},
		tamanho() {
			const wordParsed = this.name.split(' ')
			return wordParsed.reduce((term, w) => {
				return term.concat(`${w} (${w.length}) `)
			}, '')
		}
	}
}