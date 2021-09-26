<template>
  <div class="component bg-info text-light card">
    <div class="card-header row px-0">
      <div class="col d-flex">
        <img :src="posts.creator.picture" alt="" class="Icon mx-2 rounded">
        <p id="clipTxtSm">
          <br>
          {{ posts.creator.name }}
        </p>
      </div>
      <div class="col"></div>
    </div>
    <div class="card-body scrollable-y" style="max-height: 20vh">
      {{ posts.body }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.Icon{
  height: 64px;
  width: 64px;
}
@media only screen and ( max-width: 752px ){
#clipTxtSm{
  overflow: hidden;
}
}

</style>
