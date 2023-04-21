<template>
    <footer class="app-footer">
        <div class="app-footer__content">
            <img class="app-footer__img-right" src="../../assets/images/lightning-r.png" alt="lightning">
            <img class="app-footer__img-left" src="../../assets/images/lightning-l.png" alt="lightning">
            <div class="app-footer__description">Прохождение теста займет у вас не более <span class="text-yellow">12 минут</span>, а его <span class="text-bold">результаты</span> вы сможете <span class="text-yellow">использовать всю жизнь.</span>
            </div>
            <div class="app-footer__main-text">Профессиональная интерпретация и детально <span class="text-bold">проработанные рекомендации</span> позволят вам качественно <span class="text-bold">изменить все аспекты своей жизни</span>: от финансового до любовного.</div>
            <IQTestButton class="iq-test-button__test">пройти тест</IQTestButton>
        </div>
        <div class="app-footer__copyright">
            <span>&#169; 2019</span>
        </div>
    </footer>
</template>

<script>
import {defineComponent} from "vue";
import IQTestButton from "@/components/MainPage/TestButton.vue";

export default defineComponent({
    components: {IQTestButton}
})
</script>

<style scoped lang="scss">
.app-footer {
    min-height: 406px;
    background-image: url('../../assets/images/rain_bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__content {
        padding: 10px 5px;
        position: relative;
    }

    &__img-left {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 3;
        transform: rotate(-31.55deg);
    }

    &__img-right {
        position: absolute;
        top: 0;
        right:  0;
        z-index: 3;
        transform: rotate(31.55deg);
    }

    &__description{
        text-align: left;
        color: white;
        max-width: 262px;
        font-size: 15px;
        font-family: Merriweather,sans-serif;
        line-height: 20px;
        font-weight: 400;
        letter-spacing: 0.05em;
        margin: 55px 51px 0 14px;
    }

    &__main-text {
        font-family: "Merriweather",sans-serif;
        line-height: 23px;
        letter-spacing: 0.05em;
        margin: 20px 12px 33px;
        padding: 29px 15px 33px;
        z-index: 5;
        background-color: fade-out(#f3f3f2, 0.2);
        border-radius: 1.25rem;

    }

    &__copyright {
        color: #FFFFFF;
        opacity: 0.5;
        font-size: 10px;
        line-height: 23px;
        letter-spacing: 0.05em;
        padding-bottom: 13px;
    }
}

</style>