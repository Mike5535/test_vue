<template>
    <div class='b-table__menu'>
        <div class='b-table__menu__header'>
            {{ curValue }}
            <font-awesome-icon :icon="['fas', 'chevron-up']" class='b-table__menu__up' />
            <font-awesome-icon :icon="['fas', 'chevron-up']" rotation=180 class='b-table__menu__down' />
        </div>
        <div class='b-table__menu__content'>
            <div v-for="status in props.statuses.filter(elem => elem.value !== curValue)" 
                key={curEvent.id} 
                class='b-table__menu__row' 
                @click="curValue = status.value"
            >{{ status.value }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
    statuses: Array<Task>
}>();
const curValue = ref(props.statuses[0].value);
</script>

<style lang="scss">
.b-table__menu {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    cursor: pointer;
    border-radius: 2px;
    margin: auto;
}

.b-table__menu__header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 15px;
    white-space: nowrap;
}

.b-table__menu__up {
    margin: 3px 0 0 10px;
    width: 15px;
    display: none;
}

.b-table__menu__down {
    margin: 3px 0 0 10px;
    width: 15px;
}

.b-table__menu__content {
    display: none;
}

.b-table__menu__row {
    width: calc(100% - 20px);
    text-align: center;
    border-top: 1px solid black;
    padding: 0 10px 2px 10px;
    white-space: nowrap;
}

.b-table__menu:hover .b-table__menu__content {
    display: contents;
}

.b-table__menu:hover .b-table__menu__up {
    display: inline;
}

.b-table__menu:hover .b-table__menu__down {
    display: none;
}

.b-table__menu:hover {
    z-index: 100;
    background-color: rgb(229, 246, 255);
}
</style>
