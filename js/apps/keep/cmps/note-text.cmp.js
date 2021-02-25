
export default {
  props: ['note'],
  template: `
      <div class="note" v-bind:style="{ background:note.style.backgroundColor}" @click="select">
        <div class="edit" @click="editNote"><i class="fas fa-pencil-alt"></i></div>
        <div><h2 @click="edit()">{{note.title}}</h2></div>
        <div><h4>{{note.info.text}}</h4></div>
        <input type="color" class="input-color" value="note.style.backgroundColor">
        <div class="trash" @click="removeNote"><i class="fas fa-trash-alt"></i></div>
      </div>
    `,
  data() {
    return {
      noteToEdit: this.note,
    }
  },
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
