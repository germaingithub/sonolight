<template>
    <div
    class="loader"
    id="loader"
    >
        <div
        class="loader_menu"
        id="loader_1"
        >
        <base-img
        :src="require('@/assets/party-1.jpeg')"
        class="mr-3 hidden-xs-only rounded"
        contain
        max-width="120"
        width="100%"
      />
      <base-img
        :src="require('@/assets/party-3.jpeg')"
        class="mr-3 hidden-xs-only rounded"
        contain
        max-width="150"
        width="100%"
      />
            <div
            class="ml-3"
            id="title_loader"
            ><a>Sonolight <br>Make your event unforgetable</a></div>

         <base-img
        :src="require('@/assets/party-2.jpeg')"
        class="mr-3 hidden-xs-only rounded"
        contain
        max-width="120"
        width="100%"
      />
      <base-img
        :src="require('@/assets/party-4.jpeg')"
        class="mr-3 hidden-xs-only rounded"
        contain
        max-width="120"
        width="100%"
      />
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Loader',
  }
</script>

<style scoped>
#loader {
  background-color: green;
  background: repeating-linear-gradient(
      45deg,
      #2b2b2b 0%,
      #2b2b2b 10%,
      #222222 0%,
      #222222 50%
    )
    0 / 15px 15px;
}

#loader_1 {
    top: 40px;
    left: -2.5px;
}
#loader_1 span {
    display: inline-block;
    width: 30px;
    height: 100px;
}

#loader_1 span:nth-child(4) {
    animation: load 1s ease-in-out 0.50s infinite;
    background-color: rgb(7, 8, 5);
    border-radius: 100px;
}
#loader_1 span:nth-child(5) {
    animation: load 1s ease-in-out 0.70s infinite;
    background-color: rgb(96, 147, 15);
    border-radius: 100px;
}
#loader_1 span:nth-child(6) {
    animation: load 1s ease-in-out 0.50s infinite;
    background-color: rgb(7, 8, 5);
    border-radius: 100px;
}
#loader_1 span:nth-child(7) {
    animation: load 1s ease-in-out 0.80s infinite;
    background-color: rgb(96, 147, 15);
    border-radius: 100px;
}
@keyframes load {
    0%,
    100% {
        transform: scaleY(1);
    }
    50% {
        transform: scaleY(2);
    }
}
#bloc_page {
    align-items: center;
    justify-content: center;
}
#loader_1 {
    position: fixed;
    z-index: 100000;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    background-color: whitesmoke;
    animation: loader;
    animation-delay: 10s;
    animation-fill-mode: both;
    background-color: green;
  background: repeating-linear-gradient(
      45deg,
      #2b2b2b 0%,
      #2b2b2b 10%,
      #222222 0%,
      #222222 50%
    )
    0 / 15px 15px;
}
@keyframes loader {
    100% {
        opacity: 0;
        z-index: -2;
    }
}

#container {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

/*Neon*/
a {
  text-align: center;
  font-size: 2em;
  margin-bottom: 0;
  margin-top: 0;
  line-height: 1;
  text-decoration: none;
  color: #green;
}

a:nth-child(1) {
  font-family: "Press Start 2P";
  animation: neon4 1.5s ease-in-out infinite alternate;
}

/*glow*/

@keyframes neon4 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #b6ff00,
      0 0 70px #b6ff00, 0 0 80px #b6ff00, 0 0 100px #b6ff00, 0 0 150px #b6ff00;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #b6ff00,
      0 0 35px #b6ff00, 0 0 40px #b6ff00, 0 0 50px #b6ff00, 0 0 75px #b6ff00;
  }
}

/*Make stuff responsive*/

@media (max-width: 650px) {
  p {
    font-size: 3.5em;
  }
}

</style>
