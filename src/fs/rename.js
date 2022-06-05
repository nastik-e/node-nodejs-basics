export const rename = async () => {
    // Write your code here 
    var fs = require(‘fs’);
    fs.rename('wrongFilename.txt', 'properFilename.md', function (error) {
    if (error) { console.log('FS operation failed');
       return;        
    })
};
