const {readFile, writeFile } = require('fs');

console.log('start')
readFile('./content/subfolder/first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err)
        return null
    }       
     const first = result;
     readFile('./content/subfolder/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `here is the result: ${first}, ${second} \n`, (err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task')
        })
     })
})
console.log('starting next task')