function help() {
    console.log(
        `these are my help commands
        
        node main tree <filepath>
        node main organize<filepath>
        node main help<filepath>`
    );
}

function abc() {
    console.log("hi");
}

module.exports ={
    help:help,
    moon:abc
}