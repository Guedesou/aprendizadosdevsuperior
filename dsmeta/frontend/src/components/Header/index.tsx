import logo from '../../assets/img/logo.png'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="minha logo" />
                <h1>Guede$ Sale$ Management</h1>
                <p>
                   Developed by Guedes.
                    <a href="https://www.linkedin.com/in/guedesou/"> LinkedIn</a>
                    <a href="https://github.com/Guedesou"> | GitHub</a>

                </p>
            </div>
        </header>
    )
}
export default Header
