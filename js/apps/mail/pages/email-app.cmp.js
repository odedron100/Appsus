import { emailService } from '../services/email.service.js';
import emailMenu from '../cmps/email-menu.cmp.js';
import emailList from '../cmps/email-list.cmp.js';

export default {
    template: `
         <section class="email-app main-container">
            <email-menu />
            <email-list :emails="emailsToShow"/>
         </section>
    `,
    data() {
        return {
            emails: null,
            // filterBy: null,
        }
    },
    methods: {
        loadEmails() {
            emailService.query()
                .then(emails => this.emails = emails)
        }
    },
    computed: {
        emailsToShow() {
            // if (!this.filterBy) return this.emails
            // const searchStr = this.filterBy.byVendor.toLowerCase()
            // const carsToShow = this.cars.filter(car => {
            //     return car.vendor.toLowerCase().includes(searchStr)
            // })
            const emailsToShow = this.emails;
            return emailsToShow
        }
    },
    created() {
        this.loadEmails();
    },
    components: {
        emailMenu,
        emailList
    }
}


