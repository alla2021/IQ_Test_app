<template>
    <ul>
        <li v-for="(data, index) in fetchedData" :key="index">
            <p>Height: {{ data.height }}</p>
<!--            <p>Mass: {{ data.mass }}</p>-->
<!--            <p>Hair color: {{ data.hair_color }}</p>-->
<!--            <p>Skin color: {{ data.skin_color }}</p>-->
<!--            <p>Eye color: {{ data.eye_color }}</p>-->
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        fetchedData: {
            type: Array,
            required: true
        }
    },
    mounted() {
        console.log('Data:', this.fetchedData);
    }
};
</script>
