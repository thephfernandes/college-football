.<template>
  <div class="team-page">
    <h1>{{ team.school }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
// import { fetchTeamById } from '@/api/api'
import { Team } from '@/store/models'

export default defineComponent({
  props: {
    teamId: String
  }

  //   setup (props) {
  //     const team = ref<Team>()
  //     const getTeam = async () => {
  //       team.value = await fetchTeamById(props.teamId)
  //     }
  //     console.log('team: ', team)
  //     onMounted(getTeam)

//     return {
//       team,
//       getTeam
//     }
//   }
})
</script>
