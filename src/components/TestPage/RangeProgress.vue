<template>
    <div class="progress-bar">
        <progress  :max="maxProgress" :value="progress"></progress>
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
};
</script>

<style scoped lang="scss">
    .progress-bar {
        padding: 17px 30px;

    }

    .progress-bar progress {
        width: 100%;
        //background-color: #3BDE7C;
    }
</style>
