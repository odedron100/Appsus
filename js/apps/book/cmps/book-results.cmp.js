import { bookService } from "../services/book-service.js"

export default {
    props: ['booksFound'],
    template: `
    <ul class="book-results">
        <li v-for="book in booksFound" :key="book.id">{{book.volumeInfo.title}} <button @click="addBook(book)">+</button></li>
    </ul>
    `,
    data() {
        return {
            books: this.booksFound,
        }
    },
    methods: {
        addBook(book) {
            this.$emit('add', book);
            // TODO remove from books
        }
    },

}
