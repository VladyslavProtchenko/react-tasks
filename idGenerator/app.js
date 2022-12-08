let count =0;
let id ={}

function newIdGenerator(coll){

    return function(){
        id[coll] = count;
        count++
        console.log(`${coll}-${id[coll]}`);
    }
}

const idReneratorPosts = newIdGenerator('anything')
const idReneratorComments = newIdGenerator('comments')

const p1 = idReneratorPosts() // posts-1
const p2 = idReneratorPosts() // posts-2
const p3 = idReneratorPosts() // posts-3


const c1 = idReneratorComments() // comments-1
const c2 = idReneratorComments() // comments-2
const c3 = idReneratorComments() // comments-3