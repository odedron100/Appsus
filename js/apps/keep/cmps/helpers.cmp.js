
// export default {
//   props: ['selectedNote'],
//   template: `
//    <section class="helpers">
//       <div class="edit item" @click="editNote"><i class="fas fa-bell"></i></div>
//       <div class="trash item" @click="removeNote"><i class="fas fa-trash-alt"></i></div>
//   </section>
//     `,
//   methods: {
//     removeNote() {
//       console.log('this.selectedNote', this.selectedNote);
//       if (!this.selectedNote) return;
//       this.$emit('remove', this.selectedNote);
//     },
//     editNote() {
//       console.log('this.selectedNote', this.selectedNote);
//       if (!this.selectedNote) return;
//       this.$emit('editNote', this.selectedNote);
//     }
//   }
// }
