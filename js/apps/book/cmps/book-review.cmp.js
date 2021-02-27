export default {
    props: ['review'],
    template: `
    <section class="book-review">
        <p>{{review.name}}</p>
        <p>{{review.rate}}</p>
        <p>{{review.readAt}}</p>
        <p>{{review.textArea}}</p>
    </section>
    `,
    computed: {

    }
}

