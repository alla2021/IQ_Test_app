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
import AppFooter from "@/components/MainPage/FooterApp/FooterApp.vue";
import AppHeader from "@/components/HeaderApp/HeaderApp.vue";
import IntroApp from "@/components/MainPage/IntroApp/IntroApp.vue";
import BlockquoteBlock from "@/components/MainPage/BlockquoteBlock/BlockquoteBlock.vue";
import InfoBlock from "@/components/MainPage/InfoBlock/InfoBlock.vue";

export default {
    name: "MainPage",
    components: {
        InfoBlock,
        BlockquoteBlock,
        IntroApp,
        AppHeader,
        AppFooter
    }
}
</script>


<style scoped lang="scss">

</style>