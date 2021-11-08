import image from './better_background.jpg';
import DesktopIcons from './DesktopIcons'

function Background() {

    return (
        <>
            <img id='sonoma' src={image} alt='windows 8 theme'></img>
            <DesktopIcons />
        </>
    )
    
}

export default Background;