<template>
  <div class="b-table" v-if="tasks.length || dates.length" :tasks="tasks" :dates="dates">
    <div class="b-table__column">
      <div class='b-table__name'>
        Задачи / Даты
      </div>
      <div v-for="(curTaskObj, i) in tasks" :key="curTaskObj.id" class='b-table__first-cell'>
        <input @submit.prevent @keydown="onKeyDown($event, tasks[i])" @keyup="onKeyUp" v-model="tasks[i].value"
          class='b-table__cell__input' :style="{ width: tasks[i].value.length + 'ch' }">
      </div>
      <div class='b-table__add-cell'>
        <font-awesome-icon
          :icon="['fas', 'plus']" 
          size="sm" 
          class='b-table__button-add'
          @click="tasks.push({
            id: tasks[tasks.length - 1].id + 1,
            value: `${tasks[tasks.length - 1].id + 1}`,
          })"
        />
      </div>
    </div>
    <div v-for="(curDataObj, i) in dates" :key="curDataObj.id" class="b-table__column">
      <div class='b-table__header-data'>
        <input @submit.prevent @keydown="onKeyDown($event, dates[i])" @keyup="onKeyUp" v-model="dates[i].value"
          class='b-table__cell__input' :style="{ width: dates[i].value.length + 'ch' }">
      </div>
      <div v-for="curTaskObj in tasks" :key="curTaskObj.id" class='b-table__cell'>
        <StatusList 
          v-if="getEvent(curDataObj.id, curTaskObj.id)"  
          :statuses="statuses"
        />
        <font-awesome-icon v-else
          :icon="['fas', 'plus']" 
          size="sm" 
          class='b-table__button-add'
          @click="onAddEvent(curDataObj.id, curTaskObj.id)"
        />
      </div>
    </div>
    <div class='b-table__add-cell'>
        <font-awesome-icon
          :icon="['fas', 'plus']" 
          size="sm" 
          class='b-table__button-add'
          @click="dates.push({
            id: dates[dates.length - 1].id + 1,
            value: dateFormat(new Date(), 'dd.mm.yyyy' as DateFormat),
          })"
        />
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import StatusList from './StatusList.vue';
import { dateFormat } from '@utils/dateFormat';

const tasks = ref<Array<Task>>([{
  id: 1,
  value: '1'
}]);
const dates = ref<Array<EventDate>>([{
  id: 1,
  value: '12.12.2001'
}]);
const statuses = ref<Array<Status>>([
  {
    id: 1,
    value: 'Open'
  },
  {
    id: 2,
    value: 'In Progress'
  },
  {
    id: 3,
    value: 'Close'
  },
]);
const tableEvents = ref<Array<TableEvent>>([]);

function onKeyDown(e: Event, valueObj: { value: string }) {
  const target = e.target as HTMLInputElement;
  if (!target.dataset.intervalID) {
    target.dataset.intervalID = setInterval(
      (target: HTMLInputElement, valueObj: { value: string }) => {
        const { value } = valueObj;
        target.style.width = value.length + 'ch';
      }, 0, target, valueObj
    ).toString();
  }
}

function onKeyUp(e: Event) {
  const target = e.target as HTMLInputElement;
  if (target.dataset.intervalID) {
    clearInterval(+target.dataset.intervalID);
    target.dataset.intervalID = '';
  }
}

function getEvent(dateId: number, taskId: number) {
  return tableEvents.value.find(e => e.dateId === dateId && e.taskId === taskId);
}

function onAddEvent(dateId: number, taskId: number) {
  tableEvents.value.push({
    dateId,
    taskId,
  })
}

</script>

<style scoped lang="scss">
.b-form {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
  width: 20%;
  display: inline-block;
  vertical-align: top;
  margin-right: 10px;
}

.b-button__cross {
  display: inline-block;
  cursor: pointer;
  width: 30px;
  height: 30px;
}

.b-table {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.b-table__column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  margin-right: 2px;
}

.b-table__first-cell {
  padding: 10px;
  text-align: center;
  width: calc(100% - 24px);
  min-width: var(--min-width-header-row);
  height: var(--height-cell);
  background-color: var(--color-first-cell);
}

.b-table__add-cell {
  padding: 10px;
  text-align: center;
  width: 20px;
  height: var(--height-cell);
}

.b-table__name {
  padding: 10px;
  text-align: center;
  width: calc(100% - 24px);
  min-width: var(--min-width-header-row);
  height: var(--height-cell);
  background-color: var(--color-name-table);
}

.b-table__header-data {
  padding: 10px;
  text-align: center;
  width: calc(100% - 20px);
  height: var(--height-cell);
  background-color: var(--color-header-table);
  min-width: var(--min-width-cell);
}

.b-table__cell {
  width: calc(100% - 20px);
  min-width: var(--min-width-cell);
  text-align: center;
  padding: 10px;
  user-select: none;
  height: 100%;
  height: var(--height-cell);
  background-color: var(--color-cell);
}

.b-table__button-add {
  cursor: pointer;
}

.b-table__cell__input {
  border: none;
  background: transparent;
  outline: none;
  font-size: 16px;
  text-align: center;
  padding: 0 10px;
}
</style>