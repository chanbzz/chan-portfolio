import './Welcome.css'

const Welcome = () => {
    return (<>
        <section id='center'>
            <div id='welcome-header'>
                <h3>Welcome</h3>
            </div>
            <p>my name is chan and i'm a web developer with a deep passion for creating user-friendly collaborative RESTful applications. i hope you enjoy your time here</p>
            <form className='form-top'>
                leave a message:
                <input className='message' type="text" name="" value=""></input>
            </form>
            <form>rate your experience:
                <input className='rate' type="text" name="" value=""></input>
            </form>
        </section>
    </>)
}

export default Welcome;