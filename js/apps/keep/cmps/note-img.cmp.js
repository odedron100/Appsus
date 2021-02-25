
export default {
  props: ['note'],
  template: `
      <div class="note" v-bind:style="{ background:note.style.backgroundColor}" @click="select">
        <div class="edit" @click="editNote"><i class="fas fa-pencil-alt"></i></div>
        <div>title:<h4>{{note.title}}</h4></div>
        <img class="img" :src="note.info.imgURL">
        <div class="trash" @click="removeNote"><i class="fas fa-trash-alt"></i></div>
      </div>
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
