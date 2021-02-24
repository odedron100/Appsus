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
          <component :is="activeComponent" :type="newNote.type" @onFocus="renderTitleInput" @updateText="updateText" @updateVideoSrc="updateVideoSrc"
          @updateTodos="updateTodos" @updateImgUrl="updateImgUrl" @updateAudio="updateAudio"> </component>
        </div>
      </div>
    </section>
    `,
  data() {
    return {
      activeComponent: 'note-text',
      isOnFocus: false,
      newNote: {
        type: 'text',
        title: null,
        text: null,
        color: null,
        imgURL: null,
        todos: null,
        videoSrc: null,
        audio: null,
      }
    }
  },
  methods: {
    changeType(type) {
      this.newNote.type = type;
      this.activeComponent = `note-${type}`
      console.log('this.activeComponent', this.activeComponent);
    },
    addNewNote() {
      this.$emit('add', this.newNote);
      this.newNote.title = null;
      // this.newNote.type = 'text';
      this.newNote.text = null;
      this.newNote.color = null;
      this.newNote.imgURL = null;
      this.newNote.todos = null;
    },
    renderTitleInput(value) {
      console.log('value', value);
      this.isOnFocus = value;
    },
    updateText(text) {
      this.newNote.text = text;
      console.log('this.newNote.text', this.newNote.text);
    },
    updateVideoSrc(video) {
      this.newNote.video = video;
      console.log('this.newNote.video', this.newNote.video);
    },
    updateTodos(todos) {
      this.newNote.todos = todos;
      console.log('this.newNote.todos', this.newNote.todos);
    },
    updateImgUrl(imgUrl) {
      this.newNote.imgURL = imgUrl;
      console.log('this.newNote.imgUrl', this.newNote.imgUrl);
    },
    updateAudio(audio) {
      this.newNote.audio = audio;
      console.log('this.newNote.audio', this.newNote.audio);
    }
  },
  components: {
    noteAudio,
    noteImg,
    noteTodos,
    noteText,
    noteVideo
  }

}
