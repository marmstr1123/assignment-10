////------------------------------------------------------------------
// TASK 1 : Build a function that returns an array of strings with last names added:
//    If less than 6 characters, append Sampson: e.g. "Homer Sampson"
//    If 6 characters or longer, append Simpson: 'Jessica Simpson'
////------------------------------------------------------------------

var simpList = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]

function simpOrSamp(simpList){
   var updatedNamesList = []
    for( var i = 0; i < simpList.length ; i++){

        if(simpList[i].length < 6){
            updatedNamesList.push(simpList[i] + " "+ "Sampson")
        }  else {
            updatedNamesList.push(simpList[i] + " " + "Simpson")
       }
    }
    return updatedNamesList
}

var modifiedNamesList = simpOrSamp(simpList)
console.assert( modifiedNamesList[1] === "OJ Sampson" )
console.assert( modifiedNamesList[2] === "Marge Sampson" )
console.assert( modifiedNamesList[5] === "Maggie Simpson" )


////------------------------------------------------------------------
// TASK 2 : Write a function called shortiesOnly(). It should as input an array of strings, and
//    it should return a new array containing only those strings with four or fewer characters.
////------------------------------------------------------------------

var allNames = [
    "Ed",
    "Tom",
    "Elfrid",
    "Sam",
    "Bartholomeu",
    "Wayne",
    "Theodore",
    "Ingrid",
    "Fred",
    "Yvette"
]
function shortiesOnly(allNames){
    var tinyNames = []
    for(var i = 0; i <allNames.length ; i++){
        if(allNames[i].length <= 4) {
        tinyNames.push(allNames[i])
        }
   }return tinyNames
}

var shortList = shortiesOnly(allNames)
console.assert( shortList.length === 4 )
// checks to see that FRED is INCUDED in the array.
console.assert( shortList.indexOf('Fred') != -1 )
// checks to see that WAYNE is NOT in the array.
console.assert( shortList.indexOf('Wayne') === -1 )
