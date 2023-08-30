'use client';

import { useLayout } from '@/hooks/useLayout';
import { CustomConnectButton } from '../rainbow/connect-button.component';
import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';
import { useUser } from '@/hooks/useUser';

export type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps) {
  const account = useAccount({
    onConnect({ address }) {},
    onDisconnect() {},
  });
  const { layout } = useLayout();
  const user = useUser();

  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, [account.isConnected, account.address]);

  return (
    <nav className={`flex h-14 max-w-full justify-between ${className}`}>
      {layout.search && (
        <div className="backdrop-filter-xl flex items-center rounded-xl border border-violet-500/10 bg-neutral-900/10 px-4 lg:px-6">
          <i className="ri-search-line mr-3 text-lg"></i>
          <input
            className="w-44 bg-transparent py-3 outline-none lg:w-96"
            placeholder="Search for transaction, item, etc"
            type="text"
          />
        </div>
      )}

      <div className="ml-auto flex gap-2">
        <CustomConnectButton />
        {mount && account.isConnected && layout.notifications && (
          <button className="backdrop-filter-xl h-14 w-14 rounded-xl border border-violet-500/10 bg-neutral-900/10 transition">
            <i className="ri-notification-3-line text-lg"></i>
          </button>
        )}
        {mount && account.isConnected && layout.messages && (
          <button className="backdrop-filter-xl h-14 w-14 rounded-xl border border-violet-500/10 bg-neutral-900/10 transition">
            <i className="ri-message-3-line text-lg"></i>
          </button>
        )}
        {mount && account.isConnected && layout.profile && (
          <button className="backdrop-filter-xl hidden h-14 rounded-xl border border-violet-500/10 bg-neutral-900/10 px-6 py-3 transition lg:block">
            {user.user.nickName}
          </button>
        )}
      </div>
    </nav>
  );
}
