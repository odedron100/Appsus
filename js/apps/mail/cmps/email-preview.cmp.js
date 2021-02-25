export default {
    props: ['email'],
    template: `
         <div class="email-preview">
            <div class="email-name">
             <span style="font-weight:600">{{email.name}}</span> : <span>{{email.emailAddress}}</span>
            </div>
            <div class="email-title" style="font-weight:600">{{email.subject}}</div>
            <div class="email-text">{{email.body}}</div>
        </div>
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
    }
}
