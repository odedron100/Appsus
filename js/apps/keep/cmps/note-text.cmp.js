// export default {
//   props: ['type'],
//   template: `
//    <section class="note-input-container">
//       <input type="text" class="note-input" name="title" placeholder="write somthing..." v-if=" type === 'text'" v-model="text" @focus="onFocus" v-on:keydown.13="onEnter" @input="updateText"/>
//   </section>
//     `,
//   data() {
//     return {
//       text: null,
//       isOnFocus: true,
//     }
//   },
//   methods: {
//     onFocus() {
//       this.isOnFocus = true;
//       this.$emit('onFocus', this.isOnFocus);
//     },
//     onEnter() {
//       this.text = null;
//     },
//     updateText() {
//       this.$emit('updateText', this.text);
//     }
//   }
// }

export default {
  props: ['note'],
  template: `
      <div class="note" v-bind:style="{ background:note.style.backgroundColor}">
        <div>title:<h4>{{note.title}}</h4></div>
        <div>text:<h4>{{note.info.text}}</h4></div>
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
