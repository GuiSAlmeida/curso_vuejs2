# Axios in VueJS

```sh
npm install axios
```

### Axios global
```js
// ./src/plugins/axios.js
import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = 'https://curso-vuejs2-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})

// Criando uma instância
Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vuejs2-default-rtdb.firebaseio.com/'
        })
    }
})
```

### Axios local
```js
// component.vue
import axios from 'axios'

export default {
    methods: {
        getUsers() {
            axios.get('https://curso-vuejs2-default-rtdb.firebaseio.com/usuarios.json')
                .then(res => {
                    console.log(res)
                })
        }
    }
}
```

### Interceptar requisição
```js
Vue.prototype.$http.interceptors.request.use(config => {
    if (config.method == 'post') {
        // faça algo
    }
    return config
}, error => Promise.reject(error))
```

### Interceptar resposta
```js
Vue.prototype.$http.interceptors.response.use(res => {
    const users = []
    for (let key in res.data) {
        users.push({ id: key, ...res.data[key] })
    }
    res.data = users
    return res
}, error => Promise.reject(error))
```

### Headers
```js
axios.defaults.headers.commom['authorization'] = 'abc123'
axios.defaults.headers.get['Accepts'] = 'aplication/json'

Vue.prototype.$http = axios.create({
    baseURL: 'https://curso-vuejs2-default-rtdb.firebaseio.com/',
    headers: {
        "Authorization": "abc123"
    }
})
```