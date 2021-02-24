
export default {
    props: ['emails'],
    template: `
        <main class="main-content-list">
            <ul class="list-items">
                <li v-for="email in emails" :key="email.id" class="list-item">
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
                </li>
            </ul>
        </main>
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
