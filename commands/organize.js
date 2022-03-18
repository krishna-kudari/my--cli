const fs=require('fs');
const path=require('path');
let types = {
    media: ['mp4','mkv','mp3'],
    archives: ['zip','7s','rar','tar','gz','ar','iso','xz'],
    documents: ['docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
    app:['exe','dmg','pkg','deb'],
    images:['png','jpg','jpeg']
}

// let srcPath='C:/Users/k/Desktop/mycli/downloads';
function organize(srcPath){
    // srcPath=srcPath.replace(/\\/g,"/");
    if(srcPath==undefined){
        srcPath=process.cwd();
        console.log(srcPath);
        
    }

    let organizedFiles=path.join(srcPath,"organized_Files")
    // console.log(organizedFiles);
    if(fs.existsSync(organizedFiles)==false){
        fs.mkdirSync(organizedFiles)
    }
    else{
        console.log(`${organizedFiles}  exists`);
    }

    //3. scan the entire srcPath(downloads folder)//
    let allFiles=fs.readdirSync(srcPath);
    // console.log(allFiles);

    //4. traverse and classify on basis of their extension
    for(let i=0;i<allFiles.length;i++){
        let ext=path.extname(allFiles[i]);
        // check for folders
        
        if(ext==""){
            continue;
        }
        // console.log(ext);
        fullPath=path.join(srcPath,allFiles[i])
        // console.log(fullPath);
        let isFile=fs.lstatSync(fullPath).isFile();
        if(isFile){
            let ext=path.extname(allFiles[i]);
            ext=ext.split('.')[1]; 
            // console.log(ext);
            let folderName = getFolderName(ext);
            // console.log(folderName);

            copyFileToDest(srcPath,fullPath,folderName);
        }


    }
    
}

function getFolderName(ext){
    
    for (let key in types) {
        for (let i = 0; i < types[key].length; i++) {
            if(types[key][i]==ext){
                // console.log(key);
                return key;
            }
        }
    }

    
}

function copyFileToDest(srcPath,fullPath,folderName) {
    let destPAth=path.join(srcPath,"organized_files",folderName);
    if(!fs.existsSync(destPAth)) {
        fs.mkdirSync(destPAth);
    }
    let filename=path.basename(fullPath);
    let destfileName = path.join(destPAth, filename);

    fs.copyFileSync(fullPath, destfileName);

}


// console.log(process.cwd());
let pathString = ('C:\\Users\\k\\Desktop\\mycli\\downloads').replace(/\\/g,"/");
// console.log(pathString);
// organize(pathString);
// console.log(__dirname);
// console.log(__filename);
module.exports={organizepublic:organize}