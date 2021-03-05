<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="searchQuery" />
    <h4>Search term - {{ searchQuery }}</h4>
    <div v-for="name in matchingNames" :key="name">
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
/**
 * Reactive cons:
 * - Primitive types can't be made reactive
 */
export default {
  name: "Home",
  //Composition API function
  setup() {
    //Will run before all the lifecycle hooks (first to execute to setup all)
    //JS can be written

    /**Names array */
    const names = ref(["Jvnko", "Ecifircas", "Sheldon", "Shaun"]);
    /**Search query */
    const searchQuery = ref("");

    /**Computed for querying */
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(searchQuery.value));
    });
    //To use in the template
    return { searchQuery, matchingNames };
  },
};
</script>
