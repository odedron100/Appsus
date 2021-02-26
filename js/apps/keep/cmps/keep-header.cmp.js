import keepFilter from './keep-filter.cmp.js';

export default {
  template: `
   <header class="keep-app-header">
      <div class="user"><i class="fas fa-user-alt"></i></div>
      <!-- <input class="search-input" placeholder="Search" type="text"></input> -->
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
