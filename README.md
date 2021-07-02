# Curso Vue

## 1. Diretivas
São propriedades passadas dentro das tags **html**, funcionam da seguinte forma:
```html
<tag v-diretiva:argumento.modificador="'valor'" />
```

**v-bind**  
Usado antes de propriedades para acessar valores dentro da instancia do vue e fazer ligação para atributo da tag.
```html
<a v-bind:href="link">Google</a>
```
**v-once**  
Usado para acessar valores dentro da instancia do vue uma **única vez**, se o valor for atualizado ele não será alterado.
```html
<p v-once>{{ titulo }}</p>
```

**v-text**  
Usado para inserir text em uma tag.
```html
<p v-text="'Usando diretiva v-text'"></p>
```

**v-html**  
Usado para exibir código Html, caso passado nas chaves duplas interpretam os dados como **texto simples**.
```html
linkHtml = '<a href="http://google.com">Google</a>'
<p v-html="linkHtml"></p>
```

**ref**  
Cria uma referência para elemento da DOM.
```html
<h1 ref="aulaRef">{{ aula }}</h1>
<script>
this.$refs.aulaRef.style.color = "red"
</script>
```

**v-model**  
Faz a ligação entre view e o template sincronizados, **two-way data binding**.
```html
<input type="text" v-model="titulo">
```

**v-on**  
Usado para ficar escutando evento.
```html
<button v-on:click="somar">+1</button>
```

### 1.1. Modificadores  

#### 1.1.1. Modificadores de input (v-model)
Modificadores que devem ser passados junto a diretiva `v-model` para tratar os dados de entrada do campo input.

**lazy**  
Aplica valor digitado apenas depois que o foco sair do campo de entrada.
```html
<input type="text" v-model.lazy="usuario.email">
```
**trim**  
Remove espaço no inicio e no final do valor digitado no campo de entrada.
```html
<input type="text" v-model.trim="usuario.email">
```
**number**  
Retorna valor digitado no campo de entrada como valor numérico e não mais string como é por padrão.
```html
<input type="number" v-model.number="usuario.idade">
```

#### 1.1.2. Modificadores de Eventos  
Modificadores que devem ser passados junto a diretiva `v-on` para controlar os comportamentos dos eventos.  

**stop (StopPropagation)**  
Usado diretamente na diretiva, para parar propagação do evento.  

```html
<p v-on:mousemove="mostraCoordenadas">
    Mouse: {{ x }} e {{ y }}.
    <span v-on:mousemove.stop>Parar aqui</span>
</p>
```

**prevent (PreventDefault)**  
Usado diretamente na diretiva, para prevenir comportamento padrão do browser.
```html
<a v-on:click.prevent href="http://guisalmeida.com">Acesse o site</a>
```
**key (teclas)**  
Usadas para emitir um evento especifico.
```html
<input v-on:keyup="exibirAlerta" type="text">
<!-- Chama função todas vez que uma tecla for pressionada -->
<input v-on:keyup.enter="exibirAlerta" type="text">
<!-- Chama função apenas quando enter for pressionada -->
<input v-on:keyup.enter.alt="exibirAlerta" type="text">
<!-- Chama função apenas quando enter+alt forem pressionadas -->
```

### 1.2. Condicionais  
**v-if**  
Usado para criar uma lógica condicional no template html.  

> Exclui elemento da DOM.
```html
<p v-if="logado">Usuário Logado: {{ nome }}</p>
<p v-else-if="anonimo">Usuário Anônimo</p>
<p v-else>Nenhum Usuário Logado</p>
```
**v-show**  
Usado para mostrar ou ocultar elemento no template html.  

> Não exclui elemento da DOM, aplica display: none.
```html
<footer v-show="logado">Desenvolvido para vocẽ</footer>
```

### 1.3. Listas  
**v-for**  
Cria um laço de repetição for no elemento.  

> Exclui elemento da DOM.
```html
<!-- Laço com array -->
<ul>
    <li v-for="(cor, index) in cores">
        {{ cor }} está no índice {{ index }}
    </li>
</ul>
<!-- Laço com objetos -->
<ul>
    <li v-for="pessoa in pessoas">
        <div v-for="(valor, chave, index) in pessoa">{{index}}) {{ chave }} = {{ valor }}</div>
    </li>
</ul>
```

### 1.4. Diretivas personalizadas
Vue permite registrar suas próprias diretivas personalizadas. Note que no Vue 2.0, a forma primária de abstração e reuso de código são componentes - no entanto, pode haver casos em que você só precisa de um acesso de baixo nível ao DOM em elementos simples, e aí diretivas personalizadas seriam úteis.
Para isso podem ser usados alguns hooks com argumentos:  

![hooks](modulo12_diretivas/diretivas-exercicios/src/assets/images/hooks-diretivas.png)

#### 1.4.1. Diretiva global
**Exemplo**  

No arquivo `main.js`:
```js
Vue.directive('destaque', {
	bind(el, binding) {
		let delay = 0
		if(binding.modifiers['delay']) delay = 2000

		setTimeout(() => {
			if(!binding.arg) {
				el.style.color = binding.value
				return
			}
			el.style.backgroundColor = binding.value
		}, delay);
	}
})
```
No componente:
```html
<template>
    <p v-destaque:background.delay="'lightgreen'">Usando diretiva personalizada</p>
    <p v-destaque.delay="'yellow'">Usando diretiva personalizada</p>
</template>
```

#### 1.4.2. Diretiva local
**Exemplo**  
No componente:
```html
<template>
    <p v-destaque="valor">Usando diretiva local personalizada</p>
</template>

<script>
    export default {
        directives: {
            "diretiva-local": {
                bind(el, binding) {
                    // faça algo
                }
            }
        },
    }
<script/>
```

---
## 2. Methods (métodos)
Funções de cada componente.

**$event**  
> Por padrão ao chamarmos uma função sem passar nenhum paramêtro,
> o evento é passado automaticamente. Caso necessitamos passar um parâmetro
> e o evento, devemos usar a palavra reservada `$event`.
```html
<button v-on:click="somar(5, $event)">+1</button>
```
---
## 3. Computed (computados)
Funções sincronas.  

---
## 4. Watch
Funções assincronas que ficam monitorando alterações na propriedade.

> Precisam ter o mesmo nome que a propriedade que vai ser alterada.

```js
watch: {
    propriedade(<valornovo>, <valorantigo>) {
        // faça algo
    }
},
```

Para monitorar o **estado interno** de cada um dos elementos da propriedade que está sendo monitorada, deve-se alterar o método com nome da propriedade para um objeto com um atributo chamado `deep: true` e o método que deve ser executado é passado no atributo `handler`.

```js
watch: {
    propriedade: {
      deep: true,
      handler() {
        // faça algo
      }
    }
  },
```

---

## 5. Ciclo de Vida  
![image](https://br.vuejs.org/images/lifecycle.png)  

### 5.1. Métodos do Ciclo de Vida

**beforeCreate**  
Chamado uma unica vez na criação da instância, antes de criar instância.  
**created**  
Chamado uma unica vez na criação da instância, depois de criar instância. 

**beforeMount**  
Chamado uma unica vez na criação da instância, antes de criar template e jogar na DOM. 

**mounted**  
Chamado uma unica vez na criação da instância, quando a DOM está montada. 

**beforeUpdate**  
Chamado sempre que houver uma mudança para ser aplicada na DOM, antes de criar template e jogar na DOM. 

**updated**  
Chamado sempre que houver uma mudança para ser aplicada na DOM, depois de criar template e atualizar na DOM. 

**beforeDestroy**  
Chamado uma única vez antes da instância ser destruida. 

**destroyed**  
Chamado uma única vez depois da instância ser destruida. 

<details>
<summary>Exemplos</summary>  

```js
new Vue({
    el: '#app',
    data: {
        titulo: 'Ciclo de vida'
    },
    beforeCreate() {
        console.log('antes de criar instância')
    },
    created() {
        console.log('depois de criar instância')
    },
    beforeMount() {
        console.log('antes de criar template e jogar na DOM')
    },
    mounted() {
        console.log('quando a DOM está montada')
    },
    beforeUpdate() {
        console.log('antes de criar template e jogar na DOM')
    },
    updated() {
        console.log('depois de criar template e atualizar na DOM')
    },
    beforeDestroy() {
        console.log('Chamado uma única vez antes da instância ser destruida');
    },
    destroyed() {
        console.log('Chamado uma única vez depois da instância ser destruida')
    }
})
```
</details>

### 5.2. Métodos do Ciclo de Vida Adicionais para Componente Vivo
**activated**  
Chamado quando o componente é criado pela primeira vez, ou reativado apos ter sido desativado. 

**deactivated**  
Chamado quando o componente é removido do contexto porém não é destruido(keep-alive) mantendo seu estado como se estivesse oculto e esperando para ser reativado. 

---
## 6. Components
**slot**  
Recebe tudo que foi passado dentro da tag do compenente para seu escopo sem ser necessário uso de props por exemplo.
Podem ser nomeados diversos elemento para serem identificados no componente.  

```html
<!-- Passando dados dentro do componente -->
<Component>
    <h1 slot="autor">{{ citacoes[indice].autor }}</h1>
    <p slot="texto">{{ citacoes[indice].texto }}</p>
    <h6 slot="fonte">{{ citacoes[indice].fonte }}</h6>
</Component>

<!-- Recebendo dados no componente -->
<div class="citacao">
    <slot name="autor"/>
    <slot name="texto"/>
    <slot name="fonte"/>
</div>
```

**keep-alive**  
Evita que no recarregamento de página ou na troca do componente, ele não seja destroido e criado novamente mantendo estado atual quando componente for acessado novamente.
> Podem ser escutados nos métodos do ciclo de vida:
> `activated(), deactivated()`

```html
<keep-alive>
    <component :is="componente"/>
</keep-alive>

```
---
## 7. Filters (Filtros)
Métodos que podem ser criados dentro do atributo `filters` onde fazem um tratativa em um determinado dado. A **sintaxe** funciona com um **pipe (|)** antes e depois o filtro. São suportados dentro de **interpolações** e no contexto de valores do **v-bind**.

**Exemplo filtro local:**
```html
<template>
	<div id="app">
		<p>{{ cpf | cpfFormat }}</p>
        <input type="text" :value="cpf | cpfFormat">
	</div>
</template>

<script>
export default {
	filters: {
		cpfFormat(valor){
			const arr = valor.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	data() {
		return {
			cpf: '01234567891'
		}
	}
}
</script>
```

**Exemplo filtro global:**
No arquivo `main.js`:  
```js
Vue.filter('inverter', (valor) => {
	return valor.split('').reverse().join('')
})
```
No componente:  

```html
<template>
	<div id="app">
		<p>{{ cpf | inverter }}</p>
        <input type="text" :value="cpf | inverter">
	</div>
</template>

<script>
export default {
	data() {
		return {
			cpf: '01234567891'
		}
	}
}
</script>
```

> Filtros podem ser encadeados recebendo o valor retornado do filtro anterior:
> ```html
> <template>
> 	<div id="app">
> 		<p>{{ cpf | inverter | cpfFormat }}</p>
>       <input type="text" :value="cpf | inverter | cpfFormat">
> 	</div>
> </template>
> ```

---
## 8. Mixins
Mixins são uma forma flexível de distribuir funcionalidade reutilizável em diversos componentes Vue. Um objeto mixin pode conter quaisquer opções de componente. Quando um componente utiliza um mixin, todas as opções deste serão misturadas (em inglês, mixed in) com as opções do próprio componente.  
`frutasMixin.js`
```js
export default {
    data() {
        return {
            fruta: '',
            frutas: ['banana', 'maçã', 'laranja']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    },
}
```
O componente vai receber tudo que foi declarado no mixin e mesclar com seus próprios parâmetros quando for criado sua instância.  

`component.vue`
```html
<script>
import frutasMixin from '@/frutasMixin'

export default {
    mixins: [
        frutasMixin
    ]
}
<script/>
```

**Mixin global**
```js
Vue.mixin({
    created() {
        console.log('Created GLOBAL mixin')
    }
})
```

---
## 9. Plugins
Plugins oficiais do vue: @vue/cli-plugin-nomedoplugin  
Exemplo: @vue/cli-plugin-babel

Plugins de terceiros: vue-cli-plugin-nomedoplugin
Exemplo: vue-cli-plugin-electron-builder

---
## 10. Referências

Documentação Oficial - Introdução: https://br.vuejs.org/v2/guide/

Documentação Oficial - Sintaxe de Template: https://br.vuejs.org/v2/guide/syntax.html

Documentação Oficial - Manipulação de Eventos: https://br.vuejs.org/v2/guide/events.html

Documentação Oficial - Dados Computados & Observadores: https://br.vuejs.org/v2/guide/computed.html

Documentação Oficial - Interligações de Classe e Estilo: https://br.vuejs.org/v2/guide/class-and-style.html

Documentação Oficial - Renderização Condicional: https://br.vuejs.org/v2/guide/conditional.html

Documentação Oficial - Renderização de Listas: https://br.vuejs.org/v2/guide/list.html

Documentação Oficial - Instância Vue: https://br.vuejs.org/v2/guide/instance.html

Documentação oficial - Arquivo `.vue`: https://br.vuejs.org/v2/guide/single-file-components.html

Documentação oficial - método `render()`: https://br.vuejs.org/v2/guide/render-function.html

Documentação oficial - componentes: https://br.vuejs.org/v2/guide/components.html

Documentação oficial - registro de componentes: https://br.vuejs.org/v2/guide/components-registration.html

Documentação Oficial - Props: https://br.vuejs.org/v2/guide/components.html#Passando-Dados-aos-Filhos-com-Props

Documentação Oficial - Eventos Personalizados: https://br.vuejs.org/v2/guide/components.html#Enviando-Mensagens-ao-Pai-com-Eventos

Documentação Oficial - Slots: https://br.vuejs.org/v2/guide/components.html#Distribuicao-de-Conteudo-com-Slots

Documentação Oficial - Componentes Dinâmicos: https://br.vuejs.org/v2/guide/components.html#Componentes-Dinamicos

Documentação Oficial - Formulário: https://br.vuejs.org/v2/guide/forms.html

Documentação Oficial - Diretivas Personalizadas: https://br.vuejs.org/v2/guide/custom-directive.html

Vue CLI: https://cli.vuejs.org/