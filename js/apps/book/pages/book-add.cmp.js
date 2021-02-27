import { bookService } from "../services/book-service.js";
import { utilService } from "../../../services/util-service.js";
import { eventBus } from "../../../services/event-bus.service.js";
import bookResults from "../cmps/book-results.cmp.js";


export default {
    template: `
    <section class="book-add">
      <form @submit.prevent="findBook">
        <label> Find a book: </label>    
        <input type="text"  placeholder="Search...." v-model="findBox"/>
        <button>Serach</button>
     </form>
     <book-results :booksFound="booksFound" @add="addBook"/>
    </section>
    `, computed: {

    },
    data() {
        return {
            findBox: '',
            booksFound: null,
        }
    },
    methods: {
        findBook() {
            let booksPrm = bookService.getNewBooks(this.findBox);
            booksPrm.then(res => {
                this.booksFound = res.items;
            })
            this.findBox = ''
        },
        addBook(googleBook) {
            //TODO add to books array
            bookService.addGoogleBook(googleBook)
            console.log('books Adeed');
        }
    },
    created() {

    },
    components: {
        bookResults,
    }
}

