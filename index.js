// code your solution here
function saturdayFun (activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`)
}
const mondayWork = function (task = `go to the office`){
     return `This Monday, I will ${task}.`
}
function wrapAdjective ( idk = `*`){
    return function (idk2 = `special`){
        return `You are ${idk}${idk2}${idk}!`
    }
}