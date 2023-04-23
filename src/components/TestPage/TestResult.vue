<template>
    <div class="result">
        <div class="result__container">
            <img src="@/assets/images/lightning-r.png" alt="lightning" class="result__img-right"/>
            <img src="@/assets/images/lightning-l.png" alt="lightning" class="result__img-left"/>
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
            <button type="button" class="result__call" @click="viewData">
                <img src="@/assets/images/icons/call.svg" alt="call">
                <span>Позвонить и прослушать результат</span>
            </button>
            <div v-if="showData">
                <h2>Hi</h2>
<!--                <RenderData :fetchedData="fetchedData" />-->
            </div>
        </div>
    </div>
</template>

<script>
// import RenderData from "@/components/TestPage/RenderData.vue";
import axios from "axios";
export default {
    name: "TestResult",
    components:{
        // RenderData
    },
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
            isData: null,
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
        viewData() {
            console.log('ccclick')
            this.showData = true;
            this.fetchData();
        },
    },
};
</script>

<style scoped lang="scss">
.result {
    height: calc(100vh - 46px - 30px);
    background-image: url('../../assets/images/rain_bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    display: flex;
    align-items: start;
    justify-content: center;
    color: #fff;
    font-family: "PT Serif", sans-serif;
    width: 100%;
    z-index:-3;
    position: relative;
    overflow: hidden;

    &__img-left {
      position: absolute;
        bottom: 130px;
        left: -20px;
        transform: rotate(-30.15deg);
        z-index: -1;
    }

    &__img-right {
        position: absolute;
        bottom: 120px;
        right:  -30px;
        transform: rotate(30.15deg);
        z-index: -1;
    }

    &__title{
        text-transform: uppercase;
        font-weight: 700;
        font-size: 15px;
        line-height: 16px;
        margin:18px 0 13px;
    }

    &__description{
        font-size: 14px;
        line-height: 18px;
        padding-bottom: 22px;
        margin: 0 auto;
        width: 268px;

        span{
            text-decoration: underline;
        }
    }

    &__block{
        margin:0 auto;
        padding: 15px 11px 10px;
        font-family: "Roboto", sans-serif;
        font-size: 8px;
        line-height: 14px;
        letter-spacing: 2px;
        width: 256px;
        border-radius: 5px;
        background-color: #1c2741;
    }

    &__subtitle{
        color:#3BDE7C;
        text-transform: uppercase;
        font-weight: bold;
        line-height: 22px;
        font-size: 18px;
        letter-spacing: 0.1em;
        padding-bottom: 12px;
        max-width: 268px;
        margin: 0 auto;
    }

    &__timer{
        color:#3BDE7C;
        letter-spacing: 0.1em;
        font-size: 11px;
        line-height: 30px;
        padding-bottom: 6px;
        max-width: 240px;
        margin: 0 auto;

        span {
            font-size: 20px;
        }
    }

    &__call{
        margin: 0 auto;
        background-color: #EB1B00;
        color: #fff;
        font-family: "Roboto",sans-serif;
        font-weight: 800;
        max-width: 290px;
        width: 100%;
        display: flex;
        padding: 31px 15px 30px;
        border-radius: 5px;
    }

}
</style>