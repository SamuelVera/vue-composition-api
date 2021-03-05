<template>
  <div class="home">
    <h1>Home</h1>
    <p>Subject: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <button @click="handleClick">Click Me!</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  //Composition API function
  setup() {
    //Will run before all the lifecycle hooks (first to execute to setup all)
    //JS can be written
    let name = "Jvnko";
    let age = 20;

    const handleClick = () => {
      console.log("CLICKED ME!");
    };

    //Return data to use in the template
    //This values aren't reactive
    return {
      name, //This can be used in the template
      age, //This can be used in the template
      handleClick, //This can be used in the template
    };
  },
};
</script>
