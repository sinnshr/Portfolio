import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 640; // matches Tailwind `sm` breakpoint

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false);

    useEffect(() => {
        function onResize() {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        }

        window.addEventListener('resize', onResize);
        onResize();
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return isMobile;
}
