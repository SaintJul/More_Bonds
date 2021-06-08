
console.log("Money_Penny")
fetch("https://raw.githubusercontent.com/SaintJul/json-server-collection/main/bond-movie-stats/db.json")
.then(function(res){
    return res.json()
})
.then (function(obj){
    console.log(obj)
})


// Display the names of the bonds films

// Allows the user to pick their favorite. possibly add a like or heart ~ will think about this after program is running
    //Once one is clicked the user could choose another subset: car(~maybe add on a picture of the car ), location, film-length, writer
// ~get other movies with the same writer or actor playing bond


//Display the info then get css to style the page and info