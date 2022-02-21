const userLeft = false;
const learning = true;

// function javascriptCallback(callback, errorCallback) {
//     if(userLeft) {
//         errorCallback ({
//             name: 'User Left',
//             message: ':('
//         })
//     }else if (learning){
//         errorCallback({
//             name:'learning',
//             message:'web development'
//         })
//     }else {
//         callback('thank you')
//     }
// }

// javascriptCallback(message =>{
//     console.log('Success' + message)
// }, (error) => {
//     console.log(error.name + ''+ error.message)
// })


function javascriptPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        }else if (learning){
            reject({
                name:'learning',
                message:'web development'
            })
        }else {
            resolve('thank you')
        }
    })
}

javascriptPromise().then((message) =>{
    console.log('Success:' + message)
}).catch((error) => {
    console.log(error.name + ''+ error.message)
})