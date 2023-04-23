<template>
    <section class="loader-page">
        <h4 class="loader-page__title">Обработка результатов</h4>
        <div class="loader">
            <div class="loader__spin"></div>
        </div>
        <p class="loader-page__subtitle">Определение стиля мышления...................................................................</p>
    </section>
</template>

<script>
export default {
    name: "LoaderPage"
}
</script>

<style scoped lang="scss">
 @import "@/components/TestPage/LoaderPage/loader-page.scss";
</style>