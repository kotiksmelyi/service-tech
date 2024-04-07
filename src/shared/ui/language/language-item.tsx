import { FC } from 'react';
import './language-item.styles.scss';
type Props = {
  flag: string;
  name: string;
};
export const LanguageItem: FC<Props> = ({ flag, name }) => {
  return (
    <div className="language-item">
      <img className="language-item-flag" src={flag} />
      <span>{name}</span>
    </div>
  );
};
