<template>
  <nav class="navbar header-color shadow-lg d-flex justify-content-center">
    <div class="d-flex align-items-center">
      <BaseIcon name="logo" />
      <a class="navbar-brand fs-3 text-white ms-2">effecti</a>
    </div>
  </nav>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  components: {
    BaseIcon
  }
}
</script>