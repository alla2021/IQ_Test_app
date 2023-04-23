<template>
    <router-link to="/test" class="iq-test-button button button--test" @click="onClick">
        <slot></slot>
    </router-link>
</template>
<script>
export default {
    name: 'IQTestButton',
    props: {
        color: {
            type: String,
            default: '#FFC700'
        },
        hover: {
            type: String,
            default: ''
        }
    },
    methods: {
        onClick() {
            this.$emit('click');
        },
    },
};
</script>
<style scoped lang="scss">
    @import "@/components/MainPage/TestButton/test-button.scss";
</style>