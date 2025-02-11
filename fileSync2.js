const { myReadFile, myWriteFile, myAppendFile, myDeleteFile, username } = require("./fileSync1");

myReadFile()
const data="My FSD class"
myWriteFile(data)
myReadFile()
myAppendFile(data)
myReadFile()
myDeleteFile("dummy.txt")
console.log("USer name=",username)
