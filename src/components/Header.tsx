import Link from "next/link"
import Image from 'next/image'

export default function Header() {
    return (
        <header>
            <Link href="/">
                <Image src="svg/main/logo.svg" alt="logo" width={100} height={24} priority></Image>
            </Link>
            <nav>
                <Link href="/service">
                    주요기능
                </Link>
                <Link href="/service">
                    요금안내
                </Link>
                <Link href="/service">
                    비대면바우처
                </Link>
                <Link href="/service">
                    전수조사
                </Link>
                <Link href="/service">
                    블로그
                </Link>
            </nav>
        </header>
    )
}