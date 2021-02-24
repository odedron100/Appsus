import notePreview from './note-preview.cmp.js';

export default {
  props: ['notes'],
  template: `
    <ul class="keep-list">
        <li v-for="note in notes" :key="note.id" class="note-preview-container">
          <note-preview :note="note" @click.native="selecte(note)"/>
        </li>
    </ul>
        `,
  methods: {
    select(note) {
      this.$emit('selected', note);
    },
  },
  components: {
    notePreview
  },

}
