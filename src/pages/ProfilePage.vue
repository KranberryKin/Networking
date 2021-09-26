<template>
  <div class="component row">
    <div class="col-9"></div>
    <div class="col-3" style="height: 80.2vh">
      <div class="row">
        <AdComponent v-for="a in ads" :key="a.id" :ads="a" class="my-2" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { adsService } from '../services/AdsService'
import { AppState } from '../AppState'
export default {
  setup() {
    onMounted(
      adsService.getAds()
    )
    return {
      ads: computed(() => AppState.ads)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
