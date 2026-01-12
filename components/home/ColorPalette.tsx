import { ColorButton } from '../common/button/ColorButton';

export function ColorPalette() {
  return (
    <div className='flex items-center gap-5'>
      <ColorButton color='#169eb4' />
      <ColorButton color='#0085FE' />
      <ColorButton color='#7655BE' />
      <ColorButton color='#ff6663' />
    </div>
  );
}
