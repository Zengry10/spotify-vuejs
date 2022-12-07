<script setup lang="ts">
import { ref } from 'vue';
import { album } from '@/api/spotify';

const response = ref([]);

async function init() {
  response.value = await album('Flume', 'artist')
}

init()
</script>

<template>
  <main class="p-16">
   <pre>{{ response }}</pre>
  </main>
</template>
