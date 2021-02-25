import { emailService } from "../services/email.service.js"

export default {
    props: ["compose"],
    template: `
         <div class="email-compose">
            <header>
                <div>New Message</div>
                <button class="exit-btn" @click="closeCompose"><i class="fas fa-times"></i></button>
            </header>
            <form @submit.prevent="sendEmail(email)">
                <div class="email-inputs">
                    <input type="text" placeholder="From:" name="name" v-model="email.name" required>
                    <input type="email" placeholder="To:" name="email-to" v-model="email.emailAddress" required>
                    <input type="text" placeholder="Subject:" name="email-title" v-model="email.subject" required>
                </div>
                <div class="email-text">
                    <textarea name="email-text" v-model="email.body" ></textarea>
                </div>
                <div class="email-btn">
                    <input type="submit" class="send-btn" @click="getTime" ></input>
                    <i class="fas fa-trash remove-btn" @click="sendToDraft(email)"></i>
                </div>
            </form>
        </div>
    `,
    data() {
        return {
            email: {
                name: null,
                emailAddress: null,
                subject: null,
                body: null,
                sentAt: null,
            }
        }
    },
    methods: {
        sendEmail(email) {
            emailService.addEmail(email)
            this.$router.push('/email/inbox');
            this.email.name = null
            this.email.emailAddress = null
            this.email.subject = null
            this.email.body = null
        },
        getTime() {
            this.email.sentAt = Date.now();
        },
        closeCompose() {
            this.$router.push('/email/inbox');
        },
        sendToDraft(email) {
            this.getTime()
            emailService.addDraft(email)
            this.$router.push('/email/draftted');
        }
    },
    computed: {

    },
    created() {
    },
    components: {
    }
}
