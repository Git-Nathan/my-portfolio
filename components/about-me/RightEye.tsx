import { AvatarRightEye } from '@/icons/avatar-icon/AvatarRightEye';
import useMightyMouse from 'react-hook-mighty-mouse';

export function RightEye() {
  const {
    selectedElement: { position },
  } = useMightyMouse(true, 'face-center');

  return (
    <div
      className='absolute top-19.75 right-7.25 z-50 flex size-13 items-center justify-center'
      style={{
        transform: `translate(${Number(position.x) / 150}px, ${Number(position.y) / 150}px)`,
      }}
    >
      <AvatarRightEye
        style={{
          rotate: `${-Number(position.angle) + -150}deg`,
        }}
      />
    </div>
  );
}
