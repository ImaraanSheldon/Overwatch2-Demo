<template>
  <div class="row">
    <!-- NavBar -->
    <nav class="col-lg-6 navbar navbar-expand homeNav ">
  <div class="container-fluid d-flex flex-column align-items-start">
    <RouterLink class="navbar-brand" to="/"><img src="https://imaraansheldon.github.io/Overwatch_Images/Main/Logo/Overwatch2_Brand.png" alt='ow2'></RouterLink>
 
      <div class="navbar-nav d-flex flex-column align-items-start display-5 fw-bold ms-2">
        <RouterLink class="nav-link p-0 text" aria-current="page" to="Play">PLAY</RouterLink>
        <RouterLink class="nav-link p-0 text" aria-current="page" to="Heroes">HEROES</RouterLink>
        <RouterLink class="nav-link p-0 text" aria-current="page" to="Shop">SHOP</RouterLink>
        <RouterLink class="nav-link p-0 text" aria-current="page" to="Pass">BATTLE PASS</RouterLink>
      </div>
      <div class="navbar-nav d-flex flex-column align-items-start fw-bold ms-2 h5">
        <RouterLink class="nav-link p-0 text" aria-current="page" to="Play">SOCIAL</RouterLink>
        <RouterLink class="nav-link p-0 text" aria-current="page" to="Play">CAREER PROFILE</RouterLink>
        <RouterLink class="nav-link p-0 text" aria-current="page" to="Play">CHALLENGES</RouterLink>
        <RouterLink class="nav-link p-0 text" aria-current="page" to="Play">PROGRESSION</RouterLink>
      </div>
  </div>
</nav>

<div class="col-lg-6 homeContent">
    <div class="h-50 w-100"><socials/></div>
    <div class="h-50 w-100 d-flex justify-content-end align-items-end"><news/></div>
</div>

  </div>
</template>

<script>
import socials from '@/components/SocialsComp.vue'
import news from './NewsComp.vue'

export default{
  components:{
    socials,
    news
  }
}
</script>

<style scoped>
.carousel{
  margin-top: 100%;
}
h1,h2,h3,h4,h5{
  color: var(--text);
}
.text{
  color: var(--text);
  filter: brightness(95%);
  transition: ease-in-out 0.2s;
  /* -webkit-text-stroke: 1px black; */
  &:hover{
    color: var(--text);
    filter: brightness(150%);
    margin-left: 1vw;
    transition: ease 0.2s;
  }
}
img[alt="ow2"] {
  width:22rem ;
}
</style>