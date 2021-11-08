import resume from './Notebook.ico'
import github from './Folder.ico'
import './DesktopIcons.css'

const DesktopIcons = () => {
    return(
        <>
            <img id='resume' src={resume} alt="notebook-icon"></img>
            <img id='folder' src={github} alt="folder-icon"></img>
        </>
    )
}

export default DesktopIcons;