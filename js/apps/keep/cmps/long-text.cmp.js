export default {
  props: ['desc'],
  template: `
    <span @click="isShowMore = !isShowMore" class="keep-text">{{getDescription}} </span>
    `,
  computed: {
    getDescription() {
      if (this.desc.length > 10 && !this.isShowMore) return `${this.desc.substring(0, 7)}  ...`
      else return this.desc
    }
  },
  data() {
    return {
      isShowMore: false,
    }
  },
  created() {
    this.isShowMore = false;
  }
}
