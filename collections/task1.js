const DB = {
  collections: {
    posts: {
      posts_1: {
        name: 'Post 1',
        text: 'Some text 1'
      },
      posts_2: {
        name: 'Post 2',
        text: 'Some text 2'
      }
    },
    comments: {
      comments_1: {
        postId: 'post_1',
        text: 'Comment 1'
      },
      comments_2: {
        postId: 'post_1',
        text: 'Comment 2'
     }
    } 
  }
};
  
const useCollection = (data) => {

  
    let postItems = [];
    let commentsItems =[];
    let posts = DB.collections.posts;
    let comments = DB.collections.comments;
    
    for(key in posts) {
      if(key === data) {
        let x = {
          id: data,
          name: posts[key].name,
          text: posts[key].text
        }
        console.log(x);
      }
    }


  let okPosts =[]
  for (key in posts) {
  okPosts.push(post = {
    name: posts[key].name,
    text: posts[key].text,
  });
 }
  let okComments =[]
  for (key in comments) {
  okComments.push(comment = {
    postId: comments[key].postId,
    text: comments[key].text,
  })
 }

for(i=0; i<okPosts.length; i++) {
  postItems.push(
    postItem = {
      id: `Posts_${i+1}`,
      name: okPosts[i].name,
      text: okPosts[i].text,
    }
  )
}

for(i=0; i<okComments.length; i++) {
  commentsItems.push(
    commentsItem = {
      postId: `Post_${i+1}`,
      text: okComments[i].text,
    }
  )
}
  if(data === DB) {
    let what = "what you want?";
    return what;
  } else if(data === 'comments') {
    return commentsItems;
  }else if(data === "posts") {
    return postItems;
  } else if(data) {
    return getPostItem(data);
  }

  
};


function getPostItem(data){
    let posts = DB.collections.posts;
    let comments = DB.collections.comments;

  for(key in posts) {
    if(key === data) {
      let x = {
        id: data,
        name: posts[key].name,
        text: posts[key].text
      }
      return x;
    } 
  }

  let  err = 'not have yet';
  return err;
};


const getPostItems = useCollection('posts_1');
console.log(getPostItems);


// const item1 = getPostItem('posts_2'); 
// console.log(item1);

// const notFoundItem = getPostItem('posts_4');
// console.log(notFoundItem);