import { emailService } from '../services/email.service.js';
import emailMenu from '../cmps/email-menu.cmp.js';
import emailList from '../cmps/email-list.cmp.js';
import emailSent from '../cmps/email-sent.cmp.js';
import emailDraffted from '../cmps/email-draffted.cmp.js';
import emailStarred from '../cmps/email-starred.cmp.js';



export default {
    template: `
         <section class="email-app main-container">
            <email-menu/>
            <router-view :emails="emails"/>
         </section>
    `,
    data() {
        return {
            emails: null,
            drafts: null,
        }
    },
    methods: {
        loadEmails() {
            emailService.query()
                .then(emails => this.emails = emails)
        },
        loadDrafts() {
            emailService.draftsQuery()
                .then(drafts => this.drafts = drafts)
        },
    },
    computed: {
        emailsToShow() {
            const emailsToShow = this.emails;
            return emailsToShow
        }
    },
    created() {
        this.loadEmails();
        this.loadDrafts();
    },
    components: {
        emailMenu,
        emailList,
        emailSent,
        emailStarred,
        emailDraffted,
    }
}




