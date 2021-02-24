import noteAudio from '../cmps/note-audio.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteTodos from '../cmps/note-todos.cmp.js';
import noteText from '../cmps/note-text.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';
export default {
  template: `
    <section>
      <div class="new-note-container" v-on:keydown.13="addNewNote">
      <div class="title-input">
        <input type="text" class="note-input-title" name="title" placeholder="Title..." v-if="isOnFocus === true" v-model="newNote.title"/>
      </div>
      <div class="notes-types-container">
        <div class="notes-types">
          <div class="note-audio type" @click="changeType('audio')"><i class="fas fa-volume-up"></i></div>
          <div class="note-video type" @click="changeType('video')"><i class="fas fa-video"></i></div>
          <div class="note-img type" @click="changeType('img')"><i class="far fa-image"></i></div>
          <div class="note-text type" @click="changeType('text')"><i class="fas fa-font"></i></div>
          <div class="note-text type" @click="changeType('todos')"><i class="fas fa-list-ul"></i></div>
          <div class="note-text type" @click="changeType('color')"><i class="fas fa-palette"></i></div>
        </div>
        <input type="text" class="note-input" name="title" placeholder="write somthing..." v-if="newNote.type === 'text'" v-model="newNote.text" @focus="renderTitleInput"/>
        <input type="text" class="note-input" name="image-url" placeholder="Enter img URL..." v-if="newNote.type === 'img'" v-model="newNote.imgURL" @focus="renderTitleInput"/>
        <input type="text" class="note-input" name="video-url" placeholder="Enter video URL..." v-if="newNote.type === 'video'" v-model="newNote.videoURL" @focus="renderTitleInput"/>
        <input type="text" class="note-input" name="todos" placeholder="Enter todos..." v-if="newNote.type === 'todos'" v-model="newNote.todos" @focus="renderTitleInput"/>
        <input type="text" class="note-input" name="audio" placeholder="Enter audio..." v-if="newNote.type === 'audio'" v-model="newNote.todos" @focus="renderTitleInput"/>
      </div>
      </div>
    </section>
    `,
  data() {
    return {
      isOnFocus: false,
      newNote: {
        title: null,
        type: 'text',
        text: null,
        color: null,
        imgURL: null,
        todos: null,
      }
    }
  },
  methods: {
    changeType(type) {
      this.newNote.type = type;
    },
    addNewNote() {
      console.log('this.newNote', this.newNote);
      this.$emit('add', this.newNote);
      this.newNote.title = null;
      this.newNote.type = 'text';
      this.newNote.text = null;
      this.newNote.color = null;
      this.newNote.imgURL = null;
      this.newNote.todos = null;
    },
    renderTitleInput() {
      console.log('hi');
      this.isOnFocus = true;
    }
    // closeNewNoteModal() {
    //   this.isNewNoteSelected = false;
    // },
    // addNote() {
    // this.$emit('add', this.newNote);
    // }
  },
  components: {
    noteAudio,
    noteImg,
    noteTodos,
    noteText,
    noteVideo
  }

}
