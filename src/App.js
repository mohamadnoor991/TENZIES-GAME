import React ,{useEffect} from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'
 
/**
 * Challenge last: Tie off loose ends!
 * 1. If tenzies is true, Change the button text to "New Game"
 * 2. If tenzies is true, use the "react-confetti" package to
 *    render the <Confetti /> component 🎉
 * 
 *    Hint: don't worry about the `height` and `width` props
 *    it mentions in the documentation.
 */

export default function App(){
    const [tenzies,setTenzies]=React.useState(false)


 
    //    console.log("Effect ran")
    const [numberState,setNumberState]=React.useState(allNewDice())

/**
 * Here is the quick strong function of the course whereas dice==numberState, in my code
 *     React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log("You won!")
        }
    }, [dice])
 */



    React.useEffect(function(){
        // setNumberState(dice=>dice.map(item=>{
 
        // }))
        let count=0
        var choice=[]
        for(let i=0;i<numberState.length;i++){
            // let d=numberState[i]
            if(numberState[i].isHeld===true){
                 choice.push(numberState[i].value)
        // console.log(d.value)
        count+=1
        if(count===10){
            if(choice.every( v => v === choice[0] )){
            setTenzies(true)
            console.log("Mabrouk")
           
        }}
            }
            // d===true? setTenzies(true):""
                // setTenzies(true)
            
               
            
        }
        console.log(tenzies)
        // console.log(choice)
    }
    ,[numberState])
    
    function refreshGame(){
            window.location.reload();
    }

    function allNewDice(){
    // const numberArray=[{value:"",isHeld:false}]
    // const numberArray = new Array(6).fill({value:"",isHeld:true});
    const numberArray = new Array() // or just [] for array

    for(let i=1;i<=10;i++){
        // const number=Math.ceil(Math.random()*6) or put number
        
        // numberArray[i].value=Math.ceil(Math.random()*6)// old doluation
        const random=Math.ceil(Math.random()*6)
        numberArray.push({
            value:random,
            isHeld:false,
            id:nanoid()}) //nanoid()
        //or  newDice.push(Math.ceil(Math.random() * 6)) right choice form course
        
    }
    return numberArray
}

function hold(id){
    setNumberState(previous=>previous.map((dice)=>{
            return dice.id===id? {...dice, isHeld: !dice.isHeld} : dice
        
        }) 
    )
  
    
}

// console.log(numberState) //testing
const groupOfNumbers=numberState.map(item=> {
    return  <Die value={item.value} key={item.id} held={item.isHeld}
     holdfun={()=>hold(item.id)}/>
    
    
}
)
function rollDice(){
//   console.log("hhhhhh") //testing
setNumberState(prev=>prev.map(dice =>{
    return dice.isHeld===false? {...dice,
    value:Math.ceil(Math.random()*6),
    id:nanoid(),
    }
    :dice
        
    
})
    )}
    return(
       
        <main>
        <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
{groupOfNumbers}
       </div>
       <button className="roll-dice" onClick={tenzies? refreshGame :rollDice}>{tenzies?"New Game":"Roll"}</button>
       {tenzies&& <Confetti/>}
        </main>
        
    )
}