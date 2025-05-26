'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll.current && currentScroll > 50) {
        // Scroll down: hide header
        setShow(false);
      } else {
        // Scroll up: show header
        setShow(true);
      }
      lastScroll.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={styles.header}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        height: show ? '64px' : '0px',
        overflow: 'hidden',
        transition: 'height 0.4s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: show ? '0 2px 16px #0002' : 'none',
        background: 'rgba(10, 10, 10, 0.98)', // #0a0a0a com alpha 0.98
      }}
    >
      <nav className={`${styles.nav} ${active ? styles.active : ''} px-4 md:px-0`}>
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
              href="#about"
              onClick={e => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                setActive(false);
              }}
            >
              Sobre mim
            </a>
          </li>
          <li>
            <a
              className="font-bold text-gray-400 relative transition-colors duration-200 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-700 hover:after:w-full"
              href="#education"
              onClick={e => {
                e.preventDefault();
                document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' });
                setActive(false);
              }}
            >
              Formação
            </a>
          </li>
          <li>
            <a
              className="font-bold text-gray-400 relative transition-colors duration-200 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-700 hover:after:w-full"
              href="#projects"
              onClick={e => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                setActive(false);
              }}
            >
              Projetos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}