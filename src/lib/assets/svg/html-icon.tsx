import { chakra, Icon, IconProps } from '@chakra-ui/react';

export interface HtmlIconProps extends IconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizes = {
  sm: { w: '14px', h: '10px' },
  md: { w: '20px', h: '14px' },
  lg: { w: '26px', h: '18px' },
  xl: { w: '52px', h: '36px' },
};

export function HtmlIcon(props: HtmlIconProps) {
  const { size = 'xl', color = 'teal.200', ...restProps } = props;
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
        d='M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z'
      ></chakra.path>
    </Icon>
  );
}
