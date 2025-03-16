export default function Header() {
    return (
        <div className="bg-stone-900 w-full sticky top-0">
            <header className="bg-stone-900 text-white py-4 mr-20 ml-20">
                <nav className="flex justify-between pl-5 pr-5">
                    <div className="font-bold text-3xl flex justify-between w-35">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        Gallery
                    </div>
                    <ul className="flex space-x-6">
                        <li><a href="#home" className="hover:text-gray-200">Home</a></li>
                        <li><a href="#about" className="hover:text-gray-200">About</a></li>
                        <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <hr className="border-stone-700"></hr>
        </div>
    );
}
