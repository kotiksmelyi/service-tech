import { ButtonProps, Button as ButtonAntD } from 'antd';
import { FC } from 'react';
import './button.styles.scss';

const Button: FC<ButtonProps> = ({ ...props }) => {
  return <ButtonAntD {...props} className="ui-button" />;
};

export default Button;
