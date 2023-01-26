<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import { store } from '../store.js'

onMounted(()=>{
    axios.get(store.backend_uri+"api/getnums").then(res=>{
    data.value = res.data
  })
  .catch(err=>{
    console.log(err)
  })
})

const data = ref(null)
</script>

<template>
    <a-spin v-if="data==null" tip="Loading..."/>
    <div v-else>
        <h1>Scam Numbers</h1>
    
        <h3 v-for="num in data">+{{ num.cc }} {{ num.number }}</h3>
    </div>
    
</template>