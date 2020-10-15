<template>
  <div class="team-season-stats">
     {{ stats[0] }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { TeamSeasonStat } from '@/store/models'
import { getStats } from '@/api/api'

export default defineComponent({
  props: {
    school: String,
    season: Number
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
  }
})
</script>
