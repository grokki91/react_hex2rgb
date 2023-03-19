const HexInput = ({color, addHex}) => {
    return(
        <>
            <input type="text" placeholder="Write HEX" value={color} onChange={addHex} maxLength="7"/>
        </>
    );
}

export default HexInput;