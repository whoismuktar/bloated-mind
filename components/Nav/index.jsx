// import Image from 'next/image'
import { useRouter } from "next/router"
import styles from "./nav.module.scss"
import Logo from "./Logo"
import Link from "next/link";

export default function Nav() {
    const router = useRouter();

    return (
        <div className={`${styles["nav-wrapper"]}`}>
            <nav className={`${styles["nav"]} container mx-auto`}>
                <div className="py-6">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className={`${styles["_logo"]} flex-shrink-0`}>
                                <Logo />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link href="/">
                                        <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                    </Link>

                                    <Link href="/connect">
                                        <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Get Started</a>
                                    </Link>

                                    <Link href="/terms">
                                        <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Terms</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="ml-4 flex items-center md:ml-6">

                                {/* Profile dropdown */}
                                <div className="ml-3 relative">
                                    <div>
                                        <button onClick={()=> router.push("/auth")} className="text-white py-1 px-9 border border-orange rounded-full">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
