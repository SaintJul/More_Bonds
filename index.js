//structurally ~     
    // once the user clicks a movie they have an option get additional info ~
    // once the category for additional infomation is clicked, the user could also look at movies with the same actor.

//Display the info then get css to style the page and info.

/**/
document.addEventListener("DOMContentLoaded", () => {
    const form  = document.getElementById("interaction")  
    let h1 = document.createElement("h1") 
    const btn1 = document.createElement("button")
    const btn2 = document.createElement("button")
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
    const EMPTY_HEART = '♡'
    const FULL_HEART = '♥'
    btn1.remove()
    btn2.remove()
    let num = 0
     
    const list = document.createElement("ul")    
    form.appendChild(list)
    
    for(i = 0; i < movies.length; i++){
       
        list.class = "hlist"
        const liList = document.createElement("li")
        list.appendChild(liList)
        const h4 = document.createElement("h4")
        liList.appendChild(h4)
        h4.innerText = (movies[i]["Movie"]) 
        num = i 


        setTimeout(() => {
            h1.innerText = "Here's a list of bond Movies"               
        }, 1000);

        setTimeout(() => {       
        
            h1.innerText = "Which one is your favorite?"
        },3500)

        h4.addEventListener("click", function(){
            h1.innerText = `I see that you've liked ${h4.innerText}`
            setTimeout(() => {
                h1.innerText = `I'll show you more information about ${h4.innerText}`
            }, 2000)

            
            moreInfo(h4.innerText, movies)
            list.remove()
        })

        



        
    }
        

   

}
    function moreInfo(movieName, list){
        console.log(list)
        //console.log(list.length)

        for (i = 0; i < list.length;i++){
            //console.log(list[i]["Movie"])

            if (list[i]["Movie"] === movieName){
                console.log("if works")
            }
        }



    }


})




