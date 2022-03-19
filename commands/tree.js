const fs = require("fs");
const path = require("path");
// let arr=process.argv;
// let srcPath =arr[2];
function treeFn(srcPath) {
  if (srcPath == undefined) {
    console.log("Please enter a valid path");
    return;
  } else {
      srcPath = srcPath=srcPath.replace(/\ /,"/");

    let exists = fs.existsSync(srcPath);
    if (exists == true) {
      treeHelper(srcPath, " ");
    }else{
        console.log("Please enter a valid path")
    }
  }
}

function treeHelper(targetPath, indent) {
  let isFile = fs.lstatSync(targetPath).isFile();
  if (isFile == true) {
    let filename = path.basename(targetPath);
    console.log(indent + "├──" + filename);
    return ;
  }

  let dirName = path.basename(targetPath);
  console.log(indent + "└──" + dirName);

  let children = fs.readdirSync(targetPath);

  children.forEach((child) => {
    let childPath = path.join(targetPath, child);
    treeHelper(childPath, indent + "\t");
  });
}

module.exports = {
    tree: treeFn,
};

// let srcPath='C:\\Users\\k\\Desktop\\mycli\\commands'
// treeFn(srcPath);