import emailCompose from './email-compose.cmp.js';
export default {
  template: `
        <aside class="main-menu">
            <div class="new-email">
              <router-link to="/email/compose" class="new-email-btn"><span><i class="fas fa-plus"></i></span><span>Compose</span></router-link>
            </div>
            <div class="inbox">
                  <router-link to="/email/inbox"><span><i class="fas fa-inbox"></i></span><span>Inbox</span></router-link>
            </div>
            <div class="starred">
                  <router-link to="/email/starred"><span><i class="fas fa-star"></i></span><span>Starred</span></router-link>
            </div>
            <div class="sent-email">
                  <router-link to="/email/sent"><span><i class="fas fa-share-square"></i></span><span>Sent Mail</span></router-link>
            </div>
            <div class="drafftes">
                  <router-link to="/email/draftted"><span><i class="fab fa-firstdraft"></i></span><span>Drafts</span></router-link>
            </div> 
        </aside>
    `,
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {

  },
  created() {
  },
  components: {
    emailCompose
  }
}

