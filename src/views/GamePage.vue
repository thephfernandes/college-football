<template>
  <div class="game-page">
    <div class="game-statistics">
        <div class="event-info">
            {{ game.venue }}
            {{ formatDate(game.start_date) }}
        </div>

        <div class="scoreboard-container">
            <img :src="homeLogoPath" alt="team logo" class="team-logo">
            <div class="scoreboard">
                <div class="home score">
                    {{ game.home_points }}
                </div>

                <div class="score-break">
                    -
                </div>

                <div class="away score">
                    {{ game.away_points }}
                </div>
            </div>
            <img :src="awayLogoPath" alt="team logo" class="team-logo">
        </div>

        <div class="title-container">
            <div class="home-title">
                {{ game.home_team }}
            </div>

            <div class="away-title">
                {{ game.away_team }}
            </div>
        </div>

        <div class="excitement-index">
            Excitement Index: {{ precise(game.excitement_index) }}
        </div>

        <StatComparison v-for="(stat, index) in homeStats.stats"
        :key="index"
        :stat="stat.category"
        :homeVal="stat.stat"
        :awayVal="awayStats.stats[index].stat"/>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue'
import { getGameById, getTeamLogo, getTeamStatsByGame, getHomeTeamStats, getAwayTeamStats } from '@/api/api'
import { Game, TeamGame, TeamStat } from '@/store/models'
import StatComparison from '@/components/StatComparison.vue'

export default defineComponent({
  props: {
    id: Number
  },

  components: {
    StatComparison
  },

  setup (props) {
    const game = ref<Game>()
    const getGameInfo = async () => {
      game.value = await getGameById(props.id)
    }

    const homeLogoPath = ref('')
    const awayLogoPath = ref('')
    const getLogoPaths = async () => {
      homeLogoPath.value = await getTeamLogo(game.value?.home_team)
      awayLogoPath.value = await getTeamLogo(game.value?.away_team)
    }

    const gameStats = ref<TeamGame>()
    const getGameStats = async () => {
      gameStats.value = await getTeamStatsByGame(props.id)
    }

    const homeStats = ref<TeamStat>()
    const getHomeStats = async () => {
      homeStats.value = await getHomeTeamStats(props.id)
    }

    const awayStats = ref<TeamStat>()
    const getAwayStats = async () => {
      awayStats.value = await getAwayTeamStats(props.id)
    }

    onBeforeMount(getGameInfo)
    onBeforeMount(getGameStats)
    onBeforeMount(getHomeStats)
    onBeforeMount(getAwayStats)
    onBeforeMount(getLogoPaths)

    return {
      game,
      getGameInfo,
      gameStats,
      getGameStats,
      homeStats,
      getHomeStats,
      awayStats,
      getAwayStats,
      homeLogoPath,
      awayLogoPath
    }
  },

  methods: {
    formatDate (date: string): string {
      const month = date.slice(5, 7)
      const day = date.slice(8, 10)
      const year = date.slice(0, 4)
      return day + '/' + month + '/' + year
    },
    precise (x: string): string {
      return Number.parseFloat(x).toPrecision(3)
    }
  }
})
</script>
<style lang="scss" scoped>
.game-page {
    .game-statistics {
        max-width: 650px;
        margin: 0 auto;
        background-color: #e0e0e0;
        border-radius: 5px;

        .event-info {
            padding-top: 5px;
            padding-bottom: 10px;
            font-size: 1.1rem;
        }
        .scoreboard-container {
            display: flex;
            text-align: center;
            justify-content: space-evenly;

            .scoreboard {
                margin: auto 0;
                display: contents;
                font-size: 2rem;

                .score {
                    display: inline-block;
                }

                .score-break {
                    display: inline-block;
                }
            }
            .team-logo {
                width: 55px;
            }
        }

        .title-container {
            display: grid;
            grid-template-columns: auto auto;

            .home-title {
                transform: translateX(-20%);
            }

            .away-title {
                transform: translateX(16%);
            }
        }
    }
}
</style>
