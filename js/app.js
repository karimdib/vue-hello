console.log('hello world')

const createApp = Vue.createApp

createApp({
    data(){
        return{
            title : 'Ciao Booleaners',
            src : 'https://picsum.photos/200'
        }
    }
}).mount('#hello')


