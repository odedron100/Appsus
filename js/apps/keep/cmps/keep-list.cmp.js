import notePreview from './note-preview.cmp.js';
import noteAudio from '../cmps/note-audio.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteTodos from '../cmps/note-todos.cmp.js';
import noteText from '../cmps/note-text.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';

export default {
  props: ['notes'],
  template: `
    <ul class="keep-list">
        <li v-for="note in notes" :key="note.id" class="note-preview-container">
          <!-- <note-preview :note="note" @click.native="selecte(note)"/> -->
          <component :is="activeComponent" :note="note" activeComponent="note.type"></component>
        </li>
    </ul>
        `,
  data() {
    return {
      activeComponent: 'note-text',
    }
  },
  methods: {
    select(note) {
      this.$emit('selected', note);
    },
    changeComponent() {

    }
  },
  components: {
    notePreview,
    noteAudio,
    noteImg,
    noteTodos,
    noteText,
    noteVideo
  },
  created() {
    console.log('this.notes', this.notes);
  }

}
