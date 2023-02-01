function scuberGreetingForFeet(number){
  if(number <= 400){
    return 'This one is on me!'
  } else if(number > 400 && number < 2000){
    return 'That will be twenty bucks.'
  } else if(number > 2000 && number < 2500){
    return 'I will gladly take your thirty bucks.'
  } else if(number > 2500){
    return 'No can do.'
  }
}
  // Write your code here!


function ternaryCheckCity(name){
  return name === 'NYC'?'Ok, sounds good.' : 'No go.'
  // Write your code here!
}

function switchOnCharmFromTip(kindness){
  switch(kindness){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
  // Write your code here!
}