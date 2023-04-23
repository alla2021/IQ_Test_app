<template>
    <div class="intro" id="home">
        <div class="intro__row">
            <span class="intro__subtitle">Пройдите точный и быстрый</span>
            <h1 class="intro__title">тест на определение IQ</h1>
        </div>
        <div class="intro__row">
            <IQTestButton @click="onButtonClick">пройти тест</IQTestButton>
            <div class="intro__content">
            <span class="text-yellow">и получите рекомендации
                по развитию своего интеллекта</span>
                <span class="text-bold"> и улучшению финансового благосостояния и личной жизни</span>
            </div>
            <ScrollLink to="info" text="Подробнее"/>
        </div>
    </div>
</template>

<script setup>
import IQTestButton from "@/components/MainPage/TestButton/TestButton.vue";
import ScrollLink from "@/components/MainPage/ScrollLink/ScrollLink.vue";
</script>

<style scoped lang="scss">
    @import "@/components/MainPage/IntroApp/intro-app.scss";
</style>