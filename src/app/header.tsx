'use client';
import Link from "next/link"
import Image from 'next/image'
import styles from './header.module.scss'

type Props = {};
function Header({}: Props) {
    function goPro(e: React.MouseEvent) {
        console.log('goPro', e)
    }
    return (
        <header className={styles.header}>
            <div className={`${styles.wrap} ${styles.flex}`}>
                <Link href="/">
                    <Image src="svg/main/logo.svg" alt="logo" width={205} height={24} priority></Image>
                </Link>
                <nav className={styles.nav}>
                    <ul className={styles.menu}>
                        <Link href="/service">
                            주요기능
                        </Link>
                        <Link href="/price">
                            요금안내
                        </Link>
                        <Link href="/voucher">
                            비대면바우처
                        </Link>
                        <Link href="/survey">
                            전수조사
                        </Link>
                        <Link href="/blog">
                            블로그
                        </Link>
                    </ul>
                    <div className={styles.buttonWrap}>
                        <button className={styles.btnPrimary} onClick={goPro}>로그인</button>
                        <button className={styles.btnYellow}>무료체험</button>
                        <button className={styles.btnYellow}>문의하기</button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;