<template>
  <q-item
    clickable
    :to="route"
    class="text-white bg-[#001236]"
  >
    <q-item-section
      v-if="props.icon"
      avatar
      class="rounded"
      
    >
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
      <q-item-label caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },

  caption: {
    type: String,
    default: ''
  },

  route: {
    type: String,
    default: ''
  },

  icon: {
    type: String,
    default: ''
  }
})
</script>
