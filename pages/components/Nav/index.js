// import Image from 'next/image'
import styles from "./nav.module.scss"

export default function Nav() {
    return (
        <div className={`${styles["nav-wrapper"]}`}>
            <nav className={`${styles["nav"]} container mx-auto`}>
                <div className="py-6 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className={`${styles["_logo"]} flex-shrink-0`}>
                                <h1>Giraffe</h1> 🦒
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>

                                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Get Started</a>

                                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Terms</a>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">

                                {/* Profile dropdown */}
                                <div className="ml-3 relative">
                                    <div>
                                        <button className="text-white py-1 px-9 border border-orange rounded-full">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            {/* Mobile menu button */}
                            <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-white-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                {/* Heroicon name: outline/ */}

                                {/* Menu open: "hidden", Menu closed: "block" */}
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                {/* Heroicon name: outli */}

                                {/* Menu open: "block", Menu closed: "hidden" */}
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
