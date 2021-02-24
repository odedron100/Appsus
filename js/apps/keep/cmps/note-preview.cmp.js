{/* <div>title:<h4>{{note.info.title}}</h4></div>
          <img :src="note.info.url">
          <div>text:<h4>{{note.info.text}}</h4></div>
          <div>note color:<h4>{{note.style.backgroundColor}}</h4></div>
          <div>Type:<h4>{{note.NoteImg}}</h4></div> */}


export default {
  props: ['note'],
  template: `
      <div class="note" v-bind:style="{ background:note.style.backgroundColor}">
        <div>title:<h4>{{note.title}}</h4></div>
        <div>Type:<h4>{{note.type}}</h4></div>
        <img :src="note.info.imgURL">
        <div>text:<h4>{{note.info.text}}</h4></div>
        <div>todos:<h4>{{note.info.todos}}</h4></div>
        <input type="color" value="note.style.backgroundColor">
      </div>
    `,
  // data() {
  //   return {
  //     // bgc: note.style.background
  //     styleObject: {
  //       background: this.note.style.background,
  //     }
  //   }
  // },
  methods: {

  },
  components: {
  },
}
