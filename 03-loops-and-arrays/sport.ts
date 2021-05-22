let sport: string[] = ["badminton", "hockey" , "basketball"]

for (let sportlist of sport){
    if(sportlist == "badminton"){
        console.log(sportlist + "<< My Fav");
    }else{
        console.log(sportlist);
    }
}

console.log("------------This is 分隔線------------");

sport.push("Football");
sport.push("table tennis")

for(let i=0; i<sport.length ; i++){
    console.log(sport[i]);   
}
