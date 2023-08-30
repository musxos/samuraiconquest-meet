import { useLayout } from '@/hooks/useLayout';
import { DefaultLayout } from '@/layouts/default.layout';
import { useEffect, useRef, useState } from 'react';
import { Transition } from '@headlessui/react';
import classNames from 'classnames';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';

export function Card({ className, data }: { className?: string; data: any }) {
  useAuth();
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="mb-4 flex flex-col items-center justify-center">
        <div className="relative h-28 w-28 rounded-3xl">
          <div className="absolute flex h-full w-full items-center justify-center">
            <div className="h-44 w-44 rounded-full bg-yellow-500/30 blur-[100px]"></div>
          </div>
          <div className="z-20">
            <Image
              width={512}
              height={512}
              alt="card"
              className="!z-20 h-28 w-28 rounded-3xl backdrop-blur-3xl"
              src="/art/1.png"
            />
          </div>
        </div>
        <h4 className="mt-4 text-xl font-medium">{data.name}</h4>
      </div>
      <div className="top-path h-6 w-72 bg-gradient-to-b from-white/5 to-neutral-950/10"></div>
      <div className="flex h-44 w-72 flex-col items-center bg-gradient-to-b from-white/5 via-neutral-950/50 to-neutral-950/0 px-4 py-2 backdrop-blur-2xl">
        <div className="-mt-6 flex h-10 w-10 items-center justify-center rounded bg-white/80">
          <i className="ri-award-fill text-lg text-black/50"></i>
        </div>
        <h4 className="mt-3 text-sm">{data.point}</h4>
        <div className="mt-5 h-0.5 w-full bg-neutral-900"></div>

        <div className="mt-4">
          <div className="flex items-center gap-2">
            <i className="ri-vip-diamond-fill text-lg text-blue-400"></i>
            <span className="text-lg font-medium">5.000</span>
          </div>
          <div className="mt-1 text-center text-sm">Prize</div>
        </div>
      </div>
    </div>
  );
}

function UsersSection() {
  const [loaded, setLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return;
  }

  return (
    <div>
      <div className="flex gap-8">
        {users[1] && <Card data={users[1]} className="mt-12"></Card>}
        {users[0] && <Card data={users[0]}></Card>}
        {users[2] && <Card data={users[2]} className="mt-12"></Card>}
      </div>

      <div className="mt-24 w-full max-w-screen-xl">
        <div className="flex flex-col">
          <div className="mb-4 grid grid-cols-4 px-6 py-4">
            <div className="col-span-1">Place</div>
            <div className="col-span-1">Username</div>
            <div className="col-span-1">Points</div>
            <div className="col-span-1 text-right">Prize</div>
          </div>

          <ul className="flex w-full flex-col gap-y-4">
            {users.map((user, i) => (
              <li
                key={i}
                className="grid grid-cols-4 rounded-xl bg-neutral-900/40 px-6 py-4 backdrop-blur-3xl"
              >
                <div className="col-span-1 flex items-center gap-1">
                  <i className="ri-arrow-up-double-fill text-2xl"></i>
                  <span className="text-sm">{i + 1}</span>
                </div>
                <div className="col-span-1 flex items-center gap-1">
                  {user.nickName}
                </div>
                <div className="col-span-1 flex items-center gap-1">
                  {user.point}
                </div>
                <div className="col-span-1 flex items-center gap-1">
                  <div className="ml-auto flex gap-1 px-2 py-1">
                    <i className="ri-vip-diamond-fill text-lg text-blue-400"></i>
                    <span className="text-lg font-medium">5.000</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ClansSection() {
  const [loaded, setLoaded] = useState(false);
  const [clans, setClans] = useState([]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return;
  }

  return (
    <div>
      <div className="flex gap-8">
        <Card data={clans[1]} className="mt-12"></Card>
        <Card data={clans[0]}></Card>
        <Card data={clans[2]} className="mt-12"></Card>
      </div>
    </div>
  );
}

export default function Top() {
  const layout = useLayout();
  const [type, setType] = useState(0);

  useEffect(() => {
    layout.update({
      messages: false,
      notifications: false,
      profile: true,
      search: false,
      wallet: true,
    });
  }, []);

  const defaultStyle = 'rounded-2xl hover:bg-neutral-950/50 px-12 py-3';

  const clanStyle = classNames(defaultStyle, {
    'bg-neutral-950/50': type === 1,
  });

  const userStyle = classNames(defaultStyle, {
    'bg-neutral-950/50': type === 0,
  });

  if (true) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="text-4xl font-semibold">Any Season not played yet</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto mb-8 mt-24 flex max-w-screen-2xl flex-col items-center">
      <div className="mx-auto mb-12 rounded-2xl bg-neutral-950/30 p-2 backdrop-blur-2xl">
        <button onClick={() => setType(0)} className={userStyle}>
          Players
        </button>
        <button onClick={() => setType(1)} className={clanStyle}>
          Empires
        </button>
      </div>

      <Transition
        show={type === 0}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <UsersSection></UsersSection>
      </Transition>
      <Transition
        show={type === 1}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ClansSection></ClansSection>
      </Transition>
    </div>
  );
}

Top.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
