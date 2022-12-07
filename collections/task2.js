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

function useCollection(data){
    let path = DB.collections[data];

    let a = [];
    let count = a.length;
    for(key in path) a.push(key);  
    let name =  `${data}_${count+1}`;
    

    if(DB.collections[data]) {
        let path = DB.collections[data];

        let crud ={
            
            create(item){
                path[name] = item;
                return;
            },

            delete(item) {
                
                if(path[item]) {
                   delete path[item];
                }
            },

            edit(item, data) {
                path[item] = data;
                return;
            },

            get(item){
                if(path[item]) {
                    return console.log(path[item]);
                }
                return console.log(path);
            },
        }

        return crud;

    } else {
        DB.collections[data] = {"test":"test"};
        return console.log(DB.collections);
    } 
};



let editItem = {
    name:"Petro",
    age: 15,
    status: "virgin",
}
let newEl = {
    id: 'id',
    value: 'test'
};

let posts_1 = 'posts_1';
let x = useCollection('comments');

x.create(newEl)
x.edit('comments_1', editItem);
x.delete('comments_2')
x.get();





//   collection.get('some-id');
//   collection.create(data);
//   collection.deleteOne('some-id');
//   collection.edit('some-id', dataToEdit);

