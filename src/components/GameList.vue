<template>
  <div class="game-list">
      {{ school }} games for {{ season }} season
      <div class="game-item" v-for="game in games" :key="game.id">
          Game ID: {{ game.id }}
          <br>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Game } from '@/store/models'

export default defineComponent({
  props: {
    school: String,
    games: Object as PropType<Game[]>,
    season: Number
  }
})
</script>
