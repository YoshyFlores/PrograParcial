<template>
  <!-- <h1>Countries</h1>
   //{{ data }}//
  {{ loadData.map((d) => d.region) }} -->

  <countriesView :countriesData="loadData" />
</template>

<script>
import requests from "./requests";
import countriesView from "/src/views/countries/countriesViews.vue";
export default {
  data() {
    return {
      data: [],
      firstIndex: 0,
      lastIndex: 0,
      sliceData: [],
      countriesData: [],
    };
  },
  components: {
    countriesView,
  },
  methods: {
    async getAllCountries() {
      const response = await fetch(requests.getAllCountries);
      this.data = await response.json();
      this.total = this.data.length;
    },
    async getByRegion() {
      const response = await fetch(
        requests.getByRegion(this.$store.state.currentRegion)
      );
      this.data = await response.json();
      this.total = this.data.length;
    },
  },
  // created() {
  //   this.getAllCountries(), this.getByRegion();
  // },
  computed: {
    loadData() {
      if (this.$store.state.currentRegion == "All") {
        this.getAllCountries();
        this.lastIndex = this.$store.state.currentPage * 10;
        this.firstIndex = this.lastIndex - 10;
        this.sliceData = this.data.slice(this.firstIndex, this.lastIndex);
        this.countriesData = this.sliceData.map((d) => d.name);
      } else {
        this.getByRegion();
        this.lastIndex = this.$store.state.currentPage * 10;
        this.firstIndex = this.lastIndex - 10;
        this.sliceData = this.data.slice(this.firstIndex, this.lastIndex);
        this.countriesData = this.sliceData.map((d) => d.name);
        }
      // return this.sliceData;
        return this.countriesData;
    },
    total: {
        get() {
        return this.$store.state.total;
        },
        set(value) {
        this.$store.commit("SET_TOTAL", value);
        },
    },
    },
};
</script>
