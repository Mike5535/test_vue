<template>
  <EventTable  
    v-if="tasks.length || dates.length"
    :tasks="tasks" 
    :dates="dates"
  />
</template>

<script setup lang="ts">
import EventTable from '@components/EventTable.vue';
import { ref } from 'vue';

const tasks = ref<Array<Task>>([{
  id: 1,
  value: 'as' 
}]);
const dates = ref<Array<EventDate>>([]);
</script>

<style scoped>

</style>
