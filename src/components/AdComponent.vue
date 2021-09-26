<template>
  <div class="component">
    <div class="card p-2">
      {{ ads.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ads: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
