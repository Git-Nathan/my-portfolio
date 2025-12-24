import { HTMLAttributes } from 'react';

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card(props: ICardProps) {
  return <div>Card</div>;
}
