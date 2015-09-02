var slaying = true 
var youHit = Math.floor(Math.random()*2)
var damageThisRound = Math.floor(Math.random()*5 + 1) 
var totalDamage= 0 

while(slaying) {
    if(youHit) { 
    console.log("Congratulations you pierced the fercious beast's armor and landed a hit!");
    totalDamage += damageThisRound;
    if(totalDamage >= 4) {
        console.log("Congratulations! You have slain the monsterous beast!");
        slaying = false; 
    }
} else { 
    console.log("The dragon throws his head back and issues a mighty roar, you try and run but your feet are glued to the ground. The dragon lifts a might foot and crushes you underneath! In this cave, DRAGON SLAYS YOU!"); 
    }
     slaying = false;
}