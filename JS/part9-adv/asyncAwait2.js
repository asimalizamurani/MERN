function fetchPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post Data Fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment Data Fetched successfully");
    }, 3000);
  });
}

async function getBlogData() {
    try {
        console.log("Fetching blog data");
        // const blogData = await fetchPostData()
        // const commentData = await fetchCommentData()
 
        // it takes an array as a parameter
        const [blogData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()])

        console.log(blogData)
        console.log(commentData)
        console.log("fetch completed")
    } catch (error) {
        console.log("Error fetching blog data", error)
    }
}

getBlogData()