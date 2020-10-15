<template>
  <div class="game-item">
      <div class="match-info">
        <div class="venue-info">
          {{ game.venue }}
        </div>
        <div class="match-date">
            {{ formatDate(game.start_date) }}
        </div>

        <div class="season-info">
          {{ game.season_type }} playoff
        </div>
      </div>

      <div class="teams-info">
          <div class="home-team">
              {{ game.home_team }}
            </div>
          <div class="home-team-score">
              {{ formatScore(game.home_points) }}
          </div>

          <div class="away-team">
              {{ game.away_team }}
            </div>
          <div class="away-team-score">
            {{ formatScore(game.away_points) }}
          </div>
        <!-- <div class="home team-info">
        </div>

        <div class="away team-info">
        </div> -->
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Game } from '@/store/models'

export default defineComponent({
  props: {
    game: Object as PropType<Game>
  },

  methods: {
    formatDate (date: string): string {
      const month = date.slice(5, 7)
      const day = date.slice(8, 10)
      return day + '/' + month
    },

    formatScore (score: number): number | string {
      if (score) {
        return score
      } else {
        return '-'
      }
    }
  }
})
</script>
<style lang="scss">
.game-item {
    border-radius: 10px;
    -webkit-box-shadow: rgba(0, 0, 0, 0.0588235) 0px 3px 4px 0px;
    -moz-box-shadow: rgba(0, 0, 0, 0.0588235) 0px 3px 4px 0px;
    box-shadow: rgba(0, 0, 0, 0.0588235) 0px 3px 4px 0px;
    width: 525px;
    padding: 15px 5px;

    .match-info {
        background-color: #505050;
        border-radius: 10px 10px 0px 0px;
        color: #e7e7e7;
        padding: 5px 0px;

        .venue-info {
            font-size: 22px;
        }
    }

    .teams-info {
    font-size: 30px;
    height: 75px;
    padding-top: 10px;
    display: grid;
    grid-template-columns: auto auto;

        // .team-info {
        //     display: flex;
        //     justify-content: space-around;
        // }
    }
}
</style>
