import { utilService } from '../../../services/util-service.js';
import { emailService } from '../services/email.service.js';
import emailPreview from './email-preview.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import longText from '../cmps/long-text.cmp.js';
import { eventBus } from '../../../services/event-bus.service.js'



export default {
    template: `
        <main class="main-content-list">
          <email-filter @filter="setFilter" @sort="setSort"/>
            <ul class="list-items">
                <li v-for="email in emailsToShow" :key="email.id" class="list-item" @click="showPreview(email)">
                    <email-preview v-if="email.isPreview" :email="email"/>
                    <div  class="email-short" :class="{read:!email.isRead,open:isOpen}">
                        <div class="icons">
                            <span @click.stop="emailStarred(email)"><i class="far fa-star" :class="{fas:email.isStarred}"></i></span>
                            <span @click.stop="emailDeleted(email)"><i class="fas fa-trash"></i></span>
                        </div>
                        <div class="name-sent">
                        <h4 @click.stop="setSort('name')" :class="{bold:!email.isRead}">{{email.name}}</h4>
                        </div>
                        <div class="details-sent">
                        <long-text class="title-sent" :desc="email.subject" />
                        <span>-</span>
                        <long-text class="desc-sent" :desc="email.body" />
                        </div>
                        <div class="time-sent">
                        <h4 @click.stop="setSort('time')">{{getTime(email.sentAt)}}</h4>
                    </div>
                    </div>
                </li>
            </ul>
        </main>
    `,
    data() {
        return {
            emails: null,
            filterBy: null,
            sortBy: null,
            isOpen: false,
        }
    },
    methods: {
        loadEmails() {
            emailService.query()
                .then(emails => this.emails = emails)
        },
        showPreview(email, ev) {
            email.isRead = true;
            email.isPreview = !email.isPreview;
            utilService.saveToStorage('emails', this.emails)
        },
        emailStarred(email) {
            const msg = {
                txt: 'Email starred succesfully!',
                type: 'success'
            }
            eventBus.$emit('event-msg', msg)
            email.isStarred = !email.isStarred;
            utilService.saveToStorage('emails', this.emails)
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        setSort(sortBy) {
            this.sortBy = sortBy
            console.log('this', this.sortBy);
        },
        emailDeleted(email) {
            const msg = {
                txt: 'Email Deleted succesfully!',
                type: 'success'
            }
            eventBus.$emit('event-msg', msg)
            emailService.removeEmail(email.id)
            this.loadEmails();
        },
        setSort(sortBy) {
            console.log('sortBy', sortBy);
            this.sortBy = sortBy;
        },
        getTime(time) {
            var timeSent = new Date(time);
            return `${timeSent.getHours()}:${timeSent.getMinutes()}`
        },
        // togglePreviewColor() {
        //     this.isOpen = !this.isOpen
        // }
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy) return this.emails;
            const searchStr = this.filterBy.toLowerCase()
            const emailsToShow = this.emails.filter(email => {
                return email.name.toLowerCase().includes(searchStr)
            })
            return emailsToShow
        },
    },
    created() {
        this.loadEmails();
    },
    components: {
        emailPreview,
        emailFilter,
        longText
    }
}
