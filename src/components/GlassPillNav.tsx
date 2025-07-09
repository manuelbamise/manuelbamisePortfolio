
import { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';

type Tab = 'Home' | 'Projects' | 'Video content' | 'Blog' | 'ThemeSwitcher';

type navItem = {
  label: string;
  type: 'tab' | 'custom';
  component?: React.ReactNode;
};

const navItems: navItem[] = [
  { label: 'Home', type: 'tab' },
  { label: 'Projects', type: 'tab' },
  { label: 'Video content', type: 'tab' },
  { label: 'Blog', type: 'tab' },
  { label: 'ThemeSwitcher', type: 'custom', component: <ThemeSwitcher /> },
]


// const tabs: Tab[] = ['Home', 'Projects', 'Video content', 'Blog'];

export const GlassPillNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Home');

  return (
    <div className="flex items-center justify-center py-6 sticky top-0 z-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-lg p-3 flex gap-2 shadow-lg">
        {/* <ThemeSwitcher /> */}
        {navItems.map((item) => item.type == 'tab' ? (

          <button
            key={item.label}
            onClick={() => setActiveTab(item.label as Tab)}
            className={`px-6 py-3 rounded-lg transition-all duration-300 text-sm font-semibold
              ${activeTab === item.label
                ? 'bg-gray-700/50 text-white dark:text-black dark:bg-white shadow-inner backdrop-blur-md'
                : 'text-black dark:text-white hover:bg-gray-700/10'}`}
          >
            {item.label}
          </button>
        ) : <div key={item.label}>{item.component}</div>)}
      </div>
    </div>
  );
};
