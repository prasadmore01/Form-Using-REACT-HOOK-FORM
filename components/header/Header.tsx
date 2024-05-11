
const Header:React.FC = () => {
    return(
        <header className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-semibold text-white">My Next.js App</h1>
            <nav className="mt-4">
                <ul className="flex">
                    <li className="mr-6"><a href="/" className="text-white hover:text-gray-300">Home</a></li>
                    <li className="mr-6"><a href="/about" className="text-white hover:text-gray-300">About</a></li>
                    <li><a href="/contact" className="text-white hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Header