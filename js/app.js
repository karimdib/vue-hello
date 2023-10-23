console.log('hello world')

const createApp = Vue.createApp

createApp({
    data(){
        return{
            title : 'Ciao Booleaners'
        }
    }
}).mount('#hello')


