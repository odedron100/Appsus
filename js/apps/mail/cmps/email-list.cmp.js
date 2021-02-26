import { utilService } from '../../../services/util-service.js';
import { emailService } from '../services/email.service.js';
import emailPreview from './email-preview.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import longText from '../cmps/long-text.cmp.js';


export default {
    template: `
        <main class="main-content-list">
          <email-filter @filter="setFilter" @sort="setSort"/>
            <ul class="list-items">
                <li v-for="email in emailsToShow" :key="email.id" class="list-item" @click="showPreview(email)">
                    <email-preview v-if="email.isPreview" :email="email"/>
                    <div  class="email-short" :class={read:!email.isRead,open:isOpen}>
                        <div class="icons">
                            <span @click.stop="emailStarred(email)"><i class="far fa-star"></i></span>
                            <span @click.stop="emailDeleted(email)"><i class="fas fa-trash"></i></span>
                        </div>
                        <div class="name-sent">
                        <h4 @click.stop="setSort('name')">{{email.name}}</h4>
                        </div>
                        <div class="details-sent">
                        <span class="title-sent">{{email.subject}}</span>
                        <span>-</span>
                        <long-text class="desc-sent" :desc="email.body" />
                        </div>
                        <div class="time-sent">
                        <h4 @click.stop="setSort('time')">{{getTime}}</h4>
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
            email.isStarred = true;
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
            emailService.removeEmail(email.id)
            this.loadEmails();
        },
        setSort(sortBy) {
            console.log('sortBy', sortBy);
            this.sortBy = sortBy;
        }
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
        getTime() {
            return `${new Date().getHours()}:${new Date().getMinutes()}`
        }
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
