<template>
    <div class="">
        <div class="row mb-5">
            <div class="col-md-6 text-start">
                <h1 class="hero-grad">PLAY</h1>
            </div>
            <div class="col-md-6">
                <socials />
            </div>
        </div>
            <!-- Modes -->
        <div class="d-flex justify-content-center">

            <div class="d-flex justify-content-end mb-5">
                <div class="card d-flex justify-content-start">
                    <img src="https://imaraansheldon.github.io/Overwatch_Images/Main/Homescreen/homescreen_Overwatch2.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body m-0 p-0 ps-1 pb-1 text-start">
                        <h5 class="card-title card-head m-0 p-0">Welcome to Overwatch</h5>
                        <a href="#" class="card-text card-link">WATCH NOW!</a>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-end mb-5">
                <div class="card d-flex justify-content-start">
                    <img src="https://imaraansheldon.github.io/Overwatch_Images/Main/Homescreen/homescreen_Overwatch2.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body m-0 p-0 ps-1 pb-1 text-start">
                        <h5 class="card-title card-head m-0 p-0">Welcome to Overwatch</h5>
                        <a href="#" class="card-text card-link">WATCH NOW!</a>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-end mb-5">
                <div class="card d-flex justify-content-start">
                    <img src="https://imaraansheldon.github.io/Overwatch_Images/Main/Homescreen/homescreen_Overwatch2.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body m-0 p-0 ps-1 pb-1 text-start">
                        <h5 class="card-title card-head m-0 p-0"></h5>
                        <a href="#" class="card-text card-link"></a>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-end mb-5">
                <div class="card d-flex justify-content-start">
                    <img src="https://imaraansheldon.github.io/Overwatch_Images/Main/Homescreen/homescreen_Overwatch2.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body m-0 p-0 ps-1 pb-1 text-start">
                        <h5 class="card-title card-head m-0 p-0">Welcome to Overwatch</h5>
                        <a href="#" class="card-text card-link">WATCH NOW!</a>
                    </div>
                </div>
            </div>

            <div class="d-flex flex-column mb-5">
                 <div class="sides mt-2">1</div>
                 <div class="sides mt-4">2</div>
                 <div class="sides mt-4">3</div>
            </div>

        </div>
    </div>
</template>

<script>
import socials from '@/components/SocialsComp.vue'

export default {
    components: {
        socials
    }
}
</script>

<style scoped>
.hero-grad {
    font-size: 6rem;
    font-weight: bold;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    background-clip: text;
    color: transparent;

}
.sides{
    width:14rem;
    height: 7rem;
    background-color: red;
}
.card {
    width: 14rem;
    height: 24rem;
    margin: 0.5rem;
    /* margin-bottom: 2rem; */
}

img {
    width: 100%;
}

.card-head {
    font-size: medium;
}

.card-link {
    font-size: medium;
    text-decoration: none;
    color: var(--text-black);
    filter: opacity(60%);
}
</style>