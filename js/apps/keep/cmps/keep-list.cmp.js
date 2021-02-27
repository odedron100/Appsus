
// import noteAudio from '../cmps/note-audio.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteTodos from '../cmps/note-todos.cmp.js';
import noteText from '../cmps/note-text.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';

export default {
  props: ['note'],
  template: `
    <ul class="keep-list" >
      <li  class="note-preview-container">
          <component :is="activeComponent" :note="note" @remove="remove" @editNote="editNote" @pinNote="pinNote" @toggleTodo="toggleTodo" @changeNoteColor="changeNoteColor" @editTitle="editTitle"></component>
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
      this.$emit('selected', note);
    },
    remove(note) {
      this.$emit('remove', note);
    },
    editNote(note) {
      this.$emit('editNote', note)
    },
    pinNote(note) {
      this.$emit('pinNote', note);
    },
    editTitle(note) {
      this.$emit('editTitle', note);
    },
    toggleTodo(todo) {
      this.$emit('toggleTodo', { idx: todo.idx, note: todo.note })
    },
    changeNoteColor(changeColor) {
      this.$emit('changeNoteColor', { note: changeColor.note, color: changeColor.color });
    }
  },
  components: {
    // noteAudio,
    noteImg,
    noteTodos,
    noteText,
    noteVideo
  },
}
