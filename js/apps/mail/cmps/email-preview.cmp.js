export default {
    props: ['email'],
    template: `
         <div class="email-preview">
            <div class="email-title">{{email.subject}}</div>
            <div class="email-name">
                <span>{{email.name}}</span>  <span>{{email.emailAddress}}</span>
            </div>
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
        console.log('this.email', this.email);
    },
    components: {
    }
}
