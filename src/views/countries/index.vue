<script>
import countries from "/src/components/countries/countries.vue";
import filters from "/src/components/countries/filter.vue";
import paginate from "/src/components/countries/paginate.vue";

export default {
  components: {
    countries,
    filters,
    paginate,
  },
};
</script>

<template>
  <div class="row h-100 w-100">
    <h1>API Countries</h1>
  </div>
  <br />
  <div class="row h-100 w-100">
    <div class="col-sm-3">
      <filters />
    </div>
    <div class="col-sm-9">
      <h2 class="text-center">Regions</h2>
      <countries />
      <br />
      <div class="cotainer d-flex align-items-center justify-content-center">
        <paginate />
      </div>
    </div>
  </div>
</template>
