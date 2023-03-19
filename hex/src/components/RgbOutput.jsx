const RgbOutput = ({color, text, brightness}) => {

    return(
        <>  
            <div className="output" style={{background: color, color: brightness}}>{text}</div>
        </>
    );
}

export default RgbOutput;