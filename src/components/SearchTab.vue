<template>
<div class="row mb-3">
    <div class="col-sm-4 offset-sm-4">
        <input type="search" autocomplete="on" @input="debounceInput" class="form-control" placeholder="Search Movies...">
    </div>
</div>
</template>

<script>
import { debounce } from "debounce";
export default {
  name: 'search-tab',
  props: {
    msg: String
  },
  methods: {
    debounceInput: debounce(function (e) {
    this.searchInput = e.target.value;
     this.$emit('getSerchInput', e.target.value)
  }, 500)
  }
}
</script>