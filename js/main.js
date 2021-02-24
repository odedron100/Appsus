import appHeader from './cmps/app-header.cmp.js';
// import appFooter from './cmps/app-footer.cmp.js';
import { myRouter } from './routes.js'


const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <app-header />
            <router-view />
        </section>
    `,
    components: {
        appHeader,
        // appFooter,
    }
}

const app = new Vue(options)

