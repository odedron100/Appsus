// import { emailService } from '../services/email.service.js';
import emailMenu from '../cmps/email-menu.cmp.js';
import emailList from '../cmps/email-list.cmp.js';

export default {
    template: `
         <section class="email-app main-container">
            <email-menu />
            <email-list />
         </section>
    `,
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    },
    created() {
    },
    components: {
        emailMenu,
        emailList
    }
}


