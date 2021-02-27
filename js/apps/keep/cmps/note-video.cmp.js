
export default {
  props: ['note'],
  template: `
    <section class="note" @click="select">
      <div class="note-title-container" v-bind:style="{ background:note.style.backgroundColor}" >
        <div><h2>{{note.title}}</h2></div>
      </div>
      <div class="note-body" v-bind:style="{ background:note.style.backgroundColor}">
        <div class="edit" @click="editNote"><i class="fas fa-pencil-alt"></i></div>
        <iframe class="video-play"  src="https://www.youtube.com/embed?v=note.info.videoSRC" frameborder="0" ></iframe>
        <div class="trash" @click="removeNote"><i class="fas fa-trash-alt"></i></div>
        <div class="pin" @click="pinNote"><i class="fas fa-thumbtack"></i></div>
      </div >
    </section>
  `,
  methods: {
    select() {
      this.$emit('selected', this.note);
    },
    removeNote() {
      this.$emit('remove', this.note);
    },
    editNote() {
      this.$emit('editNote', this.note);
    },
    pinNote() {
      this.$emit('pinNote', this.note);
    }
  },
}
