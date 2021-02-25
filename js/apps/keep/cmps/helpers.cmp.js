
export default {
  props: ['selectedNote'],
  template: `
   <section class="helpers">
      <div class="remarks"><i class="far fa-lightbulb"></i></div>
      <div class="reminder"><i class="fas fa-bell"></i></div>
      <div class="edit" @click="editNote"><i class="fas fa-bell"></i></div>
      <div class="archive"><i class="fas fa-inbox"></i></div>
      <div class="trash" @click="removeNote"><i class="fas fa-trash-alt"></i></div>
  </section>
    `,
  methods: {
    removeNote() {
      console.log('this.selectedNote', this.selectedNote);
      if (!this.selectedNote) return;
      this.$emit('remove', this.selectedNote);
    },
    editNote() {
      console.log('this.selectedNote', this.selectedNote);
      if (!this.selectedNote) return;
      this.$emit('edit', this.selectedNote);
    }
  }
}
