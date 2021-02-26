import emailCompose from './email-compose.cmp.js';
export default {
  template: `
        <aside class="main-menu">
            <div class="new-email">
              <router-link to="/email/compose" class="new-email-btn"><img src="../../../img/compose.png"/><span>Compose</span></router-link>
            </div>
            <div class="inbox" :class="{focus:isInbox}">
                  <router-link to="/email/inbox" @click.native="switchRoute"><span><i class="fas fa-inbox"></i></span>  <span>Inbox</span></router-link>
            </div>
            <div class="starred" :class="{focus:isStarred}">
                  <router-link to="/email/starred" @click.native="switchRoute"><span><i class="fas fa-star"></i></span>  <span>Starred</span></router-link>
            </div>
            <div class="sent-email" :class="{focus:isSent}">
                  <router-link to="/email/sent" @click.native="switchRoute"><span><i class="fas fa-share-square"></i></span>  <span>Sent Mail</span></router-link>
            </div>
            <div class="drafftes" :class="{focus:isDraftted}">
                  <router-link to="/email/draftted" @click.native="switchRoute"><span><i class="fab fa-firstdraft"></i></span>  <span>Drafts</span></router-link>
            </div> 
        </aside>
    `,
  data() {
    return {
      currRoute: null,
      isInbox: true,
      isStarred: false,
      isSent: false,
      isDraftted: false,
    }
  },
  methods: {
    switchRoute() {
      this.currRoute = this.$route.path.substring(7, this.$route.path.length)
      this.getFocusRoute();
    },
    getFocusRoute() {
      if (this.currRoute === 'inbox') {
        this.isInbox = true;
        this.isStarred = false;
        this.isSent = false;
        this.isDraftted = false
      }
      else if (this.currRoute === 'starred') {
        this.isInbox = false;
        this.isStarred = true;
        this.isSent = false;
        this.isDraftted = false
      }
      else if (this.currRoute === 'sent') {
        this.isInbox = false;
        this.isStarred = false;
        this.isSent = true;
        this.isDraftted = false
      }
      else if (this.currRoute === 'draftted') {
        this.isInbox = false;
        this.isStarred = false;
        this.isSent = false;
        this.isDraftted = true
      }
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

