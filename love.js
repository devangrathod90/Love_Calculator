function loveCalculator(){
    
    percentage = Math.random()*100;

    percentage = Math.floor(percentage) + 1;
    var result = percentage;
    if(result <=33){
        alert("your relationship is complicated " +result);
    } 
    if(result <=60){
        alert("your love score is " +result +"and your relation may be work or may not work.");
    }
    else{
        alert("your love score is " +result + "your relation is like kanye weds kanye.");
    }
}

