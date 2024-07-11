const Overlay = ({ setTaskInfoScreen, taskInfoScreen }) => {
    return (
        <div id="overlay" onClick={() => taskInfoScreen ? setTaskInfoScreen(false) : null}>

        </div>
    );
}
 
export default Overlay;