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
        <div>
          <long-text class="text" :desc="note.info.text" />
        </div>
        <input type="color" class="input-color" v-model="newColor" @change="changeNoteColor">
        <div class="trash" @click="removeNote"><i class="fas fa-trash-alt"></i></div>
        <div class="pin" @click="pinNote"><i class="fas fa-thumbtack"></i></div>
      </div>
    </section>
    `,
  data() {
    return {
      noteToEdit: this.note,
      newColor: this.note.style.backgroundColor
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
    changeNoteColor() {
      this.$emit('changeNoteColor', { note: this.note, color: this.newColor });
    }
  },
  components: {
    longText
  }
}
