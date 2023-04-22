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
                    <li><a href="#home" @click="scrollToSection">Главная</a></li>
                    <li><a href="#info" @click="scrollToSection">Информация о тесте</a></li>
                    <li><router-link to="/test" @click="isOpen = false">Пройти тест</router-link></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        scrollToSection(event) {
            this.isOpen = false;
            event.preventDefault();
            const section = document.querySelector(event.target.hash);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.replaceState(null, null, event.target.href.replace(event.target.hash, ''));
            }
        },
    }
};
</script>

<style lang="scss">
    .navbar {
        width: 100%;
        height: 46px;
        background-color: #181818;
        padding: 0 15px;
        display: flex;
        align-items: center;

        &__container{
            display: flex;
            align-items: center;
        }

        &__menu-items{
            display: none;
            font-family: "Roboto",sans-serif;
            font-weight: 300;
            font-size: 16px;
            line-height: 22px;
            text-transform: uppercase;

            &.active {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                background-color: #000;
                position: absolute;
                top: 46px;
                left: 0;
                width: 100%;
                height: 100vh;
                padding: 110px 0 0 23px;
                z-index: 20;

                li {
                    margin-bottom: 26px;
                }

                li:hover{
                    color: #FFC700;
                }
            }
        }
    }

    .burger-menu {
        display: block;
        width: 30px;
        height: 20px;
        position: relative;
        cursor: pointer;
        background-color: inherit;

        &__item {
            display: block;
            position: absolute;
            height: 4px;
            width: 24px;
            background-color: #696969;
            border-radius: 4px;
            opacity: 1;
            left: 0;
        }

        &__item:first-child {
            top: 0;
        }

        &__item:nth-child(2) {
            top: 8px;
        }

        &__item:last-child {
            bottom: 0;
        }

        &.active {
            display: none;
        }
    }

    .close-menu {
        padding-right: 13px;
        position: absolute;
        right: 10px;
        width: 26px;
        height: 26px;
        background-color: transparent;
        border: none;
        cursor: pointer;

        & .close-line {
            position: absolute;
            height: 2px;
            width: 100%;
            background-color: #FFC700;
            transform: rotate(45deg);
            transform-origin: center;
            transition: transform 0.3s ease-in-out;

            &:first-child {
                transform: rotate(-45deg);
            }
        }
    }
</style>