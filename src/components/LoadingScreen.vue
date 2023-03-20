<template>
  <div class="b d-flex flex-column justify-content-center align-items-center vh-100 ">
    <div class="d-flex flex-column justify-content-center align-items-center ">
      <BaseIcon
        name="logoLoading"
        width="130"
        height="130"
      />
      <p class="g text-gradient display-6 text-white ms-2 mt-3">
        {{ onLoadingText }}
      </p>
    </div>
  </div>
</template>
<script>
import BaseIcon from './BaseIcon.vue'

export default {
  props: {
    onLoadingText: {
      type: String,
      deafult: 'Carregando...'
    }
  },
  components: {
    BaseIcon
  }
}
</script>
<style scoped>
.b {
  background-color: #008CFF;
}

.g {
  text-shadow: 0 0 10px #fff;
}

.loader {
  position: relative;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: linear-gradient(45deg, transparent, transparent 40%, #FFF );
  animation: animate 2s linear infinite;
}

.loader::before {
  content: '';
  position: absolute;
  top: 6px;
  left: 6px;
  right: 6px;
  bottom: 6px;
  background: #008CFF;
  border-radius: 50%;
  z-index: 1000;
}

svg {
  fill: white;
  -webkit-filter: drop-shadow( 0 0 10px #fff);
  filter: drop-shadow( 0 0 10px #fff);
}

.loader::after {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border-radius: 50%;
  background: linear-gradient(45deg, transparent, transparent 40%, #FFF);
  z-index: 1000;
  z-index: 1;
  filter: blur(30px);
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

</style>