
import { useState } from 'react';

type Tab = 'Home' | 'Projects' | 'Video content' | 'Blog';

const tabs: Tab[] = ['Home', 'Projects', 'Video content', 'Blog'];

export const GlassPillNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Home');

  return (
    <div className="flex items-center justify-center py-6 sticky top-0 z-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-lg p-3 flex gap-2 shadow-lg">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-lg transition-all duration-300 text-sm font-semibold
              ${activeTab === tab
                ? 'bg-gray-700/50 text-white dark:text-black dark:bg-white shadow-inner backdrop-blur-md'
                : 'text-black dark:text-white hover:bg-gray-700/10'}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
