import { useEffect, useState } from 'react';
import axios from '@/app/axios';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/router';
import useAPI from './useAPI';
import { useUser } from './useUser';

export function useAuth() {
  const user = useUser();

  const router = useRouter();
  const route = router.route != '/register' ? router.route : '/';
  const { user: userApi } = useAPI();
  const account = useAccount({
    onConnect: async () => {
      if (route == '/register') {
        const result = await fetchUser();

        if (result) {
          router.push('/');
        }
      }
    },
    onDisconnect: () => {
      router.replace('/register');
      user.reset();
    },
  });

  useEffect(() => {
    if (
      (!account.address || !account.isConnected) &&
      router.route != '/register'
    ) {
      router.replace('/register');
      return;
    }

    if (account.address && account.isConnected) {
      fetchUser();
    }
  }, [account.address, account.isConnected]);

  const fetchUser = async () => {
    const data = await userApi.getUser(account.address);

    if ((data instanceof Array && data.length == 0) || !data) {
      if (router.route != '/register') {
        router.push('/register');
      }
      return false;
    }

    user.update(data[0]);
    user.setLogged(true);

    if (router.route == '/register' && data[0]) {
      router.push('/');
    }

    return true;
  };

  return { user, fetchUser };
}
