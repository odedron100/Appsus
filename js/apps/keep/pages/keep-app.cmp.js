
import keepHeader from '../cmps/keep-header.cmp.js';
// import helpers from '../cmps/helpers.cmp.js';
import keepList from '../cmps/keep-list.cmp.js';
import keepNewCommit from '../cmps/keep-new-commit.cmp.js';
import { keepService } from '../services/keep.service.js';

export default {
    template: `
        <section class="keep-app main-container">
           <keep-header/>
           <main class="main-content">
                <!-- <helpers :selectedNote="selectedNote" @editNote="editNote"/> -->
                <section class="keep-list-container">
                    <keepNewCommit @add="addNote" />
                    <div class="keep-list-content">
                        <div v-for="note in notes" class="keep-note-list">
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
        editNote(note) {
            //make swall alert with 3 input according to the type
            console.log('editing note', note);
            switch (note.type) {
                case 'text':
                    Swal.mixin({
                        input: 'text',
                        confirmButtonText: 'Next &rarr;',
                        showCancelButton: true,
                        progressSteps: ['1', '2']
                    }).queue([
                        {
                            title: 'new title',
                            text: 'Please set your new title'
                        },
                        {
                            title: 'new text',
                            text: 'Please set your new Text'
                        }
                    ]).then((result) => {
                        if (result.value) {
                            note.info.title = result.value[0];
                            note.info.txt = result.value[1];
                            keepService.editNote(note)
                                .then(res => this.loadsNotes())
                            Swal.fire({
                                title: 'Update done!',
                                confirmButtonText: 'Ok!'
                            })
                        }
                    })
                    break;
                case 'NoteImg':
                    Swal.mixin({
                        input: 'text',
                        confirmButtonText: 'Next &rarr;',
                        showCancelButton: true,
                        progressSteps: ['1', '2']
                    }).queue([
                        {
                            title: 'new title',
                            text: 'Please set your new title'
                        },
                        {
                            title: 'new image url',
                            text: 'Please set your new Image Url'
                        }
                    ]).then((result) => {
                        if (result.value) {
                            note.info.title = result.value[0];
                            note.info.url = result.value[1];
                            keepService.editNote(note)
                                .then(res => this.loadsNotes())
                            Swal.fire({
                                title: 'Update done!',
                                confirmButtonText: 'Ok!'
                            })
                        }
                    })
                    break;
                case 'NoteVideo':
                    Swal.mixin({
                        input: 'text',
                        confirmButtonText: 'Next &rarr;',
                        showCancelButton: true,
                        progressSteps: ['1', '2']
                    }).queue([
                        {
                            title: 'new title',
                            text: 'Please set your new title'
                        },
                        {
                            title: 'new Video url',
                            text: 'Please set your new Video Url'
                        }
                    ]).then((result) => {
                        if (result.value) {
                            note.info.title = result.value[0];
                            note.info.url = result.value[1];
                            keepService.editNote(note)
                                .then(res => this.loadsNotes())
                            Swal.fire({
                                title: 'Update done!',
                                confirmButtonText: 'Ok!'
                            })
                        }
                    })
                    break;
                case 'NoteTodos':
                    Swal.mixin({
                        input: 'text',
                        confirmButtonText: 'Next &rarr;',
                        showCancelButton: true,
                        progressSteps: ['1', '2']
                    }).queue([
                        {
                            title: 'new title',
                            text: 'Please set your new title'
                        },
                        {
                            title: 'new todos',
                            text: 'Please set your todos seperate by ;'
                        }
                    ]).then((result) => {
                        if (result.value) {
                            note.info.title = result.value[0];
                            let todosArr = result.value[1].split(';');
                            note.info.todos = [];
                            todosArr.forEach(todo => {
                                note.info.todos.push(
                                    { txt: todo, doneAt: new Date(), isDone: false }
                                )
                            });
                            keepService.editNote(note)
                                .then(res => this.loadsNotes())
                            Swal.fire({
                                title: 'Update done!',
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
    created() {
        this.loadNotes()
    },
    components: {
        keepHeader,
        // helpers,
        keepList,
        keepNewCommit
    }
}
