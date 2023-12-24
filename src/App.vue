<script setup>
import Header from "./components/Header.vue";
import { RouterView } from "vue-router"
</script>

<template>
    <div class="app">
        <Header />
        <GameCard />
        <RouterView/>
    </div>
</template>

<style scoped>
.app {
    width: 100%;
    min-height: 100vh;
    background: #272b30;
}
</style>