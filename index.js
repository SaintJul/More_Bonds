document.addEventListener("DOMContentLoaded", () => {
    const form  = document.getElementById("interaction")  
    let h1 = document.createElement("h1") 
    const div  = document.createElement("div")
    const btn1 = document.createElement("button")
    const btn2 = document.createElement("button")
    const btn3 = document.createElement("button")
    userConvo();
    
    //fetches the json file and sends the info to the movie names function
    function movieJson(){
        fetch("http:localhost:3000/movies/")
        .then(function(rres){
            return rres.json()
        })
        .then(function(data){
            movieNames(data)
        })
    }

    //Initiates user convo by giving the user a yes or no choice.
    //If response is yes, the program will correct the users course with a set of delays.
    //Once No is clicked the function calls the function containing the fetch.
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
    //movieNames function obtains the json file and displays the list of movies
    //The program then asks the user to pick their favorite movie.
    //movieNames Function then sends the users choice and the list of movies to the moreInfo function
    function movieNames(movies){       
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
                h1.innerText = "Here's a list of Bond Movies"               
            }, 1000);

            setTimeout(() => {       
        
                h1.innerText = "Which one is your favorite?"
            },4000)

            h4.addEventListener("click", function(){
                h1.innerText = `I see that you've liked ${h4.innerText}`
                setTimeout(() => {
                    h1.innerText = `Great choice!!!`
                }, 2000)

                setTimeout(()=>{
                    h1.innerText += ` Here's some more info.`
                    moreInfo(h4.innerText, movies) 
                    list.remove()
                },2800)         
            
            })    
        }      

   

    }   

    //moreInfo takes the name of the movie selected and posts info formatted into a paragraph.
    function moreInfo(movieName, list){
        //console.log(list)
        //console.log(list.length)

        for (i = 0; i < list.length;i++){
            //console.log(list[i]["Movie"])

            if (list[i]["Movie"] === movieName){
                    //console.log("if works")
                
                form.appendChild(div)
                const h2 = document.createElement("h2")
                div.appendChild(h2)
                const paragr = document.createElement("p")
                div.appendChild(paragr)

                h2.innerText = movieName
                paragr.innerText = `${movieName}, was filmed in ${list[i]["Year"]} and starred noneother than ${list[i]["Bond"]}.
                This wonderfully written and action packed film, was the creation of ${list[i]["Writer"]}.
                It should come as no suprise that ${movieName}, with it's ${list[i]["Avg_User_IMDB"]} rating for critcs and ${list[i]["Avg_User_Rtn_Tom"]}
                rating for masses, grossed ${list[i]["World_Gross"]} world-wide.`
                
                    //console.log(div)
                setTimeout(()=> {
                    repeatMovieSearch()
                },20000)
                
            }
        }              

    }
    //Asks the user if they'd like to repeat the process again.
    //If so the will be allowed to see the original movie that they selected and 
    //any movies they might choice afterward
    //Once the user has finished looking at the program, they will be thanked for their participation.
    function repeatMovieSearch(){
        h1.innerText = "Would you like to try that again?"
            
        setTimeout(() => {
                
            form.appendChild(btn3)
            btn3.innerText = "Another Time"
            form.appendChild(btn2)
            btn2.innerText = "Repeat"
        }, 1000)

        setTimeout(() => {
            div.remove()
        }, 2000)

        btn3.addEventListener("click", function(e) {
             e.preventDefault()
            h1.innerText = "Thank you for your time."
            btn3.remove()
            btn2.remove()

        })
        btn2.addEventListener("click", function (e) {
            e.preventDefault()
            btn3.remove()
            console.log("btn2 works")
        })



    }


})




