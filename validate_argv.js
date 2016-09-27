//Nicholas Getka
//IR Project 1

//This code could have been included in the start_project1.js file
//but it was serperated mostly so I could learn how to export functions between files
//in the future the other js files will more substantially add to the project
//including many more functions and data structures
function validate() {
  var isTrue = false;
  if(process.argv[2] == null || process.argv[3] == null){
    console.log("The path to the data file and the memory constraint must be passed as commandline arguements");
    console.log("command line arguements: 1 - /path/to/data.file, 2 - memory constraint (1000, 10000, 100000)");
  }
  else {
    var mem = parseInt(process.argv[3]);
    if(mem != 1000 && mem != 10000 && mem != 100000){
      console.log("The memory constraint must be 1000, 10000, or 100000");
    }
    else{
      console.log("Success!");
      isTrue = true;
    }
  }
  return isTrue;
}
module.exports.validate = validate;
