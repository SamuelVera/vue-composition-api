<template>
  <div class="home">
    <h1>Home</h1>
    <PostsList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Pop post</button>
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
    const posts = ref([
      {
        title: "Welcome to the blog",
        body:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maiores fugiat architecto fugit mollitia aliquid obcaecati provident, recusandae iusto eligendi culpa deserunt repellendus fuga tenetur adipisci reiciendis quia doloribus perspiciatis sunt optio. Amet totam pariatur est minus velit? Animi, labore nisi repudiandae hic excepturi mollitia quae quos similique consectetur vel dignissimos magnam, saepe cupiditate eius! Nam delectus iste pariatur est labore accusantium vitae commodi quis impedit, minima sit, expedita, harum maiores animi cumque quas ex quam blanditiis omnis perferendis iure facere cum nostrum facilis. Libero error sunt enim omnis earum odio. Inventore et aliquam eum aut neque quis, minima repellat!",
        id: 1,
      },
      {
        title: "Top 5 CSS tips",
        body:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maiores fugiat architecto fugit mollitia aliquid obcaecati provident, recusandae iusto eligendi culpa deserunt repellendus fuga tenetur adipisci reiciendis quia doloribus perspiciatis sunt optio. Amet totam pariatur est minus velit? Animi, labore nisi repudiandae hic excepturi mollitia quae quos similique consectetur vel dignissimos magnam, saepe cupiditate eius! Nam delectus iste pariatur est labore accusantium vitae commodi quis impedit, minima sit, expedita, harum maiores animi cumque quas ex quam blanditiis omnis perferendis iure facere cum nostrum facilis. Libero error sunt enim omnis earum odio. Inventore et aliquam eum aut neque quis, minima repellat!",
        id: 2,
      },
    ]);

    /**Show posts or not */
    const showPosts = ref(true);

    //To use in the template
    return {
      posts,
      showPosts,
    };
  },
  components: {
    PostsList,
  },
};
</script>
