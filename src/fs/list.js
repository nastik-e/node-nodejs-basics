export const list = async () => {
    // Write your code here 
        var fs = require('fs');
    console.log (fs.writeFile('/files/', function (error) {
    if (error) { console.log('FS operation failed');
       return;        
    }
       })) 
};
