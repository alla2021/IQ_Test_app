<template>
    <ul class="row">
        <li v-for="(data, index) in fetchedData" :key="index">
            <p>Name: {{ data.name }}</p>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        fetchedData: {
            type: Object,
            required: true
        }
    },
};
</script>

<style scoped>
    .row{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
</style>