export default {
    template: `
    <section class="email-filter">
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
            this.$emit('filtered', this.byName)
        }
    }
}
