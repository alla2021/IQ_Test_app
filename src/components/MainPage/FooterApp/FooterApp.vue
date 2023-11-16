<template>
    <footer class="app-footer">
        <div class="container">
            <div class="app-footer__content">
            <img class="app-footer__img-right" src="../../../assets/images/lightning-r.png" alt="lightning">
            <img class="app-footer__img-left" src="../../../assets/images/lightning-l.png" alt="lightning">
            <div class="app-footer__description">Прохождение теста займет у вас не более <span class="text-yellow">12 минут</span>, а его <span class="text-bold">результаты</span> вы сможете <span class="text-yellow">использовать всю жизнь.</span>
            </div>
            <div class="app-footer__main-text">Профессиональная интерпретация и детально <span class="text-bold">проработанные рекомендации</span> позволят вам качественно <span class="text-bold">изменить все аспекты своей жизни</span>: от финансового до любовного.</div>
            <IQTestButton class="iq-test-button__test">пройти тест</IQTestButton>
        </div>
        <div class="app-footer__copyright">
            <span>&#169; 2019</span>
        </div>
        </div>
    </footer>
</template>

<script>
import {defineComponent} from "vue";
import IQTestButton from "@/components/MainPage/TestButton/TestButton.vue";

export default defineComponent({
    components: {IQTestButton}
})
</script>

<style scoped lang="scss">
    @import "@/components/MainPage/FooterApp/footer-app.scss";
</style>