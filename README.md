# 1. Curso Vue

## 1.1 Diretivas
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

### 1.1.1 Eventos

<details>
<summary>v-on:evento</summary>

> Usado para ficar escutando evento.
```html
<button v-on:click="somar">+1</button>
```
</details> 

#### 1.1.1.1 Modificadores de Eventos

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
