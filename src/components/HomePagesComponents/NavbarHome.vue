<template>
  <div class="row">
    <!-- NavBar -->
    <nav class="col-6 navbar navbar-expand homeNav ">
  <div class="container-fluid d-flex flex-column align-items-start">
    <RouterLink class="navbar-brand" to="/">OVERWATCH 2 UI</RouterLink>
 
      <div class="navbar-nav d-flex flex-column align-items-start display-5 fw-bold ms-2">
        <RouterLink class="nav-link p-0" aria-current="page" to="Play">PLAY</RouterLink>
        <RouterLink class="nav-link p-0" aria-current="page" to="Heroes">HEROES</RouterLink>
        <RouterLink class="nav-link p-0" aria-current="page" to="Shop">SHOP</RouterLink>
        <RouterLink class="nav-link p-0" aria-current="page" to="Pass">BATTLE PASS</RouterLink>
      </div>
      <div class="navbar-nav d-flex flex-column align-items-start fw-bold ms-2 h5">
        <RouterLink class="nav-link p-0" aria-current="page" to="Play">SOCIAL</RouterLink>
        <RouterLink class="nav-link p-0" aria-current="page" to="Play">CAREER PROFILE</RouterLink>
        <RouterLink class="nav-link p-0" aria-current="page" to="Play">CHALLENGES</RouterLink>
        <RouterLink class="nav-link p-0" aria-current="page" to="Play">PROGRESSION</RouterLink>
      </div>
  </div>
</nav>

<div class="col-6 homeContent d-flex flex-column">
    <div class="h-50 w-100 text-end">SOCIAL COMPONENT</div>
    <div class="h-50 w-100 pt-auto text-end">FLIP UP CAROUSEL</div>
</div>

  </div>
</template>

<script>
export default{
}
</script>

<style scoped>
.h{
  background-color: red;
}
</style>