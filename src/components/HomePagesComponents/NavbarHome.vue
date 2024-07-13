<template>
  <div class="row">
    <!-- NavBar -->
    <nav class="col-6 navbar navbar-expand homeNav ">
  <div class="container-fluid d-flex flex-column align-items-start">
    <RouterLink class="navbar-brand" to="/">OVERWATCH 2 UI</RouterLink>
 
      <div class="navbar-nav d-flex flex-column align-items-start display-5 fw-bold ms-2">
        <RouterLink class="nav-link active p-0" aria-current="page" to="Play">PLAY</RouterLink>
        <RouterLink class="nav-link p-0" aria-current="page" to="Play">HEROES</RouterLink>
        <RouterLink class="nav-link p-0" aria-current="page" to="Play">SHOP</RouterLink>
        <RouterLink class="nav-link p-0" aria-current="page" to="Play">BATTLE PASS</RouterLink>
      </div>
      <div class="navbar-nav d-flex flex-column align-items-start fw-bold ms-2 h4">
        <RouterLink class="nav-link active p-0" aria-current="page" to="Play">SOCIAL</RouterLink>
        <RouterLink class="nav-link p-0" aria-current="page" to="Play">CAREER PROFILE</RouterLink>
        <RouterLink class="nav-link p-0" aria-current="page" to="Play">CHALLENGES</RouterLink>
        <RouterLink class="nav-link p-0" aria-current="page" to="Play">PROGRESSION</RouterLink>
      </div>
  </div>
</nav>

<div class="col-6">
  content
</div>

  </div>
</template>