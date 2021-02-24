
import keepHeader from '../cmps/keep-header.cmp.js';
import helpers from '../cmps/helpers.cmp.js';
import keepList from '../cmps/keep-list.cmp.js';
import keepNewCommit from '../cmps/keep-new-commit.cmp.js';
import { keepService } from '../services/keep.service.js';

export default {
    template: `
        <section class="keep-app main-container">
           <keep-header/>
           <main class="main-content">
                <helpers/>
                <section class="keep-list-container">
                    <keepNewCommit @add="addNote"/>
                    <keep-list :notes="notes"/>
                </section>
           </main>
        </section>
    `,
    data() {
        return {
            notes: null,
            selectedNote: null,
            filterBy: null,
        }
    },
    methods: {
        loadNotes() {
            keepService.query()
                .then(notes => {
                    console.log('notes', notes);
                    this.notes = notes
                })
        },
        addNote(note) {
            console.log('note', note);
            keepService.createNewNote(note);
            this.loadNotes()
        }
        // selectNote(note) {
        //     this.selectedNote = note;
        // },
        // setFilter(filterBy) {
        //     this.filterBy = filterBy;
        // },
    },
    computed: {
        // NotesToShow() {
        //     if (!this.filterBy) return this.notes;
        //     const searchStr = this.filterBy.byName.toLowerCase()
        //     const notesToShow = this.notes.filter(note => {
        //         console.log('note', note);
        //         return note.info.title.toLowerCase().includes(searchStr)
        //     })
        //     return notesToShow
        // }
    },
    created() {
        this.loadNotes()
    },
    components: {
        keepHeader,
        helpers,
        keepList,
        keepNewCommit
    }
}
