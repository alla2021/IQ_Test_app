<template>
    <ul>
        <li v-for="(data, index) in fetchDataItem" :key="index">
            <p>Height: {{ data.height }}</p>
            <p>Mass: {{ data.mass }}</p>
            <p>Hair color: {{ data.hair_color }}</p>
            <p>Skin color: {{ data.skin_color }}</p>
            <p>Eye color: {{ data.eye_color }}</p>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        fetchDataItem: {
            type: Array,
            required: true
        }
    },
    mounted() {
        console.log('Data:', this.fetchDataItem);
    }
};
</script>
