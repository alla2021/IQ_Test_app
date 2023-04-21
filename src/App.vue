<template>
    <router-view></router-view>
</template>

<script>

export default {
    name: 'App',
    components: {
    },
};
</script>

<style lang="scss">
    @import "@/assets/scss/main.scss";
    #app {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: #2c3e50;
    }
</style>
