// import bookPreview from './book-preview.cmp.js'

export default {
  props: ['notes'],
  template: `
    <ul class="keep-list">
        <li v-for="note in notes" :key="note.id" class="note-preview-container">
          <div>title:<h4>{{note.info.title}}</h4></div>
          <img :src="note.info.url">
          <div>text:<h4>{{note.info.text}}</h4></div>
          <div>note color:<h4>{{note.style.backgroundColor}}</h4></div>
          <div>Type:<h4>{{note.NoteImg}}</h4></div>
        </li>
    </ul>
        `,
  methods: {
    select(note) {
      this.$emit('selected', note);
    },
  },
  components: {
  },

}
