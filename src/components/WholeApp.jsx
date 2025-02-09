import { useState } from "react"
import Instructions from "./Instructions"
import CelebrateorLoose from "./CelebrateorLoose"
import End from "./End"
import { motion } from "motion/react"

const WholeApp = () => {
    const [ colors, setcolors ] = useState("#d2ff09")
    function showRandomText() {
            const texts = [
                "#ff9d09",
                "#d2ff09",
                "#fd08e9",
                "#3703f5",
                "#3703f5",
                "#fd0000"
            ];

    const randomIndex = Math.floor(Math.random() * texts.length);
    setcolors(texts[randomIndex]);
    }
    const [openInstruct, setOpenInstruct] = useState("none")
    const [win, setWin] = useState("flex")
    let [score, setScore] = useState(0)
    const [wins, setwins] = useState(true)
    let [count, setcount] = useState(0)
    const [openEnd, setOpenEnd] = useState("none")
     
    const userscore =(col)=> {
        if(count == 6){
            setOpenEnd("flex")

        }
        if(colors !== col){
            setScore((prev)=>prev)
            setWin("flex")
            showRandomText()
            setwins((pre)=>!pre)
            setcount((pre)=> ++pre)
        }
        if(score < 6 && colors == col){
            setScore((prev)=>prev+1)
            setWin("flex")
            showRandomText()
            setcount((pre)=> ++pre)
        }
        else{
            "none"
            setcount((pre)=> ++pre)
        }
    }
    const reset=()=>{
        setScore(score=0)
        setcount(count=0)
    }
    return (
    <div className="main">
        <p className="scores">SCORES: {score} / 6</p>
        <Instructions
            open={openInstruct}
            setOpen={setOpenInstruct}
        />
        <p onClick={() => {setOpenInstruct("flex");console.log(openInstruct)}} className="instructionopen">Instructions</p>
        <p className="name">Guess Color</p>
        <div data-testid="colorBox" className="item-div1">
            <div className="content" style={{backgroundColor : colors}}>
                <div className="reset" onClick={()=> reset()}>Reset</div>
            </div>
        </div>
        <div className="item-div2">

            <div data-testid="colorOption" className="btn 1" onClick={()=> {setcolors("#fd0000"); userscore("#fd0000")}}>
                <div className="colors1"></div>
            </div>
            <div data-testid="colorOption" className="btn 1" onClick={()=> {setcolors("#1eff00"); userscore("#1eff00")}}>
                <div className="colors2"></div>
            </div>
            <div data-testid="colorOption" className="btn 1" onClick={()=> {setcolors("#3703f5"); userscore("#3703f5")}}>
                <div className="colors3"></div>
            </div>
            <div data-testid="colorOption" className="btn 1" onClick={()=> {setcolors("#fd08e9"); userscore("#fd08e9")}}>
                <div className="colors4"></div>
            </div>
            <div data-testid="colorOption" className="btn 1" onClick={()=> {setcolors("#d2ff09"); userscore("#d2ff09")}}>
                <div className="colors5"></div>
            </div>
            <div data-testid="colorOption" className="btn 1" onClick={()=> {setcolors("#ff9d09"); userscore("#ff9d09")}}>
                <div className="colors7"></div>
            </div>
        </div>
        <CelebrateorLoose 
        win={win}
        setwin={setWin}
        score={score}
        wins={wins}
        count={count}
        />
        <End 
        openend={openEnd}
        setOpenend={setOpenEnd}
        score={score}
        />
    </div>
  )
}

export default WholeApp