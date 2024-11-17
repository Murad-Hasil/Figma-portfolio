import React from 'react'
import Link from 'next/link';


interface HeaderProps {
  font: { className: string };
}
const Header: React.FC<HeaderProps> = ({ font }) => {
  return (
    <>
    <nav className={font.className}>
        <ul>
            <li><Link href={'/work'}>Works</Link></li>
            <li><Link href={'/blog'}>Blog</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Header;