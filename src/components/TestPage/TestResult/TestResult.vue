<template>
    <div class="result-block-block">
        <div class="result-block-block__container">
            <img src="@/assets/images/lightning-r.png" alt="lightning" class="result-block__img-right"/>
            <img src="@/assets/images/lightning-l.png" alt="lightning" class="result-block__img-left"/>
            <h2 class="result-block__title">Ваш результат рассчитан:</h2>
            <div class="result-block__description">
                <span>Вы относитесь к 3%</span> респондентов, чей уровень интеллекта более чем
                на 15 пунктов отличается от среднего в большую или меньшую сторону!
            </div>
            <p class="result-block__subtitle">Скорее получите свой результат!</p>
            <div class="result-block__block">
                В целях защиты персональных данных результат теста, их подробная
                интерпретация и рекомендации доступны в виде голосового сообщения по
                звонку с вашего мобильного телефона
            </div>
            <div class="result-block__timer">
                Звоните скорее, запись доступна всего
                <span>{{ minutes }}:{{ seconds }}</span> минут
            </div>
            <div class="result-block__call" @click="viewData">
                <img src="@/assets/images/icons/call.svg" alt="call">
                <span>Позвонить и прослушать результат</span>
            </div>
            <div v-if="fetchedData && showData" class="data-block">
                <p>Name: {{fetchedData.name}}</p>
                <p>Height: {{fetchedData.height}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "TestResult",
    // components: {RenderData},
    props: {
        results: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            showData: false,
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

    },
    methods: {
        fetchData: async function () {
            try {
                const response = await axios.get('https://swapi.dev/api/people/1/');
                this.fetchedData = response.data;
                console.log("1",this.fetchedData);
                this.showData = true;

            } catch (error) {
                console.error(error);
            }
        },
        viewData: async function () {
            await this.fetchData();
            console.log("DA",this.fetchedData);
            this.showData = true;

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

    },
};
</script>

<style lang="scss">
    @import "@/components/TestPage/TestResult/test-result.scss";
    .data-block{
        margin: 20px 0;
        background-color: #FFC700;
        font-size: 22px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
</style>