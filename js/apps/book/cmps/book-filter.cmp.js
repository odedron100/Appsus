export default {
    template: `
    <section class="book-filter">
        <label> Search a book: </label>    
        <input type="text" @input="setFilter" placeholder="Search...." v-model="filterBy.byName">
        <label>From:
                <input type="number" @input="setFilter" placeholder="Price" v-model="filterBy.fromPrice">
            </label>
            <label>To:
                <input type="number" @input="setFilter" placeholder="Price" v-model="filterBy.toPrice">
            </label>
    </section>
    `,
    data() {
        return {
            filterBy: {
                byName: '',
                fromPrice: 0,
                toPrice: Infinity
            }
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', { ...this.filterBy })
        }
    }
}
