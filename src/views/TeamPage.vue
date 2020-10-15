.<template>
  <div class="team-page">
    <h1>{{ school }} in <input v-model="season" type="number" id="season-select" name="season" min="1869" max="2020"></h1>
    <GameList :school="school" :games="games" :season="season"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import GameList from '@/components/GameList.vue'
import { fetchSeasonGamesByTeam } from '@/api/api'
import { Game } from '@/store/models'

export default defineComponent({
  props: {
    school: String
  },

  components: {
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
    onMounted(getGames)

    return {
      games,
      getGames
    }
  },

  watch: {
    async season (value: number) {
      this.games = await fetchSeasonGamesByTeam(value, this.school)
    }
  }
})
</script>
