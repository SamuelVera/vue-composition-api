<template>
  <div v-if="error">
    <p>{{ error }}</p>
  </div>
  <div v-if="post" class="post">
    <h2>{{ post.title }}</h2>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
    <p class="pre">{{ post.body }}</p>
  </div>
</template>

<script>
/**Composable to get post */
import getPostById from "../composables/getPostById";

export default {
  props: ["id"],
  setup(props) {
    const { post, error, loadPost } = getPostById();

    loadPost(props.id);

    return {
      post,
      error,
    };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
