<template>
  <div class="home">
    <h1>Home</h1>
    <!--To use a ref from the Composition API use the variable name without binding-->
    <p ref="p">Subject: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <button @click="handleClick">Click Me!</button>
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
    let name = "Jvnko";
    let age = 20;

    //Refs creation (to use normal JS with this)
    const p = ref(null); //Initially its null

    const handleClick = () => {
      if (p.value !== null) {
        //Only allow when the ref is attached to the DOM element
        p.value.classList.add("test");
        p.value.textContent = "Good morning!";
      }
    };

    //Return data to use in the template
    //This values aren't reactive
    return {
      name, //This can be used in the template
      age, //This can be used in the template
      handleClick, //This can be used in the template
      p, //Return the ref to assing it to a DOM elment
    };
  },
};
</script>
