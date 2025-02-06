import { motion } from "motion/react"

const CelebrateorLoose = ({ win, setwin, score, wins }) => {
   setTimeout(()=>{
        if (win== "flex") {
            setwin("none")
        }
    }
    , 5000)
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    className="celos" style={{display : win}}>
      <div className="containcelos">
          <p>{wins ? "😓": "🥳"}</p>
          <p>{ wins ? "You win" : "You loose"}, You score {score} Choose again</p>
      </div>
    </motion.div>
    
    
  );
}

export default CelebrateorLoose;
