export default {
  template: `
    <section class="note-filter">
        <input type="text" @input="setFilter" placeholder="Search...." v-model="byName">
    </section>
    `,
  data() {
    return {
      byName: '',
    }
  },
  methods: {
    setFilter() {
      this.$emit('filter', this.byName)
    }
  }
}
