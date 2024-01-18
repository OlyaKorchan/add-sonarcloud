import './Header.css'

function Header () {
    const addHeader = () => {
        return 'New Header!'
    }

    return <h1 className='header'>{addHeader()}</h1>
}

export default Header