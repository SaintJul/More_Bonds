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
    userConvo();
    //movieJson();

function movieJson(){
    fetch("http:localhost:3000/movies/")
    . then(function(rres){
        return rres.json()
    })
    .then(function(data){
        movieNames(data)
    })
}

function userConvo(){
    const form  = document.getElementById("interaction")
    let h1 = document.createElement("h1")
    form.appendChild(h1)  
    let pause = "." 
    h1.innerText = "007"
    
    setTimeout(() =>{
        for(i = 0; i< 10; i++){
            h1.innerText += pause
        }
    }, 1000)

    setTimeout(() => {h1.innerText += "is that you?" },2200)


    setTimeout(() => {
        const btn1 = document.createElement("button")
        const btn2 = document.createElement("button")
        form.appendChild(btn1)
        form.appendChild(btn2)
        btn1.innerText = "Yes"
        btn2.innerText = "No"

        btn1.addEventListener("click", function(event) {
            event.preventDefault()
            console.log("works1")
        })
        btn2.addEventListener("click", function(event) {
            event.preventDefault()
            console.log("works2")
        })           


    }, 2600)

   
    
   


}

function movieNames(movies){
    console.log(movies)
    console.log(movies.length) // Number of movies
   //console.log(movies.movies[0]["Movie"]) // shows the first movie

   

}

})




