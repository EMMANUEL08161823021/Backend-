// JAVASCRIPT ASYNC AND AWAIT


// USING PROMISES
function makeRequest(location) {
    console.log(`Making request from ${location}.`)
    return new Promise((resolve, reject)=> {
        if(location === 'Google') {
            resolve('Google says welcome')
        } else {
            reject("Please try again.")
        }
    }) 
}

function processedRequest(response) {
    console.log('Processing information');
    return new Promise((resolve, reject)=> {
        resolve(`Extra Information + ${response}`);
        
    })
}

makeRequest('Google').then((response)=> {
    console.log('Response Received');    
    return processedRequest(response)
}).then((processedResponse)=> {
    console.log(processedResponse);    
}).catch(error => {
    console.log(error);
    
})

// USING ASYNC AND AWAIT 

async function requestFunction(){

    try {
        
        const messageRequest = await makeRequest('Google');
        console.log('Request Made');
        
        const responseMessage = await processedRequest(messageRequest);
        console.log(responseMessage);
    } catch (error) {
        console.log(error);
        
        
    }
     
}
requestFunction()