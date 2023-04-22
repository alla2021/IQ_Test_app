<template>
    <div class="wrapper">
        <div class="progress-bar">
            <div class="progress" :style="{ width: progressPercent }"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        progress: {
            type: Number,
            required: true,
        },
        maxProgress: {
            type: Number,
            required: true,
        },
    },
    computed: {
        progressPercent() {
            return (this.progress / this.maxProgress) * 100 + '%';
        },
    },
};
</script>

<style scoped>
.wrapper{
    padding: 11px 31px;

}
.progress-bar {
    height: 11px;
    background-color: #979797;
    border-radius: 10px;
    overflow: hidden;
}

.progress {
    height: 100%;
    background-color: #3bde7c;
    border-radius: 10px;
    transition: width 0.5s ease-in-out;
}
</style>