import emailPreview from './email-preview.cmp.js';

export default {
    props: ['emails'],
    template: `
        <main class="main-content-list">
            <ul class="list-items">
                <li v-for="email in emails" :key="email.id" class="list-item" @click="showPreview(email)">
                    <email-preview v-if="email.isPreview" :email="email"/>
                    <div class="email-short" :class={read:!email.isRead} >
                        <div class="name-sent">
                        <h4>{{email.name}}</h4>
                        </div>
                        <div class="details-sent">
                        <span class="title-sent">{{email.subject}}</span>
                        <span>-</span>
                        <span class="desc-sent">{{email.body}}</span>
                        </div>
                        <div class="time-sent">
                        <h4>{{email.sentAt}}</h4>
                    </div>
                    </div>
                </li>
            </ul>
        </main>
    `,
    data() {
        return {
        }
    },
    methods: {
        showPreview(email) {
            console.log('email', email);
            email.isRead = true;
            email.isPreview = !email.isPreview;
        }
    },
    computed: {

    },
    created() {
    },
    components: {
        emailPreview
    }
}
