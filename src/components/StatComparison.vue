<template>
  <div class="stat-comparison">
    <div class="home-value">
      {{ homeVal }}
    </div>

    <div class="stat">
      {{ stat }}
    </div>

    <div class="away-value">
      {{ awayVal }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    stat: String,
    homeVal: String,
    awayVal: String
  }
})
</script>

<style lang="scss" scoped>
.stat-comparison {
  display: grid;
  grid-template-columns: auto 175px auto;
  justify-content: space-around;
  font-size: 1.2rem;
  padding: 5px 10px;
}
</style>
