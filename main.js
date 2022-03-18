const fs=require('fs');
// const path=require('path')


let input=process.argv.slice(2);
let command=input[0];
let path=input[1];
let helpFunc=require('./commands/help.js');

let organizepublic=require('./commands/organize');
exports.writehtml5public=organizepublic.organizepublic;
switch (command) {
    case 'tree':
        // function tree()

        break;
    case 'organize':
        // function organize()
        organizepublic.organizepublic(path);
        break;
    case 'help':
        //function help()
        helpFunc.help()

        break;

    default:
        console.log("command not recognized");
        break;
}

exports.help=helpFunc.help;
// helpFunc.help()


function writehtml5(){
    
    const html5=fs.readFileSync(`${__dirname}/index.html`)
    let filename=process.argv[2]
    fs.writeFileSync(`${process.cwd()}/${filename}`,html5+"hathini")
}

// writehtml5();





















// console.log(__dirname,__filename)
// let ext=path.extname(path.join(__dirname,"main.txt"));
// console.log(ext);
// console.log(path.basename(__dirname));
// let name=path.basename(path.join(__dirname,'abc.js'))
// console.log(name);
// // fs.openSyn(name )
// fs.unlinkSync(name)