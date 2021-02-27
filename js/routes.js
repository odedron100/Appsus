import homePage from './pages/home-page.cmp.js'
import emailApp from './apps/mail/pages/email-app.cmp.js';
import emailCompose from './apps/mail/cmps/email-compose.cmp.js';
import emailList from './apps/mail/cmps/email-list.cmp.js';
import emailStarred from './apps/mail/cmps/email-starred.cmp.js';
import emailSent from './apps/mail/cmps/email-sent.cmp.js';
import emailDraffted from './apps/mail/cmps/email-draffted.cmp.js';
import keepApp from './apps/keep/pages/keep-app.cmp.js';
import bookApp from './apps/book/pages/book-app.cmp.js'
import bookDetails from './apps/book/pages/book-details.cmp.js';
import bookAdd from './apps/book/pages/book-add.cmp.js';
import reviewAdd from './apps/book/cmps/review-add.cmp.js';


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
    {
        path: '/book',
        component: bookApp,
        children: [
            {
                path: '/book/:bookId',
                component: bookDetails
            },
            {
                path: '/book/add',
                component: bookAdd
            },
            {
                path: '/book/:bookId/review-add',
                component: reviewAdd
            },
        ]
    },
]

export const myRouter = new VueRouter({ routes })