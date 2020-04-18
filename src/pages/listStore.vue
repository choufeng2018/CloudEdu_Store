<template>
  <div class="store">
    <div class="list">

    </div>
  </div>
</template>

<script>
// import { isRequired } from 'assets/uitls/validate'
export default {
  name: 'PageIndex',
  data () {
    return {
      form: {}
    }
  },
  created () {},
  methods: {
    submitForm () {
      this.$router.push({
        path: 'map'
      })
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
