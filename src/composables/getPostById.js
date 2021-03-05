import { ref } from "@vue/reactivity";

const getPostById = () => {
  /**Post */
  const post = ref(null);
  /**Error in call */
  const error = ref(null);

  /**Load the post */
  const loadPost = async (id) => {
    try {
      const data = await fetch(`http://localhost:3000/posts/${id}`);
      if (!data.ok) {
        throw Error("Post doesn't exist");
      }
      post.value = await data.json();
      error.value = null;
    } catch (err) {
      error.value = err.message;
      console.log(err);
    }
  };

  return {
    post,
    error,
    loadPost,
  };
};

export default getPostById;
