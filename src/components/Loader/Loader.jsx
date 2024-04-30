import { Bars } from 'react-loader-spinner';
import css from './Loader.module..css';

export const Loader = () => {
  return (
    <Bars
      height="60"
      width="120"
      color="#727378"
      ariaLabel="bars-loading"
      wrapperClass={css.loader}
      visible={true}
    />
  );
};
