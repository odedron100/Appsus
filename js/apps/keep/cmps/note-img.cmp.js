export default {
  props: ['type'],
  template: `
   <section class="note-input-container">
      <!-- <input type="text" class="note-input" name="title" placeholder="..." v-if=" type === 'video'" v-model="text" @focus="onFocus" v-on:keydown.13="onEnter" @input="update"/> -->
      <input type="text" class="note-input" name="img-url" placeholder="Enter img URL..." v-if="type === 'img'" v-model="img"  @focus="onFocus" v-on:keydown.13="onEnter" @input="updateImg"/>
  </section>
    `,
  data() {
    return {
      img: null,
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
    updateImg() {
      this.$emit('updateImgUrl', this.img);
    }
  }
}
