export default {
    template: `
    <section class="email-filter">
        <input type="text" @input="setFilter" placeholder="Search...." v-model="byName">
        <select name="options" @change="setSort">
            <option value="time">Time</option>
            <option value="title">Title</option>
        </select>
    </section>
    `,
    data() {
        return {
            byName: '',
            sortBy: {
                time: null,
                title: null,
            }
        }
    },
    methods: {
        setFilter() {
            this.$emit('filter', this.byName)
        },
        setSort(ev) {
            if (ev.target.value === 'time') {
                this.sortBy.title = null;
                this.sortBy.time = ev.target.value;
            }
            else if (ev.target.value === 'title') {
                this.sortBy.time = null;
                this.sortBy.title = ev.target.value;
            }
            this.$emit('sort', { ...this.sortBy })
        }
    }
}
