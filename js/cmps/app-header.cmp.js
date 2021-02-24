export default {
    template: `
   <header class="app-header">
        <div class="logo">
           <h1>Appsus</h1>
       </div>
       <div class="serach-filter">
         
       </div>
       <nav>
           <router-link active-class="active-link" to="/" exact>Home</router-link>
           <router-link to="/email">Email</router-link> 
           <router-link to="/keep">Keep</router-link>
       </nav>
    </header>
           `,
}
        //    <router-link to="/book">Books</router-link>
        //    <router-link to="/about">About</router-link>