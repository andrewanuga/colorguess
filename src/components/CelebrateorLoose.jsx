
const CelebrateorLoose = ({ win, setwin, score, wins }) => {
   setTimeout(()=>{
        if (win== "flex") {
            setwin("none")
        }
    }
    , 5000)
  return (
    <div className="celos" style={{display : win}}>
      <div className="containcelos">
          <p>{wins ? "😓": "🥳"}</p>
          <p>{ wins ? "You win" : "You loose"}, You score {score} Choose again</p>
      </div>
    </div>
  );
}

export default CelebrateorLoose;
