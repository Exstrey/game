<script setup>
defineProps({
    game: {
        type: Object,
        default: {
            id: 1,
            title: "Game",
            short_description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium",
            release_date: "11.02.2003",
            platform: "Windows",
            thumbnail:
                "https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg",
        },
    },
});
</script>


<template>
    <div>
        <img :src ="game.thumbnail" />
        <h1>{{ game.title }}</h1>
        <p>
            {{ game.short_description }}
        </p>
        <nav>
            <i class="fas fa-desktop"></i>
            <h4>{{ game.platform }}</h4>
        </nav>
        <nav>
            <i class="far fa-clock"></i>
            <h4>{{ game.release_date }}</h4>
        </nav>
        <router-link :to="{ name: 'detail', params: { id: game.id} }"
            >Подробнее</router-link
        >
    </div>
</template>

<style scoped>
div {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background: #32383e;
    color: #aaa;
    border-radius: 10px;
}
img {
    width: 500px;
    aspect-ratio: 16/9;
    border-radius: 10px;
}
h1 {
    font-size: 30px;
    margin-top: 20px;
}
p {
    font-size: 20px;
    margin-top: 20px;
    line-height: 120%; 
}
nav {
    display: flex;
    margin-top: 20px;
}
h4,
i {
    font-size: 20px;
    margin-right: 10px;
}
a {
    padding: 10px 20px;
    margin-left: auto;
    font-size: 24px;
    background: #4799eb;
    color: white;
    border-radius: 10px;
    text-decoration: none;
}
</style>