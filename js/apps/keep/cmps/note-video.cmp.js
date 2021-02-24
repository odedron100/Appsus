export default {
  props: ['type'],
  template: `
   <section class="note-input-container">
      <!-- <input type="text" class="note-input" name="title" placeholder="..." v-if=" type === 'video'" v-model="text" @focus="onFocus" v-on:keydown.13="onEnter" @input="update"/> -->
      <input type="text" class="note-input" name="video-src" placeholder="Enter video SRC..." v-if="type === 'video'" v-model="video"  @focus="onFocus" v-on:keydown.13="onEnter" @input="updateVideo"/>
  </section>
    `,
  data() {
    return {
      video: null,
      isOnFocus: true,
    }
  },
  methods: {
    onFocus() {
      this.isOnFocus = true;
      this.$emit('onFocus', this.isOnFocus);
    },
    onEnter() {
      this.video = null;
    },
    updateVideo() {
      this.$emit('updateVideo', this.video);
    }
  }
}
