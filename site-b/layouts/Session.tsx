'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  children: React.ReactNode;
}

const Session: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // if (window.location.search) {
    //   const sessionA = window.location.search.split('=')[1];
    //   window.localStorage.setItem('session', atob(sessionA));
    // }
    window.addEventListener('message', (event) => {
      if (event.origin === 'http://localhost:4002') {
        const data = event.data;
        localStorage.setItem(data.key, data.value);
      }
    });
    if (window.localStorage.getItem('session')) {
      return router.push('/');
    }
    return router.push('/login');
  }, []);

  return <>{children}</>;
};

export default Session;
