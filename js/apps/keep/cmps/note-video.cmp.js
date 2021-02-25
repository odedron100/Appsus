
export default {
  props: ['note'],
  template: `
      <div class="note" v-bind:style="{ background:note.style.backgroundColor}" @click="select">
        <div class="edit" @click="editNote"><i class="fas fa-pencil-alt"></i></div>
        {{note.info.videoSRC}}
        <div class="video-title">title:<h2>{{note.title}}</h2></div>
        <iframe class="video-play"  src="https://www.youtube.com/embed?v=note.info.videoSRC" frameborder="0" ></iframe>
        <div class="trash" @click="removeNote"><i class="fas fa-trash-alt"></i></div>
      </div >
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
    }
  },
}
