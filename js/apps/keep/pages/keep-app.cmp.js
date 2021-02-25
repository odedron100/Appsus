
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
                <helpers :selectedNote="selectedNote" @remove="remove"/>
                <section class="keep-list-container">
                    <keepNewCommit @add="addNote" />
                    <div class="keep-list-content">
                        <div v-for="note in notes" class="keep-note-list">
                            <keep-list :note="note" @selected="selected"/>
                        </div>
                    </div>
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
                    // console.log('notes', notes);
                    // console.log('notes', notes);
                    this.notes = notes
                })
        },
        addNote(note) {
            // console.log('note', note);
            console.log('note', note);
            keepService.createNewNote(note);
            this.loadNotes()
        },
        selected(note) {
            this.selectedNote = note;
            console.log('note', note);
        },
        remove(note) {
            keepService.removeNote(note.id);
            this.loadNotes()
        },
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
