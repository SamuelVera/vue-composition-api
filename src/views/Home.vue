<template>
  <div class="home">
    <h1>Home</h1>
    <PostsList v-if="posts.length" :posts="posts" />
    <div v-else>
      <p>Loading...</p>
    </div>
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
//Posts list component
import PostsList from "../components/PostList.component";
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

    /**Posts */
    const posts = ref([]); //Initial value is empty
    /**Error tracker */
    const error = ref(null); //Initially null

    /**Load posts */
    const loadPosts = async () => {
      try {
        const res = await fetch("http://localhost:3000/posts");
        if (!res.ok) {
          //Check not OK
          throw Error("No data available!");
        }
        //Save posts
        posts.value = await res.json();
        //Reset error
        error.value = null;
      } catch (err) {
        console.log(err);
        error.value = err.message;
      }
    };

    //Execute posts fetching
    loadPosts();

    //To use in the template
    return {
      posts,
      error,
    };
  },
  components: {
    PostsList,
  },
};
</script>
