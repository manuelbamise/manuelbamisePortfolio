

import { useEffect, useMemo, useState } from 'react';
import { Link, useRouter } from '@tanstack/react-router';
import { Home, Link2, Menu, X } from 'lucide-react';
import ThemeSwitcher from '../../lib/theme-config/themeSwitcher.tsx';
import { motion } from "motion/react"

export const GlassPillNav: React.FC = () => {
  type navItemTypes = 'Home' | 'links' | 'ThemeSwitcher';

  const [activeTab, setActiveTab] = useState<navItemTypes>('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const location = router.state.location.pathname;

  type navItem = {
    label: string;
    type: 'route' | 'custom';
    route?: string;
    href?: string,
    component: React.ReactNode;
  };

  const navItems: navItem[] = useMemo(() => [
    { label: 'Home', type: 'route', route: '/', component: <Home /> },
    { label: 'Links', type: 'route', route: '/links', component: <Link2 /> },
    { label: 'ThemeSwitcher', type: 'custom', component: <ThemeSwitcher /> },
  ], []);

  useEffect(() => {
    navItems.forEach((item) => {
      if (item.route && (location === item.route || location.includes(item.route))) {
        setActiveTab(item.label as navItemTypes);
      }
    });
  }, [location, navItems]);

  return (
    <motion.div

      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeIn' }}

      className=" md:px-6 mt-4 bg-white/30 md:bg-transparent dark:bg-transparent  flex items-center md:justify-center justify-end  py-6 sticky top-0 z-4"
    >
      {/* Mobile hamburger */}
      <div className="md:hidden  outline-white mt-4 mr-4">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Navigation menu */}
      <div
        className={`
            ${menuOpen ? 'flex' : 'hidden'}
            flex-col md:flex md:flex-row gap-3 md:gap-2 items-start md:items-center absolute md:static top-full left-0 w-full md:w-auto bg-white/20 p-4 md:p-4 md:rounded-lg md:bg-white/10 md:border md:border-black  backdrop-blur-md z-40       `}
      >
        {navItems.map((item) =>
          item.type == 'route' ? (
            <div key={item.label}>
              <div
                onClick={() => {
                  setActiveTab(item.label as navItemTypes);
                  setMenuOpen(false);
                }}
                className={`rounded-lg text-sm font-semibold transition-all duration-300
                    ${activeTab === item.label
                    ? 'bg-gray-700/50 text-white dark:text-black dark:bg-white shadow-inner backdrop-blur-md'
                    : 'text-black dark:text-white hover:bg-gray-700/10 dark:hover:bg-white/10'}
                  `}
              >
                <Link to={item.route} className="block px-6 py-3.5 w-full h-full">
                  {item.component}
                </Link>
              </div>
            </div>
          ) : (<div key={item.label} className='text-black dark:text-white hover:bg-gray-700/10 dark:hover:bg-white/10 rounded-lg transition-all duration-300 cursor-pointer'><a href={item.href} className='block px-6 py-3.5 w-full h-full'>
            {item.component}
          </a></div>))}
      </div>
    </motion.div>
  );
};
