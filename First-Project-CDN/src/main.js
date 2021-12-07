const template = `<div>
<h1>{{title}} -- {{name}}</h1>
</div>`


const data = function data() {
    return {
        title:"Vue3 Tutorial Updated.",
        name : "Kushagra",

    }
}

const App = {data, template};

Vue.createApp(App).mount("#vue-app");