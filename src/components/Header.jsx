export default function Header() {
    return (
        <header className="main-header">
            <nav className="navbar-header">
                <div><img src="./assets/img/dc-logo.png" alt="" /></div>
                <ul className="list-header">
                    <li><a href="">Characters</a></li>
                    <li><a href="">Comics</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">Games</a></li>
                    <li><a href="">Collectibles</a></li>
                </ul>
            </nav>
        </header>
    );
}