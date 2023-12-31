import { PropsIcon } from '@/interfaces';
import { FC } from 'react';

export const Clock: FC<PropsIcon> = ({ size = 20, color = '#fff' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
      <path
        d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm3.293 14.707L11 12.414V6h2v5.586l3.707 3.707-1.414 1.414z'
        fill={color}
      />
    </svg>
  );
};
