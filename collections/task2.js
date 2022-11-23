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
          postId: 'post_2',
          text: 'Comment 2'
       }
      } 
    }
  };

 


function useCollection(enterData) {
    let post = DB.collections.posts;
    let comm = DB.collections.comments;

    let arr =[];
    for(key in DB.collections.posts) {
        arr.push(key);
    }
    let count = arr.length;


    try {
        let data;
        for(key in DB.collections) {
            if(enterData === key) {
                data = key;
            }
        }
        if(!data) {
            DB.collections[enterData] = {};
            return DB.collections;
        }

        if(data === 'posts') {
        let userPost = {
            get(data){
    
                if(data ==='posts') {
                    return post;
                };
    
                for(key in post){
                    if(key === data){
                        let postItem = {
                            id: key,
                            name: post[key].name,
                            text: post[key].text,
                        }
                        return postItem; 
                    }
                }
    
                    let x = 'I can\'t find posts';
                    return  x ;
                },
            create(data){
                console.log('create');
                let y = 'posts_'+(count+1)
                DB.collections.posts[y] = data;
                
                return DB.collections.posts;
            },
            deleteOne(data){
                console.log('delete')
                for(key in post){
                    if(data===key){
                        delete post[key];
                    }
                }
                return post;
            },
            edit(item, data){
                for(key in post) {
                    if(item===key){
                        post[key] = data;
                    }
                }
                return post;
            }
        }
        
        return userPost;
    } else if(data === 'comments') {
        let userComments = {
            get(data) {
    
                if(data === 'comments') {
                    return comm;
                }
    
                for(key in comm){
                    if(data ===key){
                        let commItem = {
                            postId: comm[key].postId,
                            text: comm[key].text,
                        }
                        return commItem;
                    }
                }
    
                let err = "not have yet"
                return err;
            },
            create(data){
                let y = 'comments_'+(count+1)
                comm[y] = data;
                return comm;
            },
            deleteOne(data){
                for(key in comm){
                    if(data===key){
                        delete comm[key];
                    }
                }
                return comm;
            },
            edit(item, data){
                for(key in comm) {
                    if(item===key){
                        comm[key] = data;
                    }
                }
                return post;
            }
        }

            return userComments;
    }
    } catch (error) {
        console.log('Ups!!!'+error);
        // DB.collections[data] = {};
        //     return DB.collections;
    }
};


let x = useCollection('comments');

console.log(x.get('comments_1'));






//   collection.get('some-id');
//   collection.create(data);
//   collection.deleteOne('some-id');
//   collection.edit('some-id', dataToEdit);
