<template>
  Hello World {{ id }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: Number
  }
})
</script>
