function myName(){
    console.log("Mike");
}

export function yourName(name){
    console.log(`Hi ${name}!`)
}

export{myName}

export default ()=>{
    console.log("Oh great what's this now?!?!")
}