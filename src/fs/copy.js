export const copy = async () => {
    // Write your code here 
    const fs = require('fs');
    fs.copyFile('files','files_copy', function (error) {
    if (error) { console.log('FS operation failed');
       return;        
    })
};
