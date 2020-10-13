<template>
  <div class="home">
    <div class="team-list">
      <div class="team-item" v-for="(team, index) in teams" :key="index">
        <div class="team-logo">
          <!-- {{ team.logos }} -->
          <!-- <img :src="team.logos[0]"/> -->
        </div>
        <div class="team-school">
          {{ team.school }}
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { fetchTeams } from '@/api/api'
import { Team } from '@/store/models'

export default defineComponent({
  setup () {
    const teams = ref<Team[]>([])
    const getTeams = async () => {
      teams.value = await fetchTeams()
      console.log(teams.value[0].logos[0])
    }
    onMounted(getTeams)

    return {
      teams,
      getTeams
    }
  }
})
</script>

.<style lang="scss" scoped>
$width: 250px;

.team-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($width, 1fr))
}
</style>
