<template>
<section class="info-block" id="info">
    <div class="info-block__wrapper">
        <div class="info-block__text">
            Также по результатам теста
            <span class="text-strong">вы получите</span> подробные <span class="text-strong">советы</span> по определению наиболее перспективной <span class="">для вашего типа</span> <span class="text-bold">интеллекта</span> <span class="text-strong">сферы деятельности,</span>
            которая принесет вам скорейший финансовый результат.
        </div>
        <img src="../../../assets/images/img-brain.png" alt="brain" class="info-block__img">
        <IQTestButton>пройти тест</IQTestButton>
    </div>
</section>
</template>

<script>
import {defineComponent} from "vue";
import IQTestButton from "@/components/MainPage/TestButton/TestButton.vue";

export default defineComponent({
    components: {
        IQTestButton
    }
})
</script>

<style scoped lang="scss">
    @import "@/components/MainPage/InfoBlock/info-block.scss";
</style>