

self.addEventListener('install' , ()=>{

    // pre cache all the files
    caches.open('learning')
        .then(cache=>{
            cache.addAll([
                "/",
            ])
        })
        .catch(err=>{
            console.log(err)
        })

})