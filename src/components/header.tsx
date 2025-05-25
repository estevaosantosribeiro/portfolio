'use client';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [active, setActive] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${active ? styles.active : ''}`}>
        <div className='font-bold text-2xl text-white'>
          Estevão{' '}
          <span
            style={{
              color: '#5df5ff',
              textShadow: '0 0 6px #5df5ff88, 0 0 12px #5df5ff44',
            }}
          >
            Santos
          </span>
        </div>
        <button
          className={styles.hamburger}
          aria-label="Menu"
          aria-expanded={active}
          onClick={() => setActive((prev) => !prev)}
        />
        <ul className={styles.navList}>
          <li>
            <a 
                className="font-bold text-gray-400 relative transition-colors duration-200 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-700 hover:after:w-full"

            href="#about" onClick={() => setActive(false)}>
              Sobre mim
            </a>
          </li>
          <li>
            <a 
            className="font-bold text-gray-400 relative transition-colors duration-200 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-700 hover:after:w-full"
            href="#education" onClick={() => setActive(false)}>
              Formação
            </a>
          </li>
          <li>
            <a 
            className="font-bold text-gray-400 relative transition-colors duration-200 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-700 hover:after:w-full"
            href="#projects" onClick={() => setActive(false)}>
              Projetos
            </a>
          </li>
          <li>
            <a 
            className="font-bold text-gray-400 relative transition-colors duration-200 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-700 hover:after:w-full"
            href="#contact" onClick={() => setActive(false)}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}