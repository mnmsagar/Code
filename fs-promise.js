const fs = require('fs/promises');


fs.readFile('file.txt','utf-8')
.then((data)=>{ console.log(data)})
.catch((error)=>{
    console.log(error);
})

// Now using async await 

async function readFile(){
    try{
        const data = await fs.readFile('file.txt','utf-8');
        console.log(data);
    } catch(error){
        console.log(error);
    }
}

readFile();




