export default {
    props: ['desc'],
    template: `
    <span @click="isShowMore = !isShowMore" class="email-text">{{getDescription}} </span>
    `,
    computed: {
        getDescription() {
            if (this.desc.length > 7) return `${this.desc.substring(0, 7)}...`
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