<template>
    <a :href="`#${to}`" @click.prevent="scrollTo" class="scroll">
        <slot></slot>
        <img src="../../../assets/images/icons/arrow-scroll.svg" alt="Scroll arrow" class="scroll__img" />
        <div class="scroll__text">{{ text }}</div>
    </a>
</template>

<script>
export default {
    name: 'ScrollLink',
    props: {
        to: {
            type: String,
            required: true,
        },
        offset: {
            type: Number,
            default: 0,
        },
        text:{
            type: String,
            default: "",
        }
    },
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        scrollTo() {
            const targetEl = document.getElementById(this.to);

            if (targetEl) {
                window.scrollTo({
                    top: targetEl.getBoundingClientRect().top + window.pageYOffset - this.offset,
                    behavior: 'smooth'
                });
            }

            this.isActive = true;
        },
        checkIfActive() {
            const targetEl = document.getElementById(this.to);

            if (targetEl) {
                const top = targetEl.getBoundingClientRect().top + window.pageYOffset - this.offset;

                this.isActive = top <= window.innerHeight / 2 && top >= -targetEl.offsetHeight / 2;
            }
        },
    },
    mounted() {
        window.addEventListener('scroll', this.checkIfActive);
        this.checkIfActive();
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.checkIfActive);
    },
};
</script>

<style scoped lang="scss">
@import "@/components/MainPage/ScrollLink/scroll-link.scss";
</style>