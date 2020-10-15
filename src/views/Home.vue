<template>
  <div class="home">
    <keep-alive>
      <div class="team-list">
      <TeamItem v-for="team in teams" :key="team.id" :school="team.school" :logo="getTeamLogo(team)"/>
    </div>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import TeamItem from '@/components/TeamItem.vue'
import { fetchTeams } from '@/api/api'
import { Team } from '@/store/models'

export default defineComponent({
  components: {
    TeamItem
  },

  setup () {
    const teams = ref<Team[]>([])
    const getTeams = async () => {
      teams.value = await fetchTeams()
    }
    onMounted(getTeams)

    return {
      teams,
      getTeams
    }
  },

  methods: {
    getTeamLogo (team: Team): string {
      if (team.logos) {
        return team.logos[0]
      } else {
        return '../assets/altLogo.png'
      }
    }
  }
})
</script>

.<style lang="scss" scoped>
$width: 250px;

.team-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($width, 1fr));
  grid-gap: 1em;
}
</style>
