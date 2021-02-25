import homePage from './pages/home-page.cmp.js'
import emailApp from './apps/mail/pages/email-app.cmp.js';
import emailCompose from './apps/mail/cmps/email-compose.cmp.js';
import emailList from './apps/mail/cmps/email-list.cmp.js';
import emailStarred from './apps/mail/cmps/email-starred.cmp.js';
import emailSent from './apps/mail/cmps/email-sent.cmp.js';
import emailDraffted from './apps/mail/cmps/email-draffted.cmp.js';
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
        component: emailApp,
        children: [{
            path: '/email/inbox',
            component: emailList,
        },
        {
            path: '/email/starred',
            component: emailStarred,
        },
        {
            path: '/email/sent',
            component: emailSent,
        },
        {
            path: '/email/draftted',
            component: emailDraffted,
        },
        {
            path: '/email/compose',
            component: emailCompose,
        },]
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