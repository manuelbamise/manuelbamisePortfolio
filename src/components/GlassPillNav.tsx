
import { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { Link } from '@tanstack/react-router';

type Tab = 'Home' | 'Projects' | 'Video content' | 'Blog' | 'ThemeSwitcher';

type navItem = {
  label: string;
  type: 'tab' | 'custom';
  route?: string;
  component?: React.ReactNode;
};

const navItems: navItem[] = [
  { label: 'Home', type: 'tab', route: '/' },
  { label: 'Projects', type: 'tab', route: '/projects' },
  { label: 'Video content', type: 'tab', route: '/video-content' },
  { label: 'Blog', type: 'tab', route: '/blog' },
  { label: 'ThemeSwitcher', type: 'custom', component: <ThemeSwitcher /> },
]



export const GlassPillNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Home');

  return (
    <div className="flex items-center justify-center py-6 sticky top-0 z-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-lg p-3 flex gap-2 shadow-lg">

        {navItems.map((item) => item.type == 'tab' ? (
          <div key={item.label}
          >
            <div
              onClick={() => setActiveTab(item.label as Tab)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 text-sm font-semibold
              ${activeTab === item.label
                  ? 'bg-gray-700/50 bg-none text-black dark:text-black dark:bg-white shadow-inner backdrop-blur-md'
                  : 'text-black dark:text-white hover:bg-gray-700/10'}`}
            >
              <Link to={item.route}>{item.label}</Link>
              {/* {item.label} */}
            </div></div>
        ) : <div key={item.label}>{item.component}</div>)}
      </div>
    </div>
  );
};
