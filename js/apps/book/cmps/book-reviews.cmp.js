import { bookService } from "../services/book-service.js";
import bookReview from './book-review.cmp.js';
// import { eventBus } from "../services/event-bus-services.js"


export default {
    props: ['reviews', 'book'],
    template: `
    <ul class="book-review">
        <li v-for="(review,idx) in reviews" :key="review.id" class="review-preview-container">
            <book-review :review="review"/>
            <button @click="removeReview(idx)">Delete</button>
        </li>
    </ul>
    `,
    methods: {
        removeReview(reviewIdx) {
            bookService.removeReview(reviewIdx, this.book.id)
        }
    },
    components: {
        bookReview,
    },

}
