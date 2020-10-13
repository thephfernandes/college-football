<template>
  <div class="home">
    <div class="team-list">
      <div class="team-item" v-for="team in teams" :key="team.id">
        {{ team.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  data () {
    return {
      teams: [{ id: 0, name: 'team a' }, { id: 1, name: 'team b' }, { id: 2, name: 'team c' }]
    }
  }
})
</script>
