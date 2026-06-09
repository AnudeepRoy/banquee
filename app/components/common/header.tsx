export default function Header () {
    return (
        <header>
            <div className="container header flex justify-between items-center">
                <img src='/icons/banquee.svg' alt="logo" />
                <nav className="flex">
                    <a href="">Features</a>
                    <a href="">Compare</a>
                    <a href="">Support</a>
                    <a href="">Blog</a>
                </nav>
            </div>
        </header>
    )
}