
import { useEffect, useState, useRef } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Button } from '../components/ui/button';

export const Route = createFileRoute('/blog')({
  component: RouteComponent,
});

function RouteComponent() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const scriptLink = 'https://js.supascribe.com/v1/loader/zvIyWyAxE5Yq6S2qjKR7gMN0TG52.js';

  useEffect(() => {
    // Inject the script
    const script = document.createElement('script');
    script.src = scriptLink;
    script.async = true;
    document.body.appendChild(script);

    // Observe changes in the feed container
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === 'childList' &&
          containerRef.current &&
          containerRef.current.children.length > 0) {
          setLoading(false); // Content has loaded
          observer.disconnect(); // Stop observing once loaded
        }
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current, { childList: true });
    }

    return () => {
      document.body.removeChild(script);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="mx-20 flex-col">

      <div className="flex items-center justify-around text-center mb-13">
        <div className='text-3xl font-bold'>manuelbamise writes</div>
      </div>

      {loading && (
        <div className="text-center py-20 text-lg font-semibold animate-pulse">
          Loading feed...
        </div>
      )}

      <div
        data-supascribe-embed-id="396016599949"
        data-supascribe-feed
        ref={containerRef}
        className={`${loading ? 'hidden' : 'shadow-xl border dark:border-white/10 rounded'}`}
      />


      <div className="flex items-center justify-around text-center mb-13 mt-6">
        <Button className='p-6 bg-white text-black border border-black/10 hover:shadow-2xl hover:bg-transparent hover:border-black dark:bg-transparent dark:text-white dark:hover:shadow-white dark:border-white/30'>
          <a href='#'>          Check out full blog site       </a>
        </Button>
      </div>
    </div>
  );
}

