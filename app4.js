function steaksOnAGrill(){
    let baconGrillsImg = "https://baconmockup.com/640/360";
    let answer = prompt("So how many Steaks should I lay on the grill?");
    if(answer > 0){
        alert("Thats not enough that multiply that by 4!")
        for(i=0; i<answer; i++){
            document.write('<img class="Bacon" src="' + baconGrillsImg + '">');
        }
    } else {
        alert("Alright just 4 steaks on the grill for me then!")
        document.write('<img class="Bacon" src="' + baconGrillsImg + '">');
    }
    
}