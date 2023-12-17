<template>
    <div>
        <img 
            src = "https://cf3.ppt-online.org/files3/slide/a/a0AXikHsNtxKoTGVS5m8JjuBC76v1enb2rf43d/slide-2.jpg"
        />
        <h1>Game</h1>
        <p>text text text text text text text text text 
        text text text text
        text text text
        text text text text text text text text text text </p>
        <nav>
            <i class="fas fa-desktop"></i>
            <h4>Windows</h4>
        </nav>
        <nav>
            <i class="far fa-clock"></i>
            <h4>date</h4>
        </nav>
        <router-link to='/'>Подробнее</router-link>
    </div>
</template>

<style scoped>
div {
    width: 500px;
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