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
import IQTestButton from "@/components/MainPage/TestButton.vue";
import ScrollLink from "@/components/MainPage/ScrollLink.vue";
</script>

<style scoped lang="scss">
    .intro {
        min-height: calc(100vh - 46px);
        background-image: url('../../assets/images/intro-bg.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &__subtitle{
            display: block;
            padding: 27px 0px;
            color: #FFFFFF;
            font-size: 18px;
            line-height: 24px;
            letter-spacing: 0.05em;
            font-family: "PT Serif", sans-serif;
            margin: 0 auto;
        }

        &__title {
            font-family: "Yeseva One", sans-serif;
            font-size: 30px;
            line-height: 35px;
            color:#FFC700;
            max-width: 252px;
            margin: 0 auto;
        }

        &__content{
            color: white;
            max-width: 286px;
            width: 100%;
            margin: 0 auto;
            padding: 22px 0 11px;
            font-weight: bold;
        }

        &__content span:first-child {
            font-family: "PT Serif", sans-serif;
        }

        &__content span:nth-child(2) {
            font-family: "Merriweather",sans-serif;
        }
    }
</style>