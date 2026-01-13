import { AvatarLeftEye } from '@/icons/AvatarIcon/AvatarLeftEye';
import useMightyMouse from 'react-hook-mighty-mouse';

export function LeftEye() {
  const {
    selectedElement: { position },
  } = useMightyMouse(true, 'left-eye', { x: 45, y: 45 });

  return (
    <div
      className='absolute top-19.5 left-8.25 z-50 flex size-13 items-center justify-center'
      style={{
        transform: `translate(${Number(position.x) / 150}px, ${Number(position.y) / 150}px)`,
      }}
    >
      <AvatarLeftEye
        id='left-eye'
        style={{
          rotate: `${-Number(position.angle) + 150}deg`,
        }}
      />
    </div>
  );
}
