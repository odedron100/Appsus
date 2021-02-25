import notePreview from './note-preview.cmp.js';
import noteAudio from '../cmps/note-audio.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteTodos from '../cmps/note-todos.cmp.js';
import noteText from '../cmps/note-text.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';

export default {
  props: ['note'],
  template: `
    <ul class="keep-list" >
      <li  class="note-preview-container">
          <component :is="activeComponent" :note="note" @selected="selected"></component>
      </li>
    </ul>
        `,
  data() {
    return {
      activeComponent: `note-${this.note.type}`,
    }
  },
  methods: {
    selected(note) {
      // console.log('note', note);
      this.$emit('selected', note);
    },
  }, computed: {
    changeComponent(type) {
      // console.log('type', type);
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
    // console.log('this.note', this.note);
  },

}
