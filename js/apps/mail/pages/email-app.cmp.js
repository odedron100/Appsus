import { emailService } from '../services/email.service.js';
import emailMenu from '../cmps/email-menu.cmp.js';
import emailList from '../cmps/email-list.cmp.js';
import emailSent from '../cmps/email-sent.cmp.js';
import emailDraffted from '../cmps/email-draffted.cmp.js';
import emailStarred from '../cmps/email-starred.cmp.js';


export default {
    template: `
         <section class="email-app main-container">
            <email-menu @switchMode="switchTo"/>
            <email-list v-if="isInbox" :emails="emailsToShow"/>
            <email-starred v-if="isStarred" :emails="emailsToShow"/>
            <email-sent v-if="isSent" :emails="emailsToShow" />
            <email-draffted v-if="isDraffted" :emails="emailsToShow"/>
         </section>
    `,
    data() {
        return {
            emails: null,
            isInbox: true,
            isStarred: false,
            isSent: false,
            isDraffted: false,
        }
    },
    methods: {
        loadEmails() {
            emailService.query()
                .then(emails => this.emails = emails)
        },
        switchTo(name) {
            if (name === 'inbox') {
                this.isInbox = true
                this.isStarred = false
                this.isSent = false
                this.isDraffted = false
            }
            else if (name === 'star') {
                this.isInbox = false
                this.isStarred = true
                this.isSent = false
                this.isDraffted = false
            }
            else if (name === 'sent') {
                this.isInbox = false
                this.isStarred = false
                this.isSent = true
                this.isDraffted = false
            }
            else if (name === 'draft') {
                this.isInbox = false
                this.isStarred = false
                this.isSent = false
                this.isDraffted = true
            }
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
        emailList,
        emailSent,
        emailStarred,
        emailDraffted
    }
}


