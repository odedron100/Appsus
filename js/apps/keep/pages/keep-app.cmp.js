
import keepHeader from '../cmps/keep-header.cmp.js';
// import helpers from '../cmps/helpers.cmp.js';
import keepList from '../cmps/keep-list.cmp.js';
import keepNewCommit from '../cmps/keep-new-commit.cmp.js';
import { keepService } from '../services/keep.service.js';

export default {
    template: `
        <section class="keep-app main-container">
           <keep-header @filter="setFilter"/>
           <main class="main-content">
                <!-- <helpers :selectedNote="selectedNote" @editNote="editNote"/> -->
                <section class="keep-list-container">
                    <keepNewCommit @add="addNote" />
                    <div class="keep-list-content">
                        <div v-for="note in notesToShow" class="keep-note-list">
                            <keep-list :note="note" @selected="selected" @remove="remove" @editNote="editNote"/>
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
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        editNote(note) {
            //make swall alert with 3 input according to the type
            console.log('editing note', note);
            switch (note.type) {
                case 'text':
                    Swal.mixin({
                        input: 'text',
                        confirmButtonText: 'Next',
                        showCancelButton: true,
                        progressSteps: ['1', '2']
                    }).queue([
                        {
                            title: 'new title',
                            text: 'Enter your new title'
                        },
                        {
                            title: 'new text',
                            text: 'Enter your new Text'
                        }
                    ]).then((result) => {
                        if (result.value) {
                            note.title = result.value[0];
                            note.info.text = result.value[1];
                            keepService.editNote(note)
                                .then(() => this.loadNotes())
                            Swal.fire({
                                title: 'Saved!',
                                confirmButtonText: 'Ok!'
                            })
                        }
                    })
                    break;
                case 'img':
                    Swal.mixin({
                        input: 'text',
                        confirmButtonText: 'Next',
                        showCancelButton: true,
                        progressSteps: ['1', '2']
                    }).queue([
                        {
                            title: 'new title',
                            text: 'Enter your new title'
                        },
                        {
                            title: 'new image url',
                            text: 'Enter your new Image Url'
                        }
                    ]).then((result) => {
                        if (result.value) {
                            note.info.title = result.value[0];
                            note.info.imgURL = result.value[1];
                            keepService.editNote(note)
                                .then(() => this.loadNotes())
                            Swal.fire({
                                title: 'Saved!',
                                confirmButtonText: 'Ok!'
                            })
                        }
                    })
                    break;
                case 'video':
                    Swal.mixin({
                        input: 'text',
                        confirmButtonText: 'Next',
                        showCancelButton: true,
                        progressSteps: ['1', '2']
                    }).queue([
                        {
                            title: 'new title',
                            text: 'Enter your new title'
                        },
                        {
                            title: 'new Video url',
                            text: 'Enter your new Video src'
                        }
                    ]).then((result) => {
                        if (result.value) {
                            note.info.title = result.value[0];
                            note.info.videoSRC = result.value[1];
                            keepService.editNote(note)
                                .then(() => this.loadsNotes())
                            Swal.fire({
                                title: 'Saved!',
                                confirmButtonText: 'Ok!'
                            })
                        }
                    })
                    break;
                case 'todos':
                    Swal.mixin({
                        input: 'text',
                        confirmButtonText: 'Next',
                        showCancelButton: true,
                        progressSteps: ['1', '2']
                    }).queue([
                        {
                            title: 'new title',
                            text: 'Enter your new title'
                        },
                        {
                            title: 'Create new todos',
                            text: 'Enter your todos'
                        }
                    ]).then((result) => {
                        if (result.value) {
                            note.info.title = result.value[0];
                            let todos = result.value[1].split(',');
                            note.info.todos = {};
                            todos.forEach((todo, idx) => {
                                note.info.todos[`todo${idx}`] = todo;
                            });
                            keepService.editNote(note)
                                .then(() => this.loadNotes())
                            Swal.fire({
                                title: 'Saved!',
                                confirmButtonText: 'Ok!'
                            })
                        }
                    })
                    break;
                default:
                    break;
            }
        },
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
            const searchStr = this.filterBy.toLowerCase()
            const notesToShow = this.notes.filter(note => {
                console.log('note', note);
                return note.title.toLowerCase().includes(searchStr)
            })
            return notesToShow
        },
    },
    created() {
        this.loadNotes()
    },
    components: {
        keepHeader,
        // helpers,
        keepList,
        keepNewCommit
    },
}
