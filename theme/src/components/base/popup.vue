<template>
  <div
    v-if="visibility"
    id="visibilityOverlay"
    class="overlay"
  >
    <div class="modal">
      <div class="modalTitle">
        <h2> Nouveauté à destination des communes.</h2>
      </div>
      <div class="modalBody">
        <img
          alt="on air"
          width="500"
          height="300"
          border="100px"
          :src="require('@/assets/on_air.jpeg')"
        >
        <div>
        </div>
        <button
          class="confirm"
          @click.prevent="toggleModal"
        >
          Bienvenue
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ModalConfirmation',
    data () {
      return {
        visibility: false,
        timeout: 0,

      }
    },
    methods: {
      toggleModal () {
        this.visibility = !this.visibility
      },
      show () {
        setTimeout(() => {
          this.visibility = true
        }, 2000)
      },
    },

  }

</script>

<style scoped>
  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    margin: 10px;
  }

  .modal {
    background: rgb(255,250,70);
background: radial-gradient(circle, rgba(255,250,70,1) 0%, rgba(96,147,15,1) 100%);
    padding: 20px;
    border-radius: 15px;
    color: #444;
  }

  .confirm {
    background: none;
    border: 2px solid;
    font: inherit;
    line-height: 1;
    margin: 0.5em;
    padding: 1em 2em;
    color: #040505;
    border-radius: 10px;
    text-decoration: none;
    display:center;
  }

  .confirm:hover {
    box-shadow: 0 0 0 0, inset 4px 4px 4px 4px;
    background: rgb(193, 165, 90);
  }

</style>
