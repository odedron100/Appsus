
export default {
  template: `
    <section>
      <button class="add-new-note"> Add new note </button>
      <div class="new-note-container">
          <input type="text"  name="title" placeholder="write somthing..." v-if="activeInput ==='text" v-model="newNote.text"/>
          <input type="text"  name="image-url" placeholder="Enter img URL..." v-if="activeInput ==='img" v-model="newNote.imgURL"/>
          <input type="text"  name="image-url" placeholder="Enter video URL..." v-if="activeInput ==='video" v-model="newNote.videoURL"/>
          <input type="text"  name="image-url" placeholder="Enter img URL..." v-if="activeInput ==='img" v-model="newNote.imgURL"/>
          <div class="new-note-img"><i class="far fa-image"></i></div>
          <div class="new-commit"><i class="fas fa-edit"></i></div>
          <div class="new-list">✅</div>
      </div>
    </section>
    `,
  data() {
    return {
      activeInput: 'text',
      newNote: {
        text: null,
        title: null,
        color: null,
        imgURL: null,
      }
    }
  },
  methods: {
    // openNewNoteModal() {
    //   this.isNewNoteSelected = true;
    // },
    // closeNewNoteModal() {
    //   this.isNewNoteSelected = false;
    // },
    // addNote() {
    //   this.$emit('add', this.newNote);
    // }
  }
}
