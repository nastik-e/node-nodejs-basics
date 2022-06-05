export const read = async () => {
    // Write your code here
        var fs = require('fs');
    fs.readFile('fileToRead.txt', function (error, data) {
    if (error) { console.log('FS operation failed');
       return;        
    } else console.log (data);
       })
};
