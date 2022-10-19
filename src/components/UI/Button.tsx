import * as S from './styles';

export interface UIButtonProps {
  text: string;
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
  marginRight?: number;
  type?: 'button' | 'submit';
}

const UIButton: React.FC<UIButtonProps> = ({
  text,
  onClick,
  selected,
  disabled,
  marginRight,
  type = 'button',
}) => {
  return (
    <S.Button
      type={type}
      text={text}
      onClick={onClick}
      selected={selected}
      disabled={disabled}
      marginRight={marginRight}
    >
      {text}
    </S.Button>
  );
};

export default UIButton;
