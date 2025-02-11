const fs=require("node:fs")
function myReadFile(){
try{
const data=fs.readFileSync("dummy.txt","utf-8")
console.log("File Data:",data)
}
catch(err){
    console.log("File Reading error:",err.message)
}
}
const myWriteFile=(data)=>{
    try{
        fs.writeFileSync("dummy.txt",data)
        console.log("Successfully write file")
    }
    catch(err){
        console.log("File Writing Error:",err.message)
    }
}
const myAppendFile=()=>{
    try{
        fs.appendFileSync("dummy.txt",data)
        console.log("Appended data Successfully")
    }
    catch(err){
        console.log("File Appending error:",err.message)
    }
}
const myDeleteFile=(fileName)=>{
    try{
        fs.unlinkSync(fileName)
        console.log("Successfully deleted file",fileName)
    }
    catch(err){
        console.log("File deletion error:",err.message)
    }
}
module.exports={
    myReadFile:myReadFile,
    myWriteFile:myWriteFile,
    myAppendFile:myAppendFile,
    myDeleteFile:myDeleteFile,
    username:"Sunakshi",
}