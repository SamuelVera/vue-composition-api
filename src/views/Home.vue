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
//Posts list component
import PostsList from "../components/PostList.component";
//Import the composables
import getPosts from "../composables/getPosts";
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

    //Execute the composable
    const { posts, error, loadPosts } = getPosts();

    //Execute the load
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
