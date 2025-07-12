
import { useEffect, useMemo, useState } from 'react';
import ThemeSwitcher from '../../lib/theme-config/ThemeSwitcher';
import { Link, useRouter } from '@tanstack/react-router';





export const GlassPillNav: React.FC = () => {

  type navItemTypes = 'Home' | 'Projects' | 'Video content' | 'Blog' | 'ThemeSwitcher';

  const [activeTab, setActiveTab] = useState<navItemTypes>('Home');


  const router = useRouter()
  const location = router.state.location.pathname;



  type navItem = {
    label: string;
    type: 'tab' | 'custom';
    route?: string;
    component?: React.ReactNode;
  };

  const navItems: navItem[] = useMemo(() => [
    { label: 'Home', type: 'tab', route: '/' },
    { label: 'Projects', type: 'tab', route: '/projects' },
    { label: 'Video content', type: 'tab', route: '/video-content' },
    { label: 'Blog', type: 'tab', route: '/blog' },
    { label: 'ThemeSwitcher', type: 'custom', component: <ThemeSwitcher /> },
  ], [])

  useEffect(() => {
    navItems.forEach((item) => {
      if (item.route && (location === item.route || location.includes(item.route))) {
        setActiveTab(item.label as navItemTypes)
      }
    })

  }, [location, navItems])


  return (
    <div className="flex items-center justify-center py-6 sticky top-0 z-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-lg p-3 flex gap-2 shadow-lg">

        {navItems.map((item) => item.type == 'tab' ? (
          <div key={item.label}
          >
            <div
              onClick=
              {() => (setActiveTab(item.label as navItemTypes))}
              className={` py-3 rounded-lg transition-all duration-300 text-sm font-semibold               ${activeTab === item.label
                ? 'bg-gray-700/50 bg-none text-white dark:text-black dark:bg-white shadow-inner backdrop-blur-md'
                : 'text-black dark:text-white dark:hover:bg-white/10 hover:bg-gray-700/10'}`}
            >
              <Link to={item.route} className='w-full h-full px-6 py-3.5 '>{item.label}</Link>
            </div></div>
        ) : <div key={item.label}>{item.component}</div>)}

      </div>
    </div >
  );
};
