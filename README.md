# Curso Vue

## 1 Diretivas
São propriedades passadas dentro das tags **html**

#### v-bind
Usado antes de propriedades para acessar valores dentro da instancia do vue e fazer ligação para atributo da tag.
```html
<a v-bind:href="link">Google</a>
```

#### v-model
Faz a ligação entre view e o template sincronizados, **two-way data binding**.
```html
<input 
    type="text" 
    v-model="titulo"
>
```

#### v-once
Usado para acessar valores dentro da instancia do vue uma **única vez**, se o valor for atualizado ele não será alterado.
```html
<p v-once>{{ titulo }}</p>
```

#### v-html
Usado para exibir código Html, caso passado nas chaves duplas interpretam os dados como **texto simples**.
```html
linkHtml = '<a href="http://google.com">Google</a>'
<p v-html="linkHtml"></p>
```
#### ref
Cria uma referência para elemento da DOM.
```html
<h1 ref="aulaRef">{{ aula }}</h1>
<script>
this.$refs.aulaRef.style.color = "red"
</script>
```

### 1.1 Eventos

#### v-on:evento
Usado para ficar escutando evento.
```html
<button v-on:click="somar">+1</button>
```

### 1.1.1 Modificadores de Eventos

#### stop  
**StopPropagation** usado diretamente na diretiva, para parar propagação do evento.  

```html
<p v-on:mousemove="mostraCoordenadas">
    Mouse: {{ x }} e {{ y }}.
    <span v-on:mousemove.stop>Parar aqui</span>
</p>
```

#### prevent
**PreventDefault** usado diretamente na diretiva, para prevenir comportamento padrão do browser.
```html
<a v-on:click.prevent href="http://guisalmeida.com">Acesse o site</a>
```
#### teclas(keys) 
Usadas para emitir um evento especifico.
```html
<input v-on:keyup="exibirAlerta" type="text">
<!-- Chama função todas vez que uma tecla for pressionada -->
<input v-on:keyup.enter="exibirAlerta" type="text">
<!-- Chama função apenas quando enter for pressionada -->
<input v-on:keyup.enter.alt="exibirAlerta" type="text">
<!-- Chama função apenas quando enter+alt forem pressionadas -->
```

### 1.2 Condicionais  
#### v-if=condicional
Usado para criar uma lógica condicional no template html.  

> Exclui elemento da DOM.
```html
<p v-if="logado">Usuário Logado: {{ nome }}</p>
<p v-else-if="anonimo">Usuário Anônimo</p>
<p v-else>Nenhum Usuário Logado</p>
```
#### v-show=condicional
Usado para mostrar ou ocultar elemento no template html.  

> Não exclui elemento da DOM, aplica display: none.
```html
<footer v-show="logado">Desenvolvido para vocẽ</footer>
```

### 1.3 Listas  
#### v-for=(valor, indice) in array/object
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

## 2 Methods (métodos)
Funções de cada componente.
#### $event

> Por padrão ao chamarmos uma função sem passar nenhum paramêtro,
> o evento é passado automaticamente. Caso necessitamos passar um parâmetro
> e o evento, devemos usar a palavra reservada `$event`.
```html
<button v-on:click="somar(5, $event)">+1</button>
```

## 3 Computed (computados)
Funções sincronas.

## 4 Watch
Funções assincronas.

<details>
<summary>Sintaxe</summary>  

> Precisam ter o mesmo nome que a propriedade que vai ser alterada.

```js
watch: {
    propriedade(valornovo, valorantigo) {
        // faça algo
    }
},
```
</details>

## 5 Ciclo de Vida  
![image](https://br.vuejs.org/images/lifecycle.png)  

### 5.1 Métodos do Ciclo de Vida

#### `beforeCreate()`
Chamado uma unica vez na criação da instância, antes de criar instância.  
#### `created()`
Chamado uma unica vez na criação da instância, depois de criar instância. 

#### `beforeMount()`
Chamado uma unica vez na criação da instância, antes de criar template e jogar na DOM. 

#### `mounted()`
Chamado uma unica vez na criação da instância, quando a DOM está montada. 

#### `beforeUpdate()`
Chamado sempre que houver uma mudança para ser aplicada na DOM, antes de criar template e jogar na DOM. 

#### `updated()`
Chamado sempre que houver uma mudança para ser aplicada na DOM, depois de criar template e atualizar na DOM. 

#### `beforeDestroy()`
Chamado uma única vez antes da instância ser destruida. 

#### `destroyed()`
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

## 6. Plugins
Plugins oficiais do vue: @vue/cli-plugin-nomedoplugin  
Exemplo: @vue/cli-plugin-babel

Plugins de terceiros: vue-cli-plugin-nomedoplugin
Exemplo: vue-cli-plugin-electron-builder
## 7. Referências

Documentação Oficial - Introdução: https://br.vuejs.org/v2/guide/

Documentação Oficial - Sintaxe de Template: https://br.vuejs.org/v2/guide/syntax.html

Documentação Oficial - Manipulação de Eventos: https://br.vuejs.org/v2/guide/events.html

Documentação Oficial - Dados Computados & Observadores: https://br.vuejs.org/v2/guide/computed.html

Documentação Oficial - Interligações de Classe e Estilo: https://br.vuejs.org/v2/guide/class-and-style.html

Documentação Oficial - Renderização Condicional: https://br.vuejs.org/v2/guide/conditional.html

Documentação Oficial - Renderização de Listas: https://br.vuejs.org/v2/guide/list.html

Documentação Oficial - Instância Vue: https://br.vuejs.org/v2/guide/instance.html

Documentação oficial - Arquivo ".vue": https://br.vuejs.org/v2/guide/single-file-components.html

Documentação oficial - método `render()`: https://br.vuejs.org/v2/guide/render-function.html

Vue CLI: https://cli.vuejs.org/