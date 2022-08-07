declare module '*.svg' {
  import {SvgProps} from 'react-native-svg';

  const content: JSX.Element<SvgProps>;

  export default content;
}
