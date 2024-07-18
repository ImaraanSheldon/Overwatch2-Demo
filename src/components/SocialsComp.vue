<template>
    <div class="d-flex justify-content-end pt-3">
        <div class="sq glow"><img src="https://imaraansheldon.github.io/Overwatch_Images/Main/Homescreen/Cute_Lucio.png" alt="HeroLogo"></div>
        <div class="rect glow rounded-end-1 d-flex flex-column align-items-start">
            <div class="player-name fw-bold pt-1 ps-1 m-0 p-0">RAISIN</div>
            <div class="controller-name ps-1 pb-1"><i class="controller las la-gamepad"></i>Raisin</div>
        </div>
        <div class="sq glow ms-1 d-flex justify-content-center align-items-center rounded-1"><img src="https://imaraansheldon.github.io/Overwatch_Images/Main/Homescreen/friends.png" alt="Friends"></div>
        <div class="sq glow medal ms-1 rounded-1 d-flex justify-content-center align-items-center rounded-1"><i class="las la-medal"></i></div>
    </div>
</template>

<style scoped>
.sq{
    width: 2.5rem;
    font-family: sans-serif;
    background-color:var(--text)
}
.rect {
    width: 10rem; /* Allows the width to be responsive */
    height: 2.5rem; /* Fixed height */
    font-family: sans-serif;
    background-image:
    linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.4)), /* White gradient overlay */
    url('https://imaraansheldon.github.io/Overwatch_Images/Main/Homescreen/Omnicode.png'); /* Replace with your image path */
    background-size: cover; /* Ensures the image covers the entire element */
    background-position: center; /* Centers the image */
    background-repeat: no-repeat; /* Prevents the image from repeating */
    color: var(--text-black); /* Adjust text color for better readability on the background */
}

img[alt="HeroLogo"]{
    width: 100%;
}
img[alt="Friends"]{
    width: 50%;
}
.la-medal{
    font-size: xx-large;
    color: var(--text-black);
}
.medal{
    background-color: #ea6c27;
}
.player-name{
    font-size: small;
}
.controller-name{
    font-size: small;
    filter: opacity(90%);
}
.controller{
    font-size: medium;
}
.glow{
    transition: none 0.1s;
    &:hover{
        border: 1px solid var(--text-black);
        transition: ease 0.1s;
    }
}
</style>