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

<style scoped>
.home {
  /* Make the homepage take up the full viewport */
  min-height: 100vh;

  /* Add the background image */
  background-image: url('https://imaraansheldon.github.io/Overwatch_Images/Main/Homescreen/homescreen_Overwatch2.jpg'); /* Replace with your image path */
  background-size: cover; /* Ensures the image covers the entire element */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  background-attachment: fixed; /* Ensures the background image stays fixed while scrolling */
  color: white; /* Adjust text color for better readability on the background */
  padding: 20px;
}
</style>
