export default {
    template: `
         <div class="email-compose">
            <header>
                <div>New Message</div>
                <button class="exit-btn"><i class="fas fa-times"></i></button>
                
            </header>
            <div class="email-inputs">
                <input type="email" placeholder="To:" name="email-to" required>
                <input type="text" placeholder="Subject:" name="email-title" required>
            </div>
            <div class="email-text">
                <textarea name="email-text"></textarea>
            </div>
            <div class="email-btn">
                <button class="send-btn">Send</button></router-link>
                <button class="remove-btn"><i class="fas fa-trash"></i></button>
            </div>
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
