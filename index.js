//structurally ~ 
    //I'll have a h1 say 007
    //print the names of the movies in an h3 or h4 (horizontal list??)
    // once the user clicks a movie they have an option to like it and get additional info ~
    // once the category for additional infomation is clicked, the user could also look at movies with the same actor.

//Display the info then get css to style the page and info.

/**/
document.addEventListener("DOMContentLoaded", () => {
    const form  = document.getElementById("interaction")
    let h1 = document.createElement("h1")
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
    
    
    form.appendChild(h1)  
    let pause = "." 
    h1.innerText = "007 "
    
    setTimeout(() =>{
        for(i = 0; i< 10; i++){
            h1.innerText += `${pause} `
        }
    }, 1000)

    setTimeout(() => {h1.innerText += " is that you?" },2200)


    setTimeout(() => {
        const btn1 = document.createElement("button")
        const btn2 = document.createElement("button")
        form.appendChild(btn1)
        form.appendChild(btn2)
        btn1.innerText = "Yes"
        btn2.innerText = "No"
        let countDown = 5

        btn1.addEventListener("click", function(event) {
            event.preventDefault()
           h1.innerText = "You're Not 007"
           setTimeout (() =>{h1.innerText = "This message will self-destruct in "},1200)

           setInterval(() => {
                    while (countDown > 1){
                        h1.innerText += ` ${countDown},` 
                        return countDown--
                    }
                           
           }, 1800);
           
           setTimeout(() => {h1.innerText +=" 1"},8500)

           setTimeout(() => {
               h1.innerText = "."               
           }, 11000);

           setTimeout(() => {
            h1.innerText +=  ".. Lets give the No button a try"             
        }, 13000);




        })
        btn2.addEventListener("click", function(event) {
            event.preventDefault()
            h1.innerText = "Thanks for your participation"
            setTimeout(() => {movieJson()},1000)

        })  


    }, 2600)    
   
}

function movieNames(movies){
    const list = document.createElement("ul")    
    form.appendChild(list)
    
    for(i = 0; i < movies.length; i++){
        list.class = "hlist"
        const liList = document.createElement("li")
        list.appendChild(liList)
        const h4 = document.createElement("h4")
        liList.appendChild(h4)
        h4.innerText = (movies[i]["Movie"])   

        setTimeout(() => {
            h1.innerText = "Here's a list of bond Movies"
               
        }, 1000);

        setTimeout(() => {          
        
            h1.innerText = "Which one is your favorite?"
        },3500)
        
    }

    

   

}

})




