import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { UserState, reset, setLogged, update } from '@/features/user-reducer';

export function useUser() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  return {
    user,
    update: (payload: UserState) => dispatch(update(payload)),
    setLogged: (payload: boolean) => dispatch(setLogged(payload)),
    reset: () => dispatch(reset()),
  };
}
