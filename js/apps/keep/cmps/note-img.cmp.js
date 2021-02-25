
export default {
  props: ['note'],
  template: `
      <div class="note" v-bind:style="{ background:note.style.backgroundColor}" @click="select">
        <div>title:<h4>{{note.title}}</h4></div>
        <img class="img" :src="note.info.imgURL">
      </div>
      `,
  methods: {
    select() {
      this.$emit('selected', this.note);
    }
  },
}
