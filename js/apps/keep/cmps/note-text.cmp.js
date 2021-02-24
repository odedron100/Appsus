export default {
  props: ['type'],
  template: `
   <section class="note-input-container">
      <input type="text" class="note-input" name="title" placeholder="write somthing..." v-if=" type === 'text'" v-model="text" @focus="onFocus" v-on:keydown.13="onEnter" @input="updateText"/>
  </section>
    `,
  data() {
    return {
      text: null,
      isOnFocus: true,
    }
  },
  methods: {
    onFocus() {
      this.isOnFocus = true;
      this.$emit('onFocus', this.isOnFocus);
    },
    onEnter() {
      this.text = null;
    },
    updateText() {
      this.$emit('updateText', this.text);
    }
  }
}
