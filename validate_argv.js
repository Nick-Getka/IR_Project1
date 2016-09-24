module.exports = function() {
  this.validate = function() {
   var isTrue = false;
   if(process.argv[2] == null){
     console.log("The path to the data file and the memory constraint must be"+
     " passed as commandline arguements");
   }
   else {
     if(process.argv[2] == 'help'){
       console.log("command line arguements: 1 - /path/to/data.file, 2 - memory constraint (1000, 10000, 100000)");
     }
     else{
       if(process.argv[4] == null){
         console.log("A command is missing");
       }
       else if(process.argv[4] != 1000 || process.argv[4] != 10000 || process.argv[4] != 100000){
         console.log("The memory constraint must be 1000, 10000, or 100000");
       }
       else{
         console.log("Success!");
         isTrue = true;
       }
     }
   }
   return isTrue;
 }
}
