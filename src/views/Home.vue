<template>
  <div class="home">
    <h1>Home</h1>
    <!--To use a ref from the Composition API use the variable name without binding Ex: ref="p"-->
    <!--No need to use ref.value inside the template-->
    <p>Subject: {{ name }}</p>
    <p>Age: {{ age }}</p>

    <br />
    <button @click="handleClick">Click Me!</button>

    <br />
    <button @click="age++">Add age</button>

    <br />
    <button @click="age--">Reduce age</button>

    <br />
    <!--2-way data binding with ref values-->
    <input type="text" v-model="name" />
  </div>
</template>

<script>
/**Imports ref from vue to use */
import { ref } from "vue";
export default {
  name: "Home",
  //Composition API function
  setup() {
    //Will run before all the lifecycle hooks (first to execute to setup all)

    //JS can be written
    ////This values aren't reactive
    //let name = "Jvnko";
    //let age = 20;

    //Refs can be used to apply reactivity to values built in setup
    //This values are reactive
    const name = ref("Jvnko");
    const age = ref(21);

    //Refs creation (to use normal JS with this)
    //const p = ref(null); //Initially its null

    const handleClick = () => {
      //Wait for DOM refs to be attached

      // if (p.value !== null) {
      //   //Only allow when the ref is attached to the DOM element
      //   p.value.classList.add("test");
      //   p.value.textContent = "Good morning!";
      // }

      //Because refs are reactive this will update the template values
      name.value = "Furuta";
      age.value = 20;
    };

    //Return data to use in the template
    return {
      name, //This can be used in the template
      age, //This can be used in the template
      handleClick, //This can be used in the template
      //p, //Return the ref to assing it to a DOM elment
    };
  },
};
</script>
