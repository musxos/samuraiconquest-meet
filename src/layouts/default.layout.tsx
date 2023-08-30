'use client';

import { Aside } from '@/components/layout/aside.component';
import { Navbar } from '@/components/layout/navbar.component';
import { useLayout } from '@/hooks/useLayout';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export type DefaultLayoutProps = {
  children: JSX.Element;
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const account = useAccount();
  const layout = useLayout();

  return (
    <>
      <div className="sticky top-10 mx-auto flex h-full w-full max-w-screen-lg justify-center">
        <div
          className={`absolute h-[500px] w-[500px] blur-[500px] transition-all duration-1000 bg-${layout.layout.color}-500`}
        ></div>
      </div>
      <div className="flex">
        <Aside></Aside>
        <main className="relative flex max-w-full grow flex-col">
          <div className="absolute flex w-full px-6 py-8">
            <Navbar className="w-full"></Navbar>
          </div>
          <div className="grow">{children}</div>
        </main>
      </div>
    </>
  );
}
