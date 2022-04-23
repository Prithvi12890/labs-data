import LinkButton from "./LinkButton";
import './my-components.css';

function Header() {
    const navButtons = [
        {name: "Home", link:"../../public/index.html"},
        {name: "Labs", link:"../../public/index.html"},
        {name: "Contribute", link:"../../public/index.html"},
        {name: "About", link:"../../public/index.html"},
    ];
    return (
        <div className="Header">
            <ul>
                {navButtons.map((navButton) => <li><LinkButton name={navButton.name} href={navButton.link} /></li>)}
            </ul>
        </div>
    );
}

export default Header;