.<template>
  <div class="team-page">
    <div class="page-header">
      <img class="team-logo" :src="logoPath"/>
      <h1>{{ school }} in <input v-model="season" type="number" id="season-select" name="season" min="1869" max="2020"></h1>
    </div>
    <SeasonStatsList :school="school" :season="season"/>
    <GameList :games="games" :season="season"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import GameList from '@/components/GameList.vue'
import SeasonStatsList from '@/components/SeasonStatsList.vue'
import { fetchSeasonGamesByTeam, fetchTeamBySchoolName, getTeamLogo } from '@/api/api'
import { Game, Team } from '@/store/models'

export default defineComponent({
  props: {
    school: String
  },

  components: {
    SeasonStatsList,
    GameList
  },

  data () {
    return {
      season: 2020
    }
  },

  setup (props) {
    const games = ref<Game[]>([])
    const getGames = async () => {
      games.value = await fetchSeasonGamesByTeam(2020, props.school)
    }

    const team = ref<Team>()
    const getTeam = async () => {
      team.value = await fetchTeamBySchoolName(props.school)
    }

    const logoPath = ref('')
    const getLogoPath = async () => {
      logoPath.value = await getTeamLogo(props.school)
    }

    onMounted(getGames)
    onMounted(getLogoPath)

    return {
      games,
      getGames,
      team,
      getTeam,
      logoPath,
      getLogoPath
    }
  },

  // methods: {
  //   async getLogo (school: string): Promise<void> {
  //     await getTeamLogo(school).then(response => {
  //       this.logo = response
  //     })
  //   }
  // },

  watch: {
    async season (value: number) {
      this.games = await fetchSeasonGamesByTeam(value, this.school)
    }
  }
})
</script>

.<style lang="scss" scoped>
.team-page {

  .page-header {
    display: flex;
    justify-content: center;

    .team-logo {
      max-width: 75px;
      padding-right: 20px;
    }
  }
}
</style>
