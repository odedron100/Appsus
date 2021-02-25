
export default {
  props: ['note'],
  template: `
      <div class="note"  v-bind:style="{ background:note.style.backgroundColor}" @click="select">
        <div class="edit" @click="editNote"><i class="fas fa-pencil-alt"></i></div>
        <div><h3>{{note.info.todos.todosTitle}}</h3></div>
        <div><h5>{{note.info.todos.todo0}}</h5></div>
        <div><h5>{{note.info.todos.todo1}}</h5></div>
        <div><h5>{{note.info.todos.todo2}}</h5></div>
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
  }
}
