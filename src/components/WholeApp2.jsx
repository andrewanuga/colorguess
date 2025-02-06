import { useState } from "react"

const WholeApp = () => {
    const [ colors, setcolors ] = useState("#91769e")

  return (
    <div className="main">
        <p className="name">ADAKOLE ANDREW OCHE</p>
        <div className="item-div1">
            <div className="content" style={{backgroundColor : colors}}>
                <div className="reset" onClick={()=> setcolors("#91769e")}>Reset</div>
            </div>
        </div>
        <div className="item-div2">

            <div className="btn 1" onClick={()=> setcolors("#fd0000")}>
                <div className="colors1"></div>
            </div>
            <div className="btn 1" onClick={()=> setcolors("#1eff00")}>
                <div className="colors2"></div>
            </div>
            <div className="btn 1" onClick={()=> setcolors("#3703f5")}>
                <div className="colors3"></div>
            </div>
            <div className="btn 1" onClick={()=> setcolors("#fd08e9")}>
                <div className="colors4"></div>
            </div>
            <div className="btn 1" onClick={()=> setcolors("#d2ff09")}>
                <div className="colors5"></div>
            </div>
            <div className="btn 1" onClick={()=> setcolors("#0990ff")}>
                <div className="colors6"></div>
            </div>
            <div className="btn 1" onClick={()=> setcolors("#ff9d09")}>
                <div className="colors7"></div>
            </div>
        </div>
    </div>
  )
}

export default WholeApp