import resume from './Notebook.ico'
import github from './Folder.ico'
import headshot from './jpg.ico'
import './DesktopIcons.css'

const DesktopIcons = () => {
    return(
        <>
            <img id='resume' src={resume} alt="notebook-icon"></img>
            <img id='folder' src={github} alt="folder-icon"></img>
            <img id='picture' src={headshot} alt="chan-headshot"></img>
        </>
    )
}

export default DesktopIcons;