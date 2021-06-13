/*document.addEventListener("DOMContentLoaded",()=>{
    const h1 = document.getElementsByTagName("h1")
    setTimeout(()=>{
        console.log(h1[0].innerText)
    },400)

    const form  = document.getElementById("interaction")
   console.log(form)

    
})*/


// 06/07/21-06/08/21 Tuesday Night
// Display the names of the bonds films +
// I also experimented with a function to add to the user experience +
// Additional research was done for the background img and font +


//structurally ~ 
    //I'll have a h1 say 007
    //print the names of the movies in an h3 or h4 (horizontal list??)
    // once the user clicks a movie they have an option to like it and get additional info ~
    // once the category for additional infomation is clicked, the user could also look at movies with the same actor.

//Display the info then get css to style the page and info.

/**/
document.addEventListener("DOMContentLoaded", () => {
fetch("http:localhost:3000/movies/")
.then(function(rres){
    return rres.json()
})
.then(function(data){
    movieNames(data)
})

function movieNames(movies){
    console.log(movies)
    console.log(movies.length) // Number of movies
   //console.log(movies.movies[0]["Movie"]) // shows the first movie

   

}

})




