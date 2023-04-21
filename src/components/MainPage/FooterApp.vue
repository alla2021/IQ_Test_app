<template>
    <footer class="app-footer">
        <div class="app-footer__content">
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
    position: relative;

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("../../assets/images/lightning-l.png");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        z-index: -1;
    }

    &__content {
        padding: 10px 5px;
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