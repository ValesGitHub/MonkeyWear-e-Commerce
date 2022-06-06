/*-----------Service Workger Managment-----------*/
if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("../sw_pagecache.js").then(registration => {
        console.log("SW Registred!");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    });
}
/*------------------------------------------*/
