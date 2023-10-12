import { HtmlIcon, HtmlIconProps } from '../../../assets/svg/html-icon';
import { CssIcon, CssIconProps } from '../../../assets/svg/css-icon';
import {
  JavascriptIcon,
  JavascriptIconProps,
} from '../../../assets/svg/javascript-icon';
import {
  TypescriptIcon,
  TypescriptIconProps,
} from '../../../assets/svg/typescript-icon';
import { ReactIcon, ReactIconProps } from '../../../assets/svg/react-icon';
import { VueJsIcon, VueJsIconProps } from '../../../assets/svg/vue-js-icon';
import { NextJsIcon, NextJsIconProps } from '../../../assets/svg/next-js-icon';
import { NodeJsIcon, NodeJsIconProps } from '../../../assets/svg/node-js-icon';
import {
  MaterialUiIcon,
  MaterialUiIconProps,
} from '../../../assets/svg/material-ui-icon';
import {
  WebpackIcon,
  WebpackIconProps,
} from '../../../assets/svg/webpack-icon';
import { ScssIcon, ScssIconProps } from '../../../assets/svg/scss-icon';
import { ReduxIcon, ReduxIconProps } from '../../../assets/svg/redux-icon';
import { LessIcon, LessIconProps } from '../../../assets/svg/less-icon';
import { JestIcon, JestIconProps } from '../../../assets/svg/jest-icon';
import {
  LinkedInIcon,
  LinkedInIconProps,
} from '../../../assets/svg/linked-in-icon';

export const iconMapper = {
  Html: (props: HtmlIconProps = {}) => <HtmlIcon {...props} />,
  Css: (props: CssIconProps = {}) => <CssIcon {...props} />,
  Scss: (props: ScssIconProps = {}) => <ScssIcon {...props} />,
  Less: (props: LessIconProps = {}) => <LessIcon {...props} />,
  Javascript: (props: JavascriptIconProps = {}) => (
    <JavascriptIcon {...props} />
  ),
  Typescript: (props: TypescriptIconProps = {}) => (
    <TypescriptIcon {...props} />
  ),
  React: (props: ReactIconProps = {}) => <ReactIcon {...props} />,
  Redux: (props: ReduxIconProps = {}) => <ReduxIcon {...props} />,
  VueJs: (props: VueJsIconProps = {}) => <VueJsIcon {...props} />,
  NextJs: (props: NextJsIconProps = {}) => <NextJsIcon {...props} />,
  NodeJs: (props: NodeJsIconProps = {}) => <NodeJsIcon {...props} />,
  MaterialUi: (props: MaterialUiIconProps = {}) => (
    <MaterialUiIcon {...props} />
  ),
  Webpack: (props: WebpackIconProps = {}) => <WebpackIcon {...props} />,
  Jest: (props: JestIconProps = {}) => <JestIcon {...props} />,
  Linkedin: (props: LinkedInIconProps = {}) => <LinkedInIcon {...props} />,
};

export type IconName = keyof typeof iconMapper;
