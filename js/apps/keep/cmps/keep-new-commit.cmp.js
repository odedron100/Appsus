// import noteAudio from '../cmps/note-audio.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteTodos from '../cmps/note-todos.cmp.js';
import noteText from '../cmps/note-text.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';
export default {
  template: `
    <section class="new-note-container" v-on:keydown.13="addNewNote">
      <h1> Add new note </h1>
      <!-- <div class="new-note-container" v-on:keydown.13="addNewNote"> -->
        <div class="title-input">
          <input type="text" class="note-input-title" name="title" placeholder="Title..." v-if="isOnFocus === true" v-model="newNote.title"/>
        </div>
        <div class="notes-types-container">

          <input type="text" class="note-input" name="title" placeholder="write somthing..." v-if="newNote.type === 'text'" v-model="newNote.text" @focus="renderTitleInput"/>
          <input type="text" class="note-input" name="image-url" placeholder="Enter img URL..." v-if="newNote.type === 'img'" v-model="newNote.imgURL" @focus="renderTitleInput"/>
          <input type="text" class="note-input" name="video-src" placeholder="Enter video SRC..." v-if="newNote.type === 'video'" v-model="newNote.videoSRC" @focus="renderTitleInput"/>
          <input type="color" class="color-input" name="color" v-model="newNote.color" v-if="isColorSelected === true"/>
          <input type="text" class="note-input" name="todos" placeholder="Your todos(Separate with a comma)..." v-if="newNote.type === 'todos'" v-model="newNote.todos" @focus="renderTitleInput"/>
          <div class="notes-types">
            <!-- <div class="note-audio type" @click="changeType('audio')"><i class="fas fa-volume-up"></i></div> -->
            <div class="note-video type" @click="changeType('video')"><i class="fas fa-video"></i></div>
            <div class="note-img type" @click="changeType('img')"><i class="far fa-image"></i></div>
            <div class="note-text type" @click="changeType('text')"><i class="fas fa-font"></i></div>
            <div class="note-text type" @click="changeType('todos')"><i class="fas fa-list-ul"></i></div>
            <div class="note-text type" @click="isColorSelected=true"><i class="fas fa-palette"></i></div>
          </div>
        </div>
      <!-- </div> -->
    </section>
    `,
  data() {
    return {
      isColorSelected: false,
      isOnFocus: false,
      newNote: {
        color: null,
        imgURL: null,
        title: null,
        type: 'text',
        videoSRC: null,
        text: null,
        todos: null,
      }
    }
  },
  methods: {
    changeType(type) {
      this.newNote.type = type;
    },
    addNewNote() {
      if (!this.newNote.title) {
        Swal.fire({
        }).then((result) => {
          if (result.value) {
            Swal.fire('You must enter a title')
          }
        })
      } else {
        this.$emit('add', this.newNote);
        this.resetInputs();
      }
    },
    renderTitleInput() {
      this.isOnFocus = true;
      this.isColorSelected = false;
    },
    resetInputs() {
      this.newNote.title = null;
      this.newNote.type = 'text';
      this.newNote.text = null;
      this.newNote.color = null;
      this.newNote.imgURL = null;
      this.newNote.todos = null;
      this.newNote.videoSrc = null;
      this.newNote.color = null;
    }
  },
  components: {
    // noteAudio,
    noteImg,
    noteTodos,
    noteText,
    noteVideo
  }

}
