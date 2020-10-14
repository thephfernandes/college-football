.<template>
  <div class="team-page">
    <h1>{{ school }}</h1>
    {{ games }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { fetchSeasonGamesByTeam } from '@/api/api'
import { Game } from '@/store/models'

export default defineComponent({
  props: ['school'],

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
  }
})
</script>
