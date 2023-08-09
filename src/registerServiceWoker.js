const  register  = ()=>{
    navigator.serviceWorker.register('./serviceworker.js')
}

export {register}