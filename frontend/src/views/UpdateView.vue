<template>
  <div class="update-container">
    <UpdateView :id="parseInt(id, 10)" />
  </div>
</template>

<script>
import UpdateView from '@/components/Updates.vue'

export default {
  name: 'Updates',
  components: {
    UpdateView
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>
