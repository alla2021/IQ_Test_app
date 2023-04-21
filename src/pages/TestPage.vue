<template>
    <div>
        <TasksList/>
    </div>
</template>

<script>
import data from "@/data/data.js";
import TasksList from "@/components/TestPage/TasksList.vue";

export default {
    data() {
        return {
            currentStep: 0,
            quiz: data,
            resultVisible: false,
            time: 500,
        };
    },
    components: {TasksList},
    methods: {
        showResult() {
            this.resultVisible = true;
        },
    },
};
</script>

<style lang="scss">

</style>