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



function useCollections(coll) {
  let c = DB.collections[coll];
  if(DB.collections[coll]) {
    return function(item){
      console.log(c[item]);
    };
  } 
  return 'We haven\'t item yet';

}
const getItem = useCollections('posts');
getItem('posts_1')


// const notFoundItem = useCollection('posts_4');
// console.log(notFoundItem);