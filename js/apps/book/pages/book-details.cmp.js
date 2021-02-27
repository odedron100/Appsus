import { bookService } from "../services/book-service.js";
import reviewAdd from '../cmps/review-add.cmp.js';
import bookReviews from '../cmps/book-reviews.cmp.js';
import { bookDetailsService } from '../services/bookDetails.service.js'

export default {
    props: ['book'],
    template: `
    <section v-if="book" class="book-details">
       <button @click="$emit('close')"><router-link to="/book">X</router-link></button>
       <h2>{{book.title}}/{{book.authors[0]}}</h2>
       <img :src="book.thumbnail">
       <h3>{{book.subtitle}}</h3>
       Published Date:<h4>{{basedOnPublishDate}}</h4>
       About The Book: <p>{{book.description}}</p>
       Pages<h3>{{setPageCountLevel}}</h3>
       Categories:<h3>{{book.categories[0]}}</h3><h3>{{book.categories[1]}}</h3>
       Book Language: <h3>{{book.language}}</h3>
       Price: <h3 :class="{red: isPriceColored}" name="price">{{book.listPrice.amount}} {{getCurrencyIcon}}</h3>
       <h3 v-if="isOnSale">Sale!</h3>
       <router-link :to="'/book/'+book.id+'/review-add'">review</router-link>
       <book-reviews :reviews="this.book.reviews" :book="this.book" />
       <div class="paging">
          <router-link :to="prevBookLink">Prev Book</router-link>
          <router-link :to="nextBookLink">Next Book</router-link>
       </div
    </section>
    `,
    data() {
        return {
            book: null,
            isPriceColored: false,
            isOnSale: false,
            prevBookId: null,
            nextBookId: null,
        }
    },
    computed: {
        nextBookLink() {
            return '/book/' + this.nextBookId;
        },
        prevBookLink() {
            return '/book/' + this.prevBookId;
        },
        setPageCountLevel() {
            let msg;
            if (this.book.pageCount > 500) return msg = 'Long Reading...';
            else if (this.book.pageCount > 200) return msg = 'Decent Reading..';
            else return msg = 'Light Reading...';
        },
        basedOnPublishDate() {
            let msg;
            if (this.book.publishDate > 10) return msg = 'Veteran Book';
            else if (this.book.publishDate < 1) return msg = 'New';
            else return msg = 'Decent'
        },
        getCurrencyIcon() {
            return bookDetailsService.getCurrencySymbol(this.book)
        },
    },
    methods: {
        loadBook() {
            const id = this.$route.params.bookId;
            bookService.getById(id)
                .then(book => {
                    this.book = book;
                    this.prevBookId = bookService.getPrevBookId(book.id)
                    this.nextBookId = bookService.getNextBookId(book.id)
                })
        },
        setPriceColor() {
            if (this.book.listPrice.amount > 150) isPriceColored = !isPriceColored;
            else if (this.book.listPrice.amount < 20) isPriceColored = !isPriceColored;
        },
        isSale() {
            if (this.book.listPrice.isOnSale) return isOnSale = !isOnSale;
            else return isOnSale = !isOnSale;
        }
    },
    created() {
        this.loadBook()
    },
    watch: {
        '$route.params.bookId'(id) {
            // console.log('Changed to', id);
            this.loadBook();
        }
    },
    components: {
        reviewAdd,
        bookReviews
    }
}
