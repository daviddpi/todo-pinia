<script setup>
import { useTodoListStore } from '@/stores/todolist.js'
import { storeToRefs } from 'pinia'

const store = useTodoListStore()
const { todoList } = storeToRefs(store)

const { toggleCompleted } = store
const { deleteTodo } = store

</script>

<template>
  <div v-for="todo in todoList" :key="todo.id" class="item">
    <div class="content">
        <span :class="{complete: todo.completed}">{{ todo.item }} </span>
        <span @click.stop="toggleCompleted(todo.id)">&check;</span>
        <span @click.stop="deleteTodo(todo.id)">&cross;</span>
    </div>
  </div>
</template>

<style scoped>
.complete{
    text-decoration: line-through;
}
</style>
