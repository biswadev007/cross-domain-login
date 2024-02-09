'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { userDetails, lks } from '../data';

const Iframe: React.FC<{ iframe: string }> = ({ iframe }) => {
  // window.addEventListener('message', (event) => {
  //   if (event.origin === 'http://localhost:4002') {
  //     const data = event.data;
  //     localStorage.setItem("session", "sdbfjbhsdfjsdbjfbj-dsfbsdhfb-fdfjdjnb");
  //   }
  // });
  return <div dangerouslySetInnerHTML={{ __html: iframe ? iframe : '' }} />;
};

export default function Home() {
  let selfcareWindow: any;
  const router = useRouter();
  const session = () => window.localStorage.getItem('session');
  const targetUrl = 'http://localhost:8082/';
  const nIframe = `<iframe height="200px" style="width: 300px;" id="selfcareFrame" name="selfcareFrame" scrolling="no" title="fx." src="${targetUrl}" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>`;

  const [showIframe, setShowIframe] = useState(false);

  const handleClick = () => {
    window.localStorage.removeItem('session');
    return router.push('/login');
  };

  // const handleLoginToSiteB = () => {
  //   const encodedSession = btoa(session || '');
  //   const redirectUrl = `http://localhost:8082/login?session=${encodedSession}`;
  //   window.open(redirectUrl, '_blank');
  // };

  const onLoadingDone = () => {
    selfcareWindow.postMessage(
      JSON.stringify({
        key: 'session',
        method: 'set',
        data: JSON.stringify({
          userId: '63b817be6d786acd9d4b3a8a',
          sessionId:
            '63b817be6d786acd9d4b3a8a-963e0716f693193e7ce1f09f2e66bac3de729880985909ac672e6c4345374750',
        }),
      }),
      targetUrl
    );
    selfcareWindow.postMessage(
      JSON.stringify({ key: 'lastKnownState', method: 'remove' }),
      targetUrl
    );
    selfcareWindow.postMessage(
      JSON.stringify({ key: 'hideTopMenu', method: 'hideTopMenu', data: true }),
      targetUrl
    );
    selfcareWindow.postMessage(
      JSON.stringify({
        key: 'currentUserRole',
        method: 'set',
        data: 'admin',
      }),
      targetUrl
    );
    selfcareWindow.postMessage(
      JSON.stringify({ key: 'language', method: 'set', data: 'en_EN' }),
      targetUrl
    );
    selfcareWindow.postMessage(
      JSON.stringify({
        key: 'NG_TRANSLATE_LANG_KEY',
        method: 'set',
        data: 'en_EN',
      }),
      targetUrl
    );
    selfcareWindow.postMessage(
      JSON.stringify({
        key: 'userDetails',
        method: 'set',
        data: JSON.stringify(userDetails),
      }),
      targetUrl
    );
    selfcareWindow.postMessage(
      JSON.stringify({
        key: 'username',
        method: 'set',
        data: 'biswajit.paul@obloliving.com',
      }),
      targetUrl
    );
    selfcareWindow.postMessage(
      JSON.stringify({
        key: 'lastKnownState',
        method: 'set',
        data: JSON.stringify(lks),
      }),
      targetUrl
    );

    // const redirectUrl = targetUrl;
    // window.open(redirectUrl, '_blank');
  };

  useEffect(() => {
    if (showIframe && session()) {
      const iframe = (input: HTMLElement | null): input is HTMLIFrameElement =>
        input !== null && input.tagName === 'IFRAME';
      let frame = document.getElementById('selfcareFrame');
      if (iframe(frame) && frame.contentWindow) {
        selfcareWindow = frame.contentWindow;

        frame.onload = onLoadingDone;
      }
    }
  }, [showIframe, session]);

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <h1 className='text-3xl'>This is logged in page....</h1>
      {/* <button
        onClick={handleLoginToSiteB}
        className='h-10 w-64 shadow-2xl rounded-md border bg-green-500 text-white hover:opacity-60'
      >
        Login to Site B
      </button> */}
      <button
        onClick={() => setShowIframe((prev) => !prev)}
        className='h-10 w-64 shadow-2xl rounded-md border bg-orange-500 text-white hover:opacity-60'
      >
        Show hide iFrame
      </button>
      <button
        onClick={handleClick}
        className='h-10 w-64 shadow-2xl rounded-md border bg-cyan-500 text-white hover:opacity-60'
      >
        Log out
      </button>
      {showIframe && <Iframe iframe={nIframe} />}
    </div>
  );
}
