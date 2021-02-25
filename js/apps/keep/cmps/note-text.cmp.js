
export default {
  props: ['note'],
  template: `
      <div class="note" v-bind:style="{ background:note.style.backgroundColor}" @click="select">
        <div><h2>{{note.title}}</h2></div>
        <div><h4>{{note.info.text}}</h4></div>
        <input type="color" class="input-color" value="note.style.backgroundColor">
      </div>
    `,
  methods: {
    select() {
      this.$emit('selected', this.note);
    }
  },
}
