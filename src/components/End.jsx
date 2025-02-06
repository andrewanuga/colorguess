
const End = ({ openend, setOpenend, score }) => {
  return (
    <div className="end" style={{ display: openend }}>
    <div className="">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        onClick={() => {setOpenend("none")}
        } 
        height="24px" 
        viewBox="0 -960 960 960" 
        width="24px" 
        fill="#121212">
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
      </svg>
      <h3>YOU SCORED</h3>
      <p>{score} out of 6</p>
    </div>
  </div>  )
}

export default End
