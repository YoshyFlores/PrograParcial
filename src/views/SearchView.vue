<script setup>
import { ref } from "vue";

const searchValue = ref("");
const resultsLength = ref(-1);
const countryInfo = ref({});

async function getCountryInfo(code) {
    try {
        const response = await fetch(
            `https://restcountries.com/v3.1/alpha/${code}`
        );
        const data = await response.json();
        resultsLength.value = data?.length || 0;
        countryInfo.value = data[0] || {};
    } catch (error) {
        resultsLength.value = 0;
        countryInfo.value = {};
        console.error(error);
    }
}
// @input="searchCountry"

function searchCountry() {
    getCountryInfo(searchValue.value);
}
</script>

<template>
    <main>
        <form @submit.prevent="searchCountry">
            <input style="padding: 12px 16px; box-sizing: border-box" placeholder="Search by code..." v-model="searchValue"
                required />
            <button style="padding: 12px 16px; box-sizing: border-box" type="submit">
                Search
            </button>
        </form>

        <p v-if="resultsLength === 0">
            No se encontro el pais, intenta nuevamente.
        </p>

        <div v-if="resultsLength > 0">
            <img :src="countryInfo.flags.png" class="image" alt="Image of the country" />
            <div>
                <h2>{{ countryInfo.name.official }}</h2>
                <h3>{{ countryInfo.flag }} {{ countryInfo.name.common }}</h3>
                <p v-if="countryInfo.flags.alt">
                    Flag info: {{ countryInfo.flags.alt }}
                </p>
                <p v-else>No hay descripcion del pais.</p>
            </div>
        </div>
    </main>
</template>

<style scoped>
.image {
    max-width: 200px;
    aspect-ratio: 1 / 1;
    object-fit: contain;
    box-sizing: border-box;
}
</style>
