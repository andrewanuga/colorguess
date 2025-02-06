const Instructions = ({ open, setOpen }) => { 
    return (
      <div data-testid="gameInstructions" className="instruct" style={{ display: open }}>
        <div className="">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            onClick={() => {setOpen("none");console.log(open)}
            } 
            height="24px" 
            viewBox="0 -960 960 960" 
            width="24px" 
            fill="#121212">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
          <h3>Instructions</h3>
          <p>The game is a guess game.
             You are to guess the right color the the larger viewBox
             to choose click the smaller button below,
             There are only 6 options to select and after that you would
             have your score. <br/> Have Fun 🥳🥳🥳 
          </p>
        </div>
      </div>
    );
  }
  

export default Instructions
