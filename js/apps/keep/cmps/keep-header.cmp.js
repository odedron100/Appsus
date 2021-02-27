import keepFilter from './keep-filter.cmp.js';

export default {
  template: `
   <header class="keep-app-header">
      <keep-filter @filter="setFilter"/>
      <div class="title">Keep</div>
  </header>
    `,
  methods: {
    setFilter(filterByName) {
      this.$emit('filter', filterByName)
    }
  },
  components: {
    keepFilter,
  }
}
