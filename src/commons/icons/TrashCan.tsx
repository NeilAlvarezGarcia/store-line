import { PropsIcon } from '@/interfaces';
import { FC } from 'react';

export const TrashCan: FC<PropsIcon> = ({ size = 20, color = '#fff' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
      <path
        d='M6 7H5v13a2 2 0 002 2h10a2 2 0 002-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z'
        fill={color}
      />
      <path d='M6 7h8v2H6zm0 4h8v2H6zm5 4h3v2h-3z' fill={color} />
    </svg>
  );
};
