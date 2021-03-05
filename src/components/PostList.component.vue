<template>
  <div class="posts-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
//Imported lifecycle hooks
import { onMounted, onUnmounted, onUpdated } from "vue";
/**Single post component */
import SinglePost from "./SinglePost.component";
export default {
  //Accept the props post
  props: ["posts"],
  //Using the props inside the setup function
  setup() {
    //Import the lifecycle hooks from Composition API
    //Compositions API and Options API don't override each other
    //When component is mounted into the DOM
    onMounted(() => {
      console.log("Component mounted");
    });
    //When component is unmounted into the DOM
    onUnmounted(() => {
      console.log("Component unmounted");
    });
    //When component is updated in the DOM
    onUpdated(() => {
      console.log("Component updated");
    });
  },
  //Components
  components: {
    SinglePost,
  },
};
</script>

<style></style>
