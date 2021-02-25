
export default {
  props: ['note'],
  template: `
      <div class="note" v-bind:style="{ background:note.style.backgroundColor}" @click="select">
        {{note.info.videoSRC}}
        <div>title:<h4>{{note.title}}</h4></div>
        <iframe class="video-play" src="https://www.youtube.com/embed?v=note.info.videoSRC" frameborder="0" ></iframe>
      </div >
  `,
  methods: {
    select() {
      this.$emit('selected', this.note);
    }
  },
}
