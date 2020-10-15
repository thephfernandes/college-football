<template>
  <div class="team-season-stats">
     <SeasonStatItem v-for="(stat, index) in stats" :key="index" :stat="stat"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { TeamSeasonStat } from '@/store/models'
import { getStats } from '@/api/api'
import SeasonStatItem from '@/components/SeasonStatItem.vue'

export default defineComponent({
  props: {
    school: String,
    season: Number
  },

  components: {
    SeasonStatItem
  },

  setup (props) {
    const stats = ref<TeamSeasonStat[]>([])
    const getTeamStats = async () => {
      stats.value = await getStats(props.season, props.school)
    }

    onMounted(getTeamStats)

    return {
      stats,
      getTeamStats
    }
  },

  watch: {
    season (value) {
      this.getTeamStats()
    }
  }
})
</script>
.<style lang="scss" scoped>
.team-season-stats {
  display: inline-grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1em;
  padding: 20px 50px;
  width: 70%;

}
</style>
