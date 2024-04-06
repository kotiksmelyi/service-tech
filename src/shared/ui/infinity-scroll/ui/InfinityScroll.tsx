import { memo } from '@shared/helpers/memo';
import { ReactNode, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  onScrollEnd?: () => void;
  itemKey?: keyof T;
}

export const InfinityScroll = memo(<T,>({ items, renderItem, itemKey, onScrollEnd }: Props<T>) => {
  const [ref, inView] = useInView({ threshold: 0 });
  useEffect(() => {
    if (inView) {
      onScrollEnd && onScrollEnd();
    }
  }, [inView, onScrollEnd]);

  return (
    <>
      {items.map((i, index) => (
        <div key={itemKey ? (i[itemKey] as string) : index}>{renderItem(i, index)}</div>
      ))}
      <div ref={ref} />
    </>
  );
});
