const eventHandler = (cd) => {

    let i = cd;
    console.log('event => ',i)
    setInterval(()=>{
        ++i;
        console.log('event => ',i)
    },1000)

    
}

eventHandler(3);