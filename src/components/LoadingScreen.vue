<template>
  <div class="b d-flex flex-column justify-content-center align-items-center vh-100 ">
    <div class="d-flex flex-column justify-content-center align-items-center ">
      <div class="loader" />
      <p class="g text-gradient display-5 text-white ms-2 mt-4">
        {{ onLoadingText }}
      </p>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    onLoadingText: {
      type: String,
      deafult: 'Carregando...'
    }
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
  width: 150px;
  height: 150px;
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