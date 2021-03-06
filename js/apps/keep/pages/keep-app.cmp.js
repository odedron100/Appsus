
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
                    <h1 class="pinned-list-title"> pinned notes </h1>
                    <div class="keep-pinned-list-content">
                        <div v-for="note in pinnedNotesToShow" class="keep-note-list">
                            <keep-list :note="note" @selected="selected" @remove="remove" @editNote="editNote" @pinNote="pinNote" @toggleTodo="toggleTodo" @changeNoteColor="changeNoteColor" @editTitle="editTitle"/>
                        </div>
                    </div>
                    <h1 class="list-title"> notes </h1>
                    <div class="keep-list-content">
                        <div v-for="note in notesToShow" class="keep-note-list">
                            <keep-list :note="note" @selected="selected" @remove="remove" @editNote="editNote" @pinNote="pinNote" @toggleTodo="toggleTodo" @changeNoteColor="changeNoteColor" @editTitle="editTitle"/>
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
            Swal.fire({
                title: 'Are you sure?',
                text: 'You can\'t revert your action',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes Delete it!',
                cancelButtonText: 'No, Keep it!',
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then((result) => {
                if (result.value) {
                    Swal.fire('Deleted', 'You successfully deleted this file', 'success')
                    keepService.removeNote(note.id);
                    this.loadNotes()
                } else {
                    Swal.fire('Cancelled', 'Your file is still intact', 'info')
                }
            })
        },
        changeNoteColor(changeColor) {
            keepService.changeNoteColor(changeColor.note, changeColor.color);
            this.loadNotes()
        },
        pinNote(note) {
            keepService.pinNoteInList(note.id);
            this.loadNotes()
        },
        toggleTodo(todo) {
            console.log('todo', todo);
            keepService.toggleTodo(todo);
            this.loadNotes()
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        editTitle(note) {
            Swal.mixin({
                input: 'text',
                confirmButtonText: 'Next',
                // showCancelButton: true,
                progressSteps: ['1']
            }).queue([
                {
                    title: 'new title',
                    text: 'Enter your new title'
                },
            ]).then((result) => {
                if (result.value) {
                    note.title = result.value[0];
                    keepService.editNote(note)
                        .then(() => this.loadNotes())
                    Swal.fire({
                        title: 'Saved!',
                        confirmButtonText: 'Ok!'
                    })
                }
            })
        },
        editNote(note) {
            //make swall alert with 3 input according to the type
            console.log('editing note', note);
            switch (note.type) {
                case 'text':
                    Swal.mixin({
                        input: 'text',
                        showCancelButton: true,
                        progressSteps: ['1']
                    }).queue([
                        {
                            title: 'new text',
                            text: 'Enter your new Text'
                        }
                    ]).then((result) => {
                        if (result.value) {
                            note.info.text = result.value[0];
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
                        progressSteps: ['1']
                    }).queue([
                        {
                            title: 'new image url',
                            text: 'Enter your new Image Url'
                        }
                    ]).then((result) => {
                        if (result.value) {
                            note.info.imgURL = result.value[0];
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
                        showCancelButton: true,
                        progressSteps: ['1']
                    }).queue([
                        {
                            title: 'new Video url',
                            text: 'Enter your new Video src'
                        }
                    ]).then((result) => {
                        if (result.value) {
                            note.info.videoSRC = result.value[0];
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
                        showCancelButton: true,
                        progressSteps: ['1']
                    }).queue([
                        {
                            title: 'Create new todos',
                            text: 'Enter your todos'
                        }
                    ]).then((result) => {
                        if (result.value) {
                            let todos = result.value[0].split(',');
                            note.info.todos = [];
                            todos.forEach((todo, idx) => {
                                note.info.todos.push({ text: todo, isDone: false });
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
            if (!this.filterBy && this.notes) return this.notes.filter(note => !note.pin);
            if (this.filterBy) {
                const searchStr = this.filterBy.toLowerCase()
                const notesToShow = this.notes.filter(note => {
                    console.log('note', note);
                    return (note.title.toLowerCase().includes(searchStr) && !note.pin)
                })
                return notesToShow
            }
        },
        pinnedNotesToShow() {
            if (!this.filterBy && this.notes) return this.notes.filter(note => note.pin);
            if (this.filterBy) {
                const searchStr = this.filterBy.toLowerCase()
                const pinnedNotesToShow = this.notes.filter(note => {
                    return (note.title.toLowerCase().includes(searchStr) && note.pin)
                })
                return pinnedNotesToShow
            }
        },
        pinnedNotes() {
            if (!this.notes) {
                return [];
            }
            const pinnedNotes = this.notes.filter(note => {
                return note.pin;
            })
            return pinnedNotes;
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
