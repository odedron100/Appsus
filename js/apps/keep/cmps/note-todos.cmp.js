export default {
  props: ['type'],
  template: `
   <section class="note-input-container">
      <!-- <input type="text" class="note-input" name="title" placeholder="..." v-if=" type === 'video'" v-model="text" @focus="onFocus" v-on:keydown.13="onEnter" @input="update"/> -->
      <input type="text" class="note-input" name="todos" placeholder="Enter your todos..." v-if="type === 'todos'" v-model="todos"  @focus="onFocus" v-on:keydown.13="onEnter" @input="updateTodos"/>
  </section>
    `,
  data() {
    return {
      todos: null,
      isOnFocus: true,
    }
  },
  methods: {
    onFocus() {
      this.isOnFocus = true;
      this.$emit('onFocus', this.isOnFocus);
    },
    onEnter() {
      this.todos = null;
    },
    updateTodos() {
      this.$emit('updataTodos', this.todos);
    }
  }
}
