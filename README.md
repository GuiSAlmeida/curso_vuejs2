# Curso Vue

## 1 Diretivas
#### São propriedades passadas dentro das tags **html**

<details>
<summary>v-bind:propriedade</summary>

> Usado antes de propriedades para acessar valores dentro da instancia do vue e fazer ligação para atributo da tag.
```html
<a v-bind:href="link">Google</a>
```
</details>

<details>
<summary>v-model</summary>

> Faz a ligação entre view e o template sincronizados, **two-way data binding**.
```html
<input 
    type="text" 
    v-model="titulo"
>
```
</details>

<details>
<summary>v-once</summary>

> Usado para acessar valores dentro da instancia do vue uma **única vez**, se o valor for atualizado ele não será alterado.
```html
<p v-once>{{ titulo }}</p>
```
</details> 

<details>
<summary>v-html</summary>

> Usado para exibir código Html, caso passado nas chaves duplas interpretam os dados como **texto simples**.
```html
linkHtml = '<a href="http://google.com">Google</a>'
<p v-html="linkHtml"></p>
```
</details>

### 1.1 Eventos

<details>
<summary>v-on:evento</summary>

> Usado para ficar escutando evento.
```html
<button v-on:click="somar">+1</button>
```
</details> 

#### 1.1.1 Modificadores de Eventos

<details>
<summary>diretiva.stop</summary>  

> **StopPropagation** usado diretamente na diretiva, para parar propagação do evento.  

```html
<p v-on:mousemove="mostraCoordenadas">
    Mouse: {{ x }} e {{ y }}.
    <span v-on:mousemove.stop>Parar aqui</span>
</p>
```
</details> 

<details>
<summary>diretiva.prevent</summary>

> **PreventDefault** usado diretamente na diretiva, para prevenir comportamento padrão do browser.
```html
<a v-on:click.prevent href="http://guisalmeida.com">Acesse o site</a>
```
</details> 

<details>
<summary>diretiva.teclas</summary>

> **PreventDefault** usado diretamente na diretiva, para prevenir comportamento padrão do browser.
```html
<input v-on:keyup="exibirAlerta" type="text">
<!-- Chama função todas vez que uma tecla for pressionada -->
<input v-on:keyup.enter="exibirAlerta" type="text">
<!-- Chama função apenas quando enter for pressionada -->
<input v-on:keyup.enter.alt="exibirAlerta" type="text">
<!-- Chama função apenas quando enter+alt forem pressionadas -->
```
</details>  

### 1.2 Condicionais  

<details>
<summary>v-if=condicional</summary>
Usado para criar uma lógica condicional no template html.  

> Exclui elemento da DOM.
```html
<p v-if="logado">Usuário Logado: {{ nome }}</p>
<p v-else-if="anonimo">Usuário Anônimo</p>
<p v-else>Nenhum Usuário Logado</p>
```
</details> 

<details>
<summary>v-show=condicional</summary>
Usado para mostrar ou ocultar elemento no template html.  

> Não exclui elemento da DOM, aplica display: none.
```html
<footer v-show="logado">Desenvolvido para vocẽ</footer>
```
</details> 

### 1.3 Listas  

<details>
<summary>v-for=(valor, indice) in array/object</summary>
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
</details> 

</br>

## 1.2 Methods (métodos)
Funções de cada componente.

<details>
<summary>$event</summary>

> Por padrão ao chamarmos uma função sem passar nenhum paramêtro,
> o evento é passado automaticamente. Caso necessitamos passar um parâmetro
> e o evento, devemos usar a palavra reservada `$event`.
```html
<button v-on:click="somar(5, $event)">+1</button>
```
</details>

## 1.3 Computed (computados)
Funções sincronas.

## 1.4 Watch
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


## 2. Referências

Documentação Oficial - Introdução: https://br.vuejs.org/v2/guide/

Documentação Oficial - Sintaxe de Template: https://br.vuejs.org/v2/guide/syntax.html

Documentação Oficial - Manipulação de Eventos: https://br.vuejs.org/v2/guide/events.html

Documentação Oficial - Dados Computados & Observadores: https://br.vuejs.org/v2/guide/computed.html

Documentação Oficial - Interligações de Classe e Estilo: https://br.vuejs.org/v2/guide/class-and-style.html

Documentação Oficial - Renderização Condicional: https://br.vuejs.org/v2/guide/conditional.html

Documentação Oficial - Renderização de Listas: https://br.vuejs.org/v2/guide/list.html