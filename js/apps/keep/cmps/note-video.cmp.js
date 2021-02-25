// export default {
//   props: ['type'],
//   template: `
//    <section class="note-input-container">
//       <!-- <input type="text" class="note-input" name="title" placeholder="..." v-if=" type === 'video'" v-model="text" @focus="onFocus" v-on:keydown.13="onEnter" @input="update"/> -->
//       <input type="text" class="note-input" name="video-src" placeholder="Enter video SRC..." v-if="type === 'video'" v-model="video"  @focus="onFocus" v-on:keydown.13="onEnter" @input="updateVideo"/>
//   </section>
//     `,
//   data() {
//     return {
//       video: null,
//       isOnFocus: true,
//     }
//   },
//   methods: {
//     onFocus() {
//       this.isOnFocus = true;
//       this.$emit('onFocus', this.isOnFocus);
//     },
//     onEnter() {
//       this.video = null;
//     },
//     updateVideo() {
//       this.$emit('updateVideo', this.video);
//     }
//   }
// }

// export default {
//   props: ['type'],
//   template: `
//    <section class="note-input-container">
//       <!-- <input type="text" class="note-input" name="title" placeholder="..." v-if=" type === 'video'" v-model="text" @focus="onFocus" v-on:keydown.13="onEnter" @input="update"/> -->
//       <input type="text" class="note-input" name="img-url" placeholder="Enter img URL..." v-if="type === 'img'" v-model="img"  @focus="onFocus" v-on:keydown.13="onEnter" @input="updateImg"/>
//   </section>
//     `,
//   data() {
//     return {
//       img: null,
//       isOnFocus: true,
//     }
//   },
//   methods: {
//     onFocus() {
//       this.isOnFocus = true;
//       this.$emit('onFocus', this.isOnFocus);
//     },
//     onEnter() {
//       this.img = null;
//     },
//     updateImg() {
//       this.$emit('updateImgUrl', this.img);
//     }
//   }
// }

export default {
  props: ['note'],
  template: `
      <div class="note" v-bind:style="{ background:note.style.backgroundColor}">
        {{note.info.videoSRC}}
        <div>title:<h4>{{note.title}}</h4></div>
        <iframe class="video-play" src="https://www.youtube.com/embed?v=note.info.videoSRC" frameborder="0" ></iframe>
      </div >
  `,
  // https://www.youtube.com/embed?v=KJWoyM1Q1tw
  // <input type="color" value="note.style.backgroundColor">
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
