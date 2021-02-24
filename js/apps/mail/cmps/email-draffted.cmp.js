import { emailService } from '../services/email.service.js';
import emailPreview from './email-preview.cmp.js';

export default {
    template: `
         <div class="email-draffted">
           
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
        emailPreview
    }
}
