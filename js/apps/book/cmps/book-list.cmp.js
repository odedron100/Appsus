import bookPreview from './book-preview.cmp.js'

export default {
    props: ['books'],
    template: `
    <ul class="book-list">
        <li v-for="book in books" :key="book.id" class="book-preview-container">
            <router-link :to="'/book/'+book.id"><book-preview :book="book" @click.native="select(book)"/></router-link>
        </li>
    </ul>
    `,
    methods: {
        select(book) {
            // console.log('book', book);
            this.$emit('selected', book);
        },
    },
    components: {
        bookPreview,
    },

}
