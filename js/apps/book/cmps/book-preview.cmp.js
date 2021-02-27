import { bookDetailsService } from '../services/bookDetails.service.js'

export default {
    props: ['book'],
    template: `
    <section class="book-preview">
        <p>{{book.title}}</p>
        <p>{{book.listPrice.amount}}</p><span>{{getCurrencyIcon}}</span>
    </section>
    `,
    computed: {
        getCurrencyIcon() {
            return bookDetailsService.getCurrencySymbol(this.book)
        }
    }
}

