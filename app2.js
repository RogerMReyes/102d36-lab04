function checkIfFoodLover() {
    var answer = confirm("Press Okay if you love Hamburgers and Cancel if you dont!");
    
    if(answer == true){
        document.write("A nice little Lorem Ipsum for a fellow Hamburger Lover!");
    } else{
        
        document.write("That's all right Hamburgers aren't for everyone!");
    }
    return answer;
}