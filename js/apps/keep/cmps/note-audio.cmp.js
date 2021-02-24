export default {
  props: ['type'],
  template: `
   <section class="note-input-container">
      <!-- <input type="text" class="note-input" name="title" placeholder="..." v-if=" type === 'video'" v-model="text" @focus="onFocus" v-on:keydown.13="onEnter" @input="update"/> -->
      <input type="text" class="note-input" name="audio-url" placeholder="Enter audio SRC..." v-if="type === 'audio'" v-model="audio"  @focus="onFocus" v-on:keydown.13="onEnter" @input="updateAudio"/>
  </section>
    `,
  data() {
    return {
      audio: null,
      isOnFocus: true,
    }
  },
  methods: {
    onFocus() {
      this.isOnFocus = true;
      this.$emit('onFocus', this.isOnFocus);
    },
    onEnter() {
      this.img = null;
    },
    updateAudio() {
      this.$emit('updateAudio', this.audio);
    }
  }
}
