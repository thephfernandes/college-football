<template>
  <div class="game-list">
      <GameItem v-for="game in games" :key="game.id" :game="game"/>
      <!-- <div class="game-item" v-for="game in games" :key="game.id">
          Game ID: {{ game.id }}
          <br>
      </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Game } from '@/store/models'
import GameItem from '@/components/GameItem.vue'

export default defineComponent({
  props: {
    school: String,
    games: Object as PropType<Game[]>,
    season: Number
  },
  components: {
    GameItem
  }
})
</script>
