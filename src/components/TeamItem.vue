<template>
  <div class="team-item">
    <router-link :to="{ path: '/teams/' + school }">
      <div class="team-logo">
        <img :src="logo" alt="team logo" />
      </div>
      <div class="team-title">
        {{ school }}
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TeamItem',
  props: {
    school: String,
    logo: String
  }
})
</script>

<style lang="scss">
$width: 250px;

.team-item {
  -webkit-box-shadow: rgba(0, 0, 0, 0.0588235) 0px 3px 4px 0px;
  -moz-box-shadow: rgba(0, 0, 0, 0.0588235) 0px 3px 4px 0px;
  box-shadow: rgba(0, 0, 0, 0.0588235) 0px 3px 4px 0px;
  border-radius:8px;
  background: #f0f0f0;

  .team-logo {
    max-width: $width;
    max-height: $width;

    img {
      padding: 25px 15px;
      width: 95%;
    }
  }
}
</style>
