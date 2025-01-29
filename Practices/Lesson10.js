//  CALLBACKS AND PROMISES

// USING CALLBACKS
const working = false;
const notWorking = true;
// const success = true;
function usingCallBack (works, fail) {

    if(notWorking){
        fail({
            name: 'Failure',
            message: 'You can do better, Please try again'
        })
    
    } else {
        works(' Very good Emmanuel')
    }
}

usingCallBack((message)=> {
    console.log('Success' + message);
}, (error)=> {
    console.log('Failure' + error.message);
})

// USING PROMISES 

function usingPromises() {
    return new Promise ((resolve, reject) => { 
        if(notWorking) {
            reject({
                name: 'Failure',
                message: ' You can do better, Please try again'
            })      
        } else {
            resolve(' Very good Emmanuel')
        }
    })
}
usingPromises().then((message)=> {
    console.log('Success' + message);    
}).catch(error => {
    console.log('Failure' + error.message)
})