<template>
    <div>
        <h1 v-text="data.name"></h1>
        <p>Height: {{ data.height }}</p>
        <p>Mass: {{ data.mass }}</p>
        <p>Hair color: {{ data.hair_color }}</p>
        <p>Skin color: {{ data.skin_color }}</p>
        <p>Eye color: {{ data.eye_color }}</p>
    </div>
</template>
<script>
export default {
    props: {
        fetchDataResult: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            data: null
        };
    },
    mounted() {
        this.data = this.fetchDataResult;
    }
};
</script>