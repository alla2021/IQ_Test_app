<template>
    <div class="result">
        <div class="result__container">
            <img src="../../../assets/images/lightning-r.png" alt="lightning" class="result__img-right"/>
            <img src="../../../assets/images/lightning-l.png" alt="lightning" class="result__img-left"/>
            <h2 class="result__title">Ваш результат рассчитан:</h2>
            <div class="result__description">
                <span>Вы относитесь к 3%</span> респондентов, чей уровень интеллекта более чем
                на 15 пунктов отличается от среднего в большую или меньшую сторону!
            </div>
            <p class="result__subtitle">Скорее получите свой результат!</p>
            <div class="result__block">
                В целях защиты персональных данных результат теста, их подробная
                интерпретация и рекомендации доступны в виде голосового сообщения по
                звонку с вашего мобильного телефона
            </div>
            <div class="result__timer">
                Звоните скорее, запись доступна всего
                <span>{{ minutes }}:{{ seconds }}</span> минут
            </div>
            <div v-if="showButton" class="result__call" @click="viewData">
                <img src="../../../assets/images/icons/call.svg" alt="call">
                <span>Позвонить и прослушать результат</span>
            </div>
            <div v-if="fetchedData && showData">
                <RenderData v-if="fetchedData" :fetchedData="fetchedData" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import RenderData from "@/components/TestPage/RenderData.vue";
export default {
    name: "TestResult",
    components: {RenderData},
    props: {
        results: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            showData: false,
            showButton: true,
            fetchedData: null,
            storageData: null,
            time: 600,
            minutes: 10,
            seconds: 0,
            timer: null,
        };
    },
    mounted() {
        this.startTimer();
        this.fetchData();
    },
    methods: {
        fetchData: async function () {
            try {
                const response = await axios.get('https://swapi.dev/api/people/1/');
                this.fetchedData = response.data;
                console.log(this.fetchedData);
            } catch (error) {
                console.error(error);
            }
        },
        startTimer() {
            this.timer = setInterval(() => {
                this.time--;
                this.minutes = Math.floor(this.time / 60);
                this.seconds = this.time % 60;
                if (this.time === 0) {
                    clearInterval(this.timer);
                }
            }, 1000);
        },
        viewData: async function () {
            this.showData = true;
        },
    },
};
</script>

<style lang="scss">
    @import "@/components/TestPage/TestResult/test-result.scss";
</style>