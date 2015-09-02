var user = prompt("You are exploring the ruins of a long lost ancient civilization deep in the amazon \n when suddenly one of the stone statues springs to life! \n do you Run, Talk to it, or Fight it?").toLowerCase(); 

switch(user) {
    case 'run':
        var fast = prompt ('Good idea! Are you fast? (Yes or No)').toUpperCase(); 
        var agile = prompt('Are you agile (Yes or No)').toUpperCase();
        if(fast === 'YES' && agile === 'YES') {
        console.log( 'you feel the guardians eyes on you as you run away \n you have to jump over roots and dunk under branches as you run. \n After a while you run out of breath and cannot run any further, you turn to look back in the direction you came from \n no sight of the ruins or gaurdian in sigh \n you have escaped safely but are too scared to visit the ruins ever again!'); 
        }else{
            console.log('you trip over a tree root while trying to run away. The gaurdain is steadfast in its positon, its eyes still burning like embers')
        }
        
        break; 
        
    case 'talk': 
        var language= prompt('Do you speak Tabajarain? (Yes or No)').toUpperCase();
        var tech = prompt ('Did you bring your pocket every laguage translator with you? (Yes or No)').toUpperCase();
        if( language === 'YES' || tech === 'YES') {
        console.log('You ask the gaurdian about the ruins, explaining that you are on an archelogical exploration and ask to see the most important place in the ruins. The guardian starts to walk deeper into the ruins and beckons you to follow. You arrive at a room that has been sealed off by a door with a strange glowing symbol on it. The guardian puts a hand up to the strange symbol which glows more instensly for a moment. The door melts before your eyes to reveal a large room. Inside of the room you see several acient artifacts, skeletons and tresure. Congraulatuons you have found a tomb of the leader of the long lost tribe!')
        }else{
            console.log('the guardian remains steadfast but does not take its red glowing eyes off of you'); 
        }
        break;
        
    case 'fight':
        var strong = prompt ('The gaurdian raises a mighty stone fist and swings it at you! Are you strong enough to break rock with your fists? (Yes or No)').toUpperCase();
        var trained = prompt ('Are you trained in martial arts? Yes or No)').toUpperCase(); 
        if(strong === 'YES' && trained === 'YES') {
            console.log('You land a mighty blow and the stone guardian crumbles! Small bits of rock and dust hit the forest floor! You have defeated the guardian and continue your search of the ruin. You come across a door with a strange glowing symbol that is locked. You cannot unlock the door and  turn back empty handed'); 
        }else{
            console.log('The guardian crushes you with one might blow. The world around you fades to black. You are dead')
        }
        break; 
        
        default: 
            ('The gaurdian stares at you intensely with it\'s unsettling glowing ruby eyes') 
}
   
