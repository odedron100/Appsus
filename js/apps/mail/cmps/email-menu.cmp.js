import emailCompose from './email-compose.cmp.js';

export default {
  template: `
        <aside class="main-menu">
            <div class="new-email">
              <button @click="showCompose" class="new-email-btn"><span><i class="fas fa-plus"></i></span>Compose</button>
              <email-compose v-if="compose" :compose="compose"  @close="closeCompose"/>
            </div>
            <div class="inbox">
              <span><i class="fas fa-inbox"></i></span><span>Inbox</span>
            </div>
              <div class="starred">
              <span><i class="fas fa-star"></i></span><span>Starred</span>
            </div>
            <div class="sent-email">
              <span><i class="fas fa-share-square"></i></span><span>Sent Mail</span>
            </div>
            <div class="inbox">
              <span><i class="fab fa-firstdraft"></i></span><span>Drafts</span>
            </div>
        </aside>
    `,
  data() {
    return {
      compose: false,
    }
  },
  methods: {
    showCompose() {
      this.compose = true;
    },
    closeCompose(compose) {
      compose = false;
      this.compose = compose;
    }
  },
  computed: {

  },
  created() {
  },
  components: {
    emailCompose
  }
}
