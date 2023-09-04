import { chakra, Icon, IconProps } from '@chakra-ui/react';

export interface MaterialUiIconProps extends IconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizes = {
  sm: { w: '14px', h: '10px' },
  md: { w: '20px', h: '14px' },
  lg: { w: '26px', h: '18px' },
  xl: { w: '52px', h: '36px' },
};

export function MaterialUiIcon(props: MaterialUiIconProps) {
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
        d='M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6zM48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z'
      ></chakra.path>
      <chakra.path
        fillRule='evenodd'
        clipRule='evenodd'
        fill={color}
        d='M48 77.8v18.4l32 18.4V96.2L48 77.8zM80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z'
      ></chakra.path>
    </Icon>
  );
}
