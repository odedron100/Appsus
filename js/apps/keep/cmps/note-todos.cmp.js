import longText from '../cmps/long-text.cmp.js';
export default {
  props: ['note'],
  template: `
    <section class="note" @click="select">
      <div class="note-title-container" v-bind:style="{ background:note.style.backgroundColor}">
        <div><h2>{{note.title}}</h2></div>
      </div>
      <div class="note-body" v-bind:style="{ background:note.style.backgroundColor}">
        <div class="edit" @click="editNote"><i class="fas fa-pencil-alt"></i></div>
        <ul class="todos-container">
          <li class="todo" v-for="(todo, idx) in note.info.todos" :key=idx>
              <span @click="toggleTodo(idx)" :class="{'toggle-todo':todo.isDone}" >{{todo.text}}</span>
              <!-- <long-text @click="toggleTodo(idx)" class="text" :class="{'toggle-todo':todo.isDone} :desc="todo.text"/> -->
          </li>
        </ul>
        <input type="color" class="input-color" value="note.style.backgroundColor" >
        <div class="trash" @click="removeNote"><i class="fas fa-trash-alt"></i></div>
        <div class="pin" @click="pinNote"><i class="fas fa-thumbtack"></i></div>
      </div >
    </section>
  `,
  data() {
    return {
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
    },
    pinNote() {
      this.$emit('pinNote', this.note);
    },
    toggleTodo(idx) {
      console.log('idx', idx);
      this.$emit('toggleTodo', { idx: idx, note: this.note })
    }
  },
  created() {
    console.log('this.note.info.todos', this.note.info.todos[0].isDone);
  },
  components: {
    longText
  }
}
