export default {
    template: `
   <header class="app-header">
        <div class="logo">
           <h1><router-link active-class="active-link" to="/" exact>Appsus</router-link></h1>
       </div>
       <div class="serach-filter">
         
       </div>
       <nav>
           <svg @click="openNav" class="places" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
           <div v-if="isOpen" class="nav-open">
           <div class="nav-item" @click="openNav">
                <img src="../../img/home-icon.png" />
                <router-link active-class="active-link" to="/" exact>Home</router-link>
           </div>
           <div class="nav-item" @click="openNav">
                <img src="../../img/mail.jpeg" />
                <router-link to="/email/inbox">Email</router-link> 
           </div>
           <div class="nav-item" @click="openNav">
                <img src="../../img/keep.png" />
                <router-link to="/keep">Keep</router-link>
           </div>
           <div class="nav-item" @click="openNav">
                <img src="../../img/book.png" />
                <router-link to="/book">Book</router-link>
           </div>
           </div>
        </nav>
    </header>
           `,
    methods: {
        openNav() {
            this.isOpen = !this.isOpen;
        }
    },
    data() {
        return {
            isOpen: false
        }
    },
}




        //    <router-link to="/book">Books</router-link>
        //    <router-link to="/about">About</router-link>