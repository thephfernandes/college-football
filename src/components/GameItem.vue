<template>
  <div class="game-item">
    <router-link :to="{path: '/games/' + game.id }" id="game-link">
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
        <img :src="homeLogoPath" alt="" class="team-logo">

        <div class="home team-title">
            {{ homeTeam }}
        </div>

        <div class="home team-score">
          {{ formatScore(game.home_points) }}
        </div>

        <img :src="awayLogoPath" alt="" class="team-logo">

        <div class="away team-title">
          {{ awayTeam }}
        </div>

        <div class="away team-score">
          {{ formatScore(game.away_points) }}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue'
import { Game } from '@/store/models'
import { getTeamLogo } from '@/api/api'

export default defineComponent({
  props: {
    game: Object as () => Game
  },

  setup (props) {
    const homeTeam = props.game?.home_team
    const awayTeam = props.game?.away_team
    const homeLogoPath = ref('')
    const awayLogoPath = ref('')
    const getLogoPaths = async () => {
      homeLogoPath.value = await getTeamLogo(homeTeam)
      awayLogoPath.value = await getTeamLogo(awayTeam)
    }

    onBeforeMount(getLogoPaths)

    return {
      homeTeam,
      awayTeam,
      homeLogoPath,
      awayLogoPath,
      getLogoPaths
    }
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
$height: 210px;
$width: 300px;
.game-item {
    border-radius: 10px;
    -webkit-box-shadow: rgba(0, 0, 0, 0.0588235) 0px 3px 4px 0px;
    -moz-box-shadow: rgba(0, 0, 0, 0.0588235) 0px 3px 4px 0px;
    box-shadow: rgba(0, 0, 0, 0.0588235) 0px 3px 4px 0px;
    height: $height;
    width: $width;
    #game-link {
      text-decoration: none;
    }
    .match-info {
        background-color: #505050;
        border-radius: 10px 10px 0px 0px;
        color: #e7e7e7;
        padding: 5px 0px;

        .venue-info {
            font-size: 1.3rem;
        }
    }

    .teams-info {
    font-size: 1.2em;
    text-decoration: none;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
    padding: 20px 5px;

      .team-logo {
        max-width: 40px;
        margin-right: 0px;
        margin-left: auto;
      }

      .team-title {
        padding-top: 5%;
        margin-left: 0px;
        margin-right: auto;
        text-decoration: none;
      }

      .team-score {
        padding-top: 10%;
        margin-left: 0px;
        margin-right: auto;
        text-decoration: none;
      }
    }
}
</style>
