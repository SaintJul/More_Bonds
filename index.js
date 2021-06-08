
fetch("https://raw.githubusercontent.com/SaintJul/json-server-collection/main/bond-movie-stats/db.json")
.then(function(res){
    return res.json()
})
.then (function(obj){
    console.log(obj)
})


// Display the names of the bonds films +


//structurally ~ 
    //I'll have a h1 say 007
    //print the names of the movies in an h3 or h4 (horizontal list??)
    // once the user clicks a movie they have an option to like it and get additional info ~
    // once the category for additional infomation is clicked, the user could also look at movies with the same actor.

//Display the info then get css to style the page and info.