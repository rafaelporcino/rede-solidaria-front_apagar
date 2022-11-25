<template>
  <div class="home">
    <header class="home__header">
      <img src="../assets/logo.png" />
      <div class="home__filters">
        <div class="home__filter-wrapper">
          <input type="checkbox" id="filter1" name="filter1" value="filter1" />
          <label for="filter1"> Agasalhos</label>
        </div>
        <div class="home__filter-wrapper">
          <input type="checkbox" id="filter2" name="filter2" value="filter2" />
          <label for="filter2"> Alimentos</label>
        </div>
        <div class="home__filter-wrapper">
          <input type="checkbox" id="filter3" name="filter3" value="filter3" />
          <label for="filter3"> Medicamentos</label>
        </div>
        <div class="home__filter-wrapper">
          <input type="checkbox" id="filter4" name="filter4" value="filter4" />
          <label for="filter4"> Eletrônicos</label>
        </div>
        <div class="home__filter-wrapper">
          <input type="checkbox" id="all" name="all" value="all" />
          <label for="all">Todos</label>
        </div>
      </div>
    </header>

    <div class="maps-content">
      <div class="first-item" v-for="(item, index) in locations" :key="index">
        <p>Id<span>{{ item.id }}</span></p>
        <p>Cidade<span>{{ item.cidade }}</span></p>
        <p>Logradouro<span>{{ item.logradouro }}</span></p>
        <p>Latitude<span>{{ item.latitude }}</span></p>
        <p>Longitude<span>{{ item.longitude }}</span></p>
      </div>
    </div>

    <footer-component />
  </div>
</template>

<script>
// services
import { getLocations } from "@/services";

// components
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "HomeView",
  data() {
    return {
      locations: [],
    };
  },
  components: {
    FooterComponent,
  },
  mounted() {
    this.fetchLocations();
  },
  methods: {
    changeFilter() { },

    fetchLocations() {
      getLocations().then(res => {
        this.locations = res?.data;
      });
    },
  },
};
</script>

<style scoped>
.home {}

.home__header {
  justify-content: center;
  align-items: center;
  display: flex;
  width: 90%;
}

.home__filters {
  display: flex;
}

@media screen and (max-width: 768px) {
  .home__filters {
    flex-direction: column;
    margin-left: 40px;
  }
}

.home__filter-wrapper {
  text-align: left;
}

.home__filters input {
  margin: 0 10px 0 15px;
}

.lupa {
  position: absolute;
  width: 16px;
  height: 16px;
  top: 15px;
  left: 15px;
}

.maps-content {
  height: 700px;
  width: 100%;
  background-color: #ccc;
}

.maps-content .first-item:first-child {
  padding-top: 150px;
  padding-bottom: 40px;
}

.maps-content span {
  padding-left: 10px;
}
</style>
