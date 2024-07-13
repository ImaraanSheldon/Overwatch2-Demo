<template>
  <div class="home">
    <navHome/>
    </div>
</template>

<script>
// @ is an alias to /src
import navHome from '@/components/HomePagesComponents/NavbarHome.vue'

export default {
  name: 'HomeView',
  components: {
    navHome
  }
}
</script>
