export const remove = async () => {
    // Write your code here 
        var fs = require(‘fs’);
    
    fs.unlink('fileToRemove.txt', function (error) {
    if (error) { console.log('FS operation failed');
       return;        
    })
};
