<template>
  <div class="col-lg-10 scrollable-y onMoblie onWebpage" id="scrollBarHidden">
    <div class="row d-flex flex-column align-items-center">
      <Post v-for="p in posts" :key="p.id" :posts="p" class="my-3 col-11 " />
    </div>
  </div>
  <div class="col-lg-2 d-flex justify-content-around my-2" style="height: 78vh">
    <div class="row">
      <AdComponent v-for="a in ads" :key="a.id" :ads="a" class="my-2" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import { adsService } from '../services/AdsService'
export default {
  name: 'Home',
  setup() {
    onMounted(
      postsService.getPosts(),
      adsService.getAds()
    )
    return {
      posts: computed(() => AppState.posts),
      ads: computed(() => AppState.ads)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
@media only screen and ( max-width: 752px ){
  .onMobile{
  max-height: 68.7vh
  }
}
@media only screen and ( min-width: 752px ){
  .onWebpage{
  max-height: 80.2vh
  }
}
#scrollBarHidden::-webkit-scrollbar {
  display: none;
}
#scrollBarHidden{
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
