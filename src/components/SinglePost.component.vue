<template>
  <div class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ snippet }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup(props) {
    //Compute data from props
    /**Snippet of the content */
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + "...";
    });

    return {
      snippet,
    };
  },
};
</script>

<style></style>
