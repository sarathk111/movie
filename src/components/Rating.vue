<template>
  <div class="control star-rating">
    <template v-if="showGrey">
      <span class="fa fa-star"
        v-for="n in 10"
        icon="star"
        :type="n <= stars ? 'is-warning' : 'is-grey'"
        :key="n"
      />
    </template>
    <template v-else>
      <span class="fa fa-star" v-for="n in stars" icon="star" type="is-warning" :key="n" />
    </template>
  </div>
</template>
<script>
export default {
  name: "star-rating",
  props: {
    stars: {
      type: Number,
      default: 0,
    },
    showGrey: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
span[type='is-warning'] {
    color: gold;
}
</style>
