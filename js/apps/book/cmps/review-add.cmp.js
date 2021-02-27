import { bookService } from "../services/book-service.js";
import { utilService } from "../../../services/util-service.js";
// import { eventBus } from "../services/event-bus-services.js"


export default {
    data() {
        return {
            review: {
                id: utilService.makeId(),
                name: '',
                rate: null,
                readAt: '',
                textArea: '',
            },
        }
    },
    template: `
    <section class="book-review">
       <form @submit.prevent="addReview">
        <label>Name:</label>
        <input ref="titleInput" type="text" name="name" v-model="review.name">
        <select name="rate" v-model="review.rate">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <label>Read At:</label>
        <input type="text" name="read-time" :value="getTime" v-model="review.readAt">
        <textarea name="text-area" cols="30" rows="10" v-model="review.textArea"></textarea>
        <button>Save</button>
    </form>
    </section>
    `, computed: {
        getTime() {
            return `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getYear() - 100}`;
        }
    },
    created() {
        const id = this.$route.params.bookId;
        console.log('this.$route.', this.$route);
        bookService.getById(id)
            .then(book => this.book = book)
    },
    methods: {
        addReview() {
            console.log('saves');
            bookService.addReview(this.$route.params.bookId, this.review)
        }
    },
    mounted() {
        console.log('mounted');
        this.$refs.titleInput.focus()
    }
}

