const{readFileSync,writeFileSync}=require(`node:fs`);


function writeFile(location,file,data){
    data=JSON.stringify(data)
    return writeFileSync(`${location}/${file}`,data,{encoding:`utf-8`})


}
function readFile(location,file){
    let purchases=readFileSync(`${location}/${file}`,`utf-8`)
    return purchases?JSON.parse(purchases):[]
}
module.exports={readFile,writeFile}