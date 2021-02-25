
export default {
  props: ['note'],
  template: `
      <div class="note"  v-bind:style="{ background:note.style.backgroundColor}" @click="select">
        <div><h3>{{note.info.todos.todosTitle}}</h3></div>
        <div><h5>{{note.info.todos.todo1}}</h5></div>
        <div><h5>{{note.info.todos.todo2}}</h5></div>
        <div><h5>{{note.info.todos.todo3}}</h5></div>
      </div >
  `,
  methods: {
    select() {
      this.$emit('selected', this.note);
    }
  }
}
