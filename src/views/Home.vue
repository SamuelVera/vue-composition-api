<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="searchQuery" />
    <h4>Search term - {{ searchQuery }}</h4>
    <div v-for="name in matchingNames" :key="name">
      <p>{{ name }}</p>
    </div>
    <button @click="stopWatching">Stop watchers</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";
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

    //Watch is used to watch changes over a value
    //Setup a watch over the search query to execute code
    const searchWatcher = watch(
      searchQuery, //What wants to be watched
      () => {
        //Trigger on changes for watched value
        console.log(searchQuery.value);
      }
    );

    //Watch effect, runs everytime a value inside the calllback changes
    const effectWatcher = watchEffect(() => {
      //Callback
      //Can be used to get data from an API
      console.log("From effect", searchQuery.value);
    });

    //To stop the watching the functions need to be invoked
    const stopWatching = () => {
      effectWatcher();
      searchWatcher();
    };

    //To use in the template
    return { searchQuery, matchingNames, stopWatching };
  },
};
</script>
