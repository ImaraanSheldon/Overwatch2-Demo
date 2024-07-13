<template>
  <div class="row">
    <!-- NavBar -->
    <nav class="col-6 navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid d-flex flex-column align-items-start ms-2">
    <RouterLink class="navbar-brand" to="Play">PLAY</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav d-flex flex-column align-items-start display-5 fw-bold">
        <RouterLink class="nav-link active" aria-current="page" to="Play">PLAY</RouterLink>
        <RouterLink class="nav-link" aria-current="page" to="Play">HEROES</RouterLink>
        <RouterLink class="nav-link" aria-current="page" to="Play">SHOP</RouterLink>
        <RouterLink class="nav-link" aria-current="page" to="Play">BATTLE PASS</RouterLink>
      </div>
    </div>
  </div>
</nav>

<div class="col-6">
  content
</div>

  </div>
</template>