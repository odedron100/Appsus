import homePage from './pages/home-page.cmp.js'
import emailApp from './apps/mail/pages/email-app.cmp.js';
import keepApp from './apps/keep/pages/keep-app.cmp.js';
// import about from './pages/about.cmp.js'
// import bookDetails from './pages/book-details.cmp.js'
// import reviewAdd from './cmps/review-add.cmp.js'
// import bookAdd from './pages/book-add.cmp.js'


const routes = [
    {
        path: '/',
        component: homePage,
    },
    {
        path: '/email',
        component: emailApp
    },
    {
        path: '/keep/',
        component: keepApp
    },

    // {
    //     path: '/book',
    //     component: bookApp
    // },

]

export const myRouter = new VueRouter({ routes })