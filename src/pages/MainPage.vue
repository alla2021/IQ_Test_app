<template>
    <AppHeader/>
    <main>
        <IntroApp />
        <BlockquoteBlock/>
        <InfoBlock/>
    </main>
    <AppFooter />
</template>

<script>
import AppFooter from "@/components/MainPage/FooterApp.vue";
import AppHeader from "@/components/HeaderApp.vue";
import IntroApp from "@/components/MainPage/IntroApp.vue";
import BlockquoteBlock from "@/components/MainPage/BlockquoteBlock.vue";
import InfoBlock from "@/components/MainPage/InfoBlock.vue";

export default {
    name: "MainPage",
    components: {InfoBlock, BlockquoteBlock, IntroApp, AppHeader, AppFooter}
}
</script>

<style scoped>

</style>