<template>
  <div class="season-stat">
      <div class="stat-name">
          {{ statName }}
      </div>
      <div class="stat-value">
          {{ stat.statValue }}
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TeamSeasonStat } from '@/store/models'
import * as _ from 'lodash'

export default defineComponent({
  props: {
    stat: Object as () => TeamSeasonStat
  },

  setup (props) {
    const statName = _.startCase(props.stat?.statName)

    return {
      statName
    }
  }

})
</script>
.<style lang="scss" scoped>
.season-stat {
    display: inline-flex;
    justify-content: space-evenly;

    .stat-name {
        margin-left: 0px;
        margin-right: auto;
    }

    .stat-value {
        margin-left: auto;
        margin-right: 0px;
    }
}
</style>
