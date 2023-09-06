import { chakra, Icon, IconProps } from '@chakra-ui/react';

export interface VueJsIconProps extends IconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizes = {
  sm: { w: '14px', h: '10px' },
  md: { w: '20px', h: '14px' },
  lg: { w: '26px', h: '18px' },
  xl: { w: '52px', h: '36px' },
};

export function VueJsIcon(props: VueJsIconProps) {
  const { size = 'xl', color = 'white', ...restProps } = props;
  const { w, h } = sizes[size] ?? {};

  return (
    <Icon
      fill='none'
      h={h}
      w={w}
      viewBox='0 0 128 128'
      {...restProps}
    >
      <chakra.path
        fillRule='evenodd'
        clipRule='evenodd'
        fill={color}
        d='M0 8.934l49.854.158 14.3 24.415 14.3-24.415 49.548-.158-63.835 110.134zm126.987.637l-24.37.021-38.473 66.053L25.692 9.592l-24.75-.02 63.212 107.89z'
      ></chakra.path>
    </Icon>
  );
}
