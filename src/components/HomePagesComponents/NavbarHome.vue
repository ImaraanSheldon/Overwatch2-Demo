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

<div class="col-lg-6 homeContent d-flex flex-column">
    <div class="h-50 w-100 text-end"><socials/></div>
    <div class="h-50 w-100 text-end  carousel">FLIP UP CAROUSEL</div>
</div>

  </div>
</template>

<script>
import socials from '@/components/SocialsComp.vue'

export default{
  components:{
    socials
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
  /* -webkit-text-stroke: 1px black; */
  &:hover{
    color: var(--text);
    filter: brightness(150%);
  }
}
img[alt="ow2"] {
  width:22rem ;
}
</style>