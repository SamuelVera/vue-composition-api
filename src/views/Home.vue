<template>
  <div class="home">
    <h1>Home</h1>
    <!--To use a ref from the Composition API use the variable name without binding Ex: ref="p"-->
    <!--No need to use ref.value inside the template-->
    <h2>With Refs:</h2>
    <p>Dweller: {{ dweller.name }}</p>
    <p>Age: {{ dweller.age }}</p>

    <button @click="updateDweller">Update Dweller</button>

    <h2>With Reactive:</h2>
    <p>Dweller: {{ secondDweller.name }}</p>
    <p>Age: {{ secondDweller.age }}</p>

    <button @click="updateSecondDweller">Update Second Dweller</button>
  </div>
</template>

<script>
/**Imports ref from vue to use */
import { ref, reactive } from "vue";
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

    //Refs can be used to apply reactivity to values built in setup
    //This values are reactive
    const dweller = ref({
      name: "Jvnko",
      age: 20,
    });

    //Reactive can be used to apply reactivity to values built in setup
    const secondDweller = reactive({
      name: "Furuta",
      age: 22,
    });

    /**Update dweller */
    const updateDweller = () => {
      //Because this is a ref value needs to be used
      dweller.value.age = 21;
    };

    /**Update second dweller */
    const updateSecondDweller = () => {
      //Reactive uses direct access
      secondDweller.age = 20;
    };

    //Return data to use in the template
    return {
      dweller,
      secondDweller,
      updateDweller,
      updateSecondDweller,
    };
  },
};
</script>
