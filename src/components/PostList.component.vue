<template>
  <div class="posts-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
/**Single post component */
import SinglePost from "./SinglePost.component";
export default {
  //Accept the props post
  props: ["posts"],
  //Using the props inside the setup function
  setup(props) {
    console.log(props.posts);
  },
  //Components
  components: {
    SinglePost,
  },
};
</script>

<style></style>
