// export default {
//   props: ['type'],
//   template: `
//    <section class="note-input-container">
//       <!-- <input type="text" class="note-input" name="title" placeholder="..." v-if=" type === 'video'" v-model="text" @focus="onFocus" v-on:keydown.13="onEnter" @input="update"/> -->
//       <input type="text" class="note-input" name="todos" placeholder="Enter your todos..." v-if="type === 'todos'" v-model="todos"  @focus="onFocus" v-on:keydown.13="onEnter" @input="updateTodos"/>
//   </section>
//     `,
//   data() {
//     return {
//       todos: null,
//       isOnFocus: true,
//     }
//   },
//   methods: {
//     onFocus() {
//       this.isOnFocus = true;
//       this.$emit('onFocus', this.isOnFocus);
//     },
//     onEnter() {
//       this.todos = null;
//     },
//     updateTodos() {
//       this.$emit('updataTodos', this.todos);
//     }
//   }
// }

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
      // console.log('this.note.id', this.note.id);
      // console.log('clicked');
    }
  }
}
