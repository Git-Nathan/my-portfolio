import { useThemeStore } from '@/stores/theme.store';

export type IToggleProps = {
  isChecked: boolean;
  onToggle: (checked: boolean) => void;
};

export function Toggle(props: IToggleProps) {
  const { isChecked, onToggle } = props;

  const { mainColor } = useThemeStore();

  return (
    <button
      onClick={() => onToggle(!isChecked)}
      className='h-6 w-10 rounded-full'
      style={{
        backgroundColor: `${mainColor}63`,
      }}
    />
  );
}
