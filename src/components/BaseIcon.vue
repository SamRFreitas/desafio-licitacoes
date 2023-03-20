<template>
  <component
    :is="iconComponent"
    width="35"
    height="35"
  />  
</template>

<script>
const icons = {
  logo: require('./icons/LogoIcon.vue').default,
  logoLoading: require('./icons/LogoLoadingIcon.vue').default
}

export default {
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(value, icons)
      }
    }
  },
  computed: {
    iconComponent () {
      return icons[this.name]
    }
  }
}
</script>