export default {
    template: `
    <section class="home-page">
       <h1 class="main-head">Welcome to our Appsus!</h1>
       <div class="bg-image"></div>
       <div class="nav-items">
            <div class="nav-item">
                <img src="./img/home-icon.png" />
                <router-link active-class="active-link" to="/" exact>Home</router-link>
            </div>
            <div class="nav-item">
                <img src="./img/mail.jpeg" />
                <router-link to="/email/inbox">Email</router-link>
            </div>
            <div class="nav-item">
                <img src="./img/keep.png" />
                <router-link to="/keep">Keep</router-link>
            </div>
            <div class="nav-item">
            <img src="./img/book.png" />
            <router-link to="/book">Book</router-link>
        </div>
       </div>
    </section>
    `
}
