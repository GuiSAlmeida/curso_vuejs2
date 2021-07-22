<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-alert 
      show 
      dismissible 
      v-for="message in messages"
      :key="message.text"
      :variant="message.type"
    >{{message.text}}</b-alert>

    <b-card>
      <b-form-group label="Nome:">
        <b-form-input
          type="text"
          size="lg"
          v-model="user.name"
          placeholder="Informe nome"
        />
      </b-form-group>

      <b-form-group label="E-mail:">
        <b-form-input
          type="email"
          size="lg"
          v-model="user.email"
          placeholder="Informe email"
        />
      </b-form-group>

      <hr />

      <b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
      <b-button @click="getUsers" size="lg" variant="success" class="ml-2"
        >Obter usuários</b-button
      >
    </b-card>
    <hr />

    <b-list-group>
      <b-list-group-item v-for="(user, id) in users" :key="id">
        <p><strong>Nome:</strong> {{ user.name }}</p>
        <p><strong>E-mail:</strong> {{ user.email }}</p>
        <p><strong>Id:</strong> {{ id }}</p>
        <b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
        <b-button variant="danger" size="lg" @click="excluir(id)" class="ml-2">Excluir</b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      users: [],
      id: null,
      user: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    limpar() {
      this.user.name = '',
      this.user.email = '',
      this.id = null,
      this.messages = []
    },
    carregar(id) {
      this.id = id
      this.user = { ...this.users[id]}
    },
    excluir(id) {
      this.$http.delete(`/usuarios/${id}.json`)
        .then(() => this.limpar())
        .catch(err => {
          this.limpar()
          this.messages.push({
            text: `Problema para excluir! (${err})`,
            type: 'danger'
          })
        })
    },
    salvar() {
      const method = this.id ? 'patch' : 'post'
      const finalUrl = this.id ? `/${this.id}.json` : '.json'
      this.$http[method](`/usuarios${finalUrl}`, this.user)
        .then(() => {
          this.limpar()
          this.messages.push({
            text: 'Operação realizada com sucesso!',
            type: 'success'
          })
        })
    },
    getUsers() {
      this.$http.get("usuarios.json").then((res) => {
        this.users = res.data;
      });

      // this.$http.defaults.headers.commom["authorization"] = "abc123";
    },
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
