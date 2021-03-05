//Refs for reactivity
import { ref } from "@vue/reactivity";

const getPosts = () => {
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

  return {
    posts,
    error,
    loadPosts,
  };
};

export default getPosts;
