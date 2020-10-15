<template>
  <div class="game-list">
      <GameItem v-for="game in games" :key="game.id" :game="game"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Game } from '@/store/models'
import GameItem from '@/components/GameItem.vue'

export default defineComponent({
  props: {
    games: Object as () => Game[],
    season: Number
  },
  components: {
    GameItem
  }
})
</script>

<style lang="scss" scoped>

.game-list {
    display: inline-grid;
    margin-left: auto;
    width: 85vw;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1em;
}
</style>
