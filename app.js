function checkGuest() {
    var guest = prompt("Who is joining us today"); 
    if(guest.toLowerCase() == "roger"){
        document.write("Welcome Back Roger!");
    } else{
        document.write("What food do you like " + guest + " ?");
    }
    var answer = prompt("Do you like food?");
    while(answer.toLocaleLowerCase() != "yes"){
        answer = prompt("Sorry can't let you in unless you like food!")
    }
    return guest;
}
