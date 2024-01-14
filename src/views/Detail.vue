<script setup>
import * as api from "../api/api.js";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

const detail = ref()
const route = useRoute()

onMounted(async () => {
    detail.value = await api.DetailGame(route.params.id);
    console.log("route", route);
});
</script>

<template>
    <section v-if="detail">
        <div>
            <nav>
                <img :src="scren.image"
                v-for="(scren,index) in detail.screenshots"
                :key="index"
                />
            </nav>
            <h1>{{detail.title}}</h1>
            <p>{{detail.description}}</p>
        </div>
    </section>
</template>

<style scoped>
div {
    padding:20px;
}
nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    grid-gap: 50px;
}
img {
    width: 40%;
    aspect-ratio: 16/9;
}
p {
    font-size: 24px;
    margin-top: 20px;
    color: #aaa;
    text-align: center;
}

</style>