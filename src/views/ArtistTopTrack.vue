<script setup>
import { useRoute } from 'vue-router'
import { TopTrack } from '@/api/spotify'
import { ref } from 'vue'

const response = ref([])
const { params } = useRoute()

async function init() {
   response.value = await TopTrack(params.id)
}

init()

</script>

<template>
    <div>
        hello
    </div>
</template>