import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { LayoutState, setColor, update } from '@/features/layout/layout-slice';

export const useLayout = () => {
  const dispatch = useAppDispatch();
  const layout = useAppSelector((state) => state.layout);

  return {
    layout,
    update: (payload: Omit<LayoutState, 'color'>) => dispatch(update(payload)),
    setColor: (payload: LayoutState['color']) => dispatch(setColor(payload)),
  };
};
