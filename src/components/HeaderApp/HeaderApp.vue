<template>
    <header>
        <nav class="navbar">
            <div class="navbar__container nav-container">
                <button class="burger-menu" @click="isOpen = true" :class="{ active: isOpen }">
                    <span class="burger-menu__item"></span>
                    <span class="burger-menu__item"></span>
                    <span class="burger-menu__item"></span>
                </button>
                <button class="close-menu" v-if="isOpen" @click="isOpen = false">
                    <span class="close-line"></span>
                    <span class="close-line"></span>
                </button>
                <ul class="navbar__menu-items" :class="{ active: isOpen }">
                    <li><router-link to="/" @click="scrollToSection">Главная</router-link></li>
                    <li><router-link :to="{ path: '/', hash: '#info' }" @click="scrollToSection">Информация о тесте</router-link></li>
                    <li><router-link to="/test" @click="isOpen = false">Пройти тест</router-link></li>
                </ul>
                <div v-if="isTestPage && !isOpen" class="logo-container">
                    <img src="../../assets/images/logo.png" alt="Logo">
                    <h2>{{ titleText }}</h2>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            titleText: "Тест на определение IQ",
            isTestResult:false,
        };
    },
    computed: {
        isTestPage() {
            return this.$route.path === '/test';
        }
    },
    async mounted() {
        await this.$nextTick();
        const testResultComponent = document.querySelector(".result");
        if (testResultComponent) {
            this.titleText = "Готово!";
        }
    },
    methods: {
        scrollToSection(event) {
            const path = event.target.hash;
            if (path && path.startsWith("#")) {
                event.preventDefault();
                this.isOpen = false;
                const section = document.querySelector(path);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" });
                    history.replaceState(null, null, path);
                } else if (this.$route.path === "/test") {
                    this.$router.push({ path: "/" }).finally(() => {
                        const targetSection = document.querySelector(path);
                        if (targetSection) {
                            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
                            history.replaceState(null, null, path);
                        }
                    });
                }
            } else {
                this.isOpen = false;
            }
        },
    }
}
</script>

<style lang="scss">
    @import "@/components/HeaderApp/header-app.scss";
</style>