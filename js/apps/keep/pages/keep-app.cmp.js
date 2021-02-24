// import { bookService } from '../services/book-service.js';
import keepHeader from '../cmps/keep-header.cmp.js';
import aSide from '../cmps/a-side.cmp.js';
// import bookAdd from '../pages/book-add.cmp.js';
// import bookDetails from '../pages/book-details.cmp.js';

export default {
    template: `
        <section class="keep-app main-container">
           <keep-header/>
           <main class="main-content">
                <a-side/>
                <section class="keep-list-container">
                    <div class="input-commit-container">
                        <div class="new-commit-img"><i class="far fa-image"></i></div>
                        <div class="new-commit"><i class="fas fa-edit"></i></div>
                        <div class="new-list">✅</div>
                        <input type="text" class="create-new-commit" placeholder="Enter new commit"/>
                    </div>
                    <div class="keep-list">

                    </div>

                </section>
           </main>
        </section>
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
        keepHeader,
        aSide
    }
}
