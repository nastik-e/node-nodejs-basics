export const create = async () => {
    // Write your code here
    var fs = require('fs');
    fs.writeFile('/files/fresh.txt', "I am fresh and young" , function (error) {
    if (error) { console.log('FS operation failed');
       return;        
    }
       });
 
};
