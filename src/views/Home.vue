<template>
  <div class="home">
    <div class="team-list">
      <TeamItem v-for="team in teams"  :key="team.id" :school="team.school" :logo="getTeamLogo(team)"/>
      <!-- <div class="team-item" v-for="(team, index) in teams" :key="index">
        <router-link :to="{ path: '/teams/' + team.school}">
        </div>
        <div class="team-school">
          {{ team.school }}
          </div>
          </router-link>
      </div> -->
    </div>
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
        return ''
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
