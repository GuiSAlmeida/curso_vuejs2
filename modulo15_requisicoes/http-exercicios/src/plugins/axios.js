import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vuejs2-default-rtdb.firebaseio.com/'
// axios.defaults.headers.commom['authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'aplication/json'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vuejs2-default-rtdb.firebaseio.com/',
            headers: {
                "Authorization": "abc123"
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            // eslint-disable-next-line no-console
            console.log(config.method)
            // if (config.method == 'post') {
            //     config.method = 'put'
            // }
            return config
        })

        Vue.prototype.$http.interceptors.response.use(res => {
            // const users = []
            // for (let key in res.data) {
            //     users.push({ id: key, ...res.data[key] })
            // }
            // res.data = users
            return res
        }, error => Promise.reject(error))
    }
})