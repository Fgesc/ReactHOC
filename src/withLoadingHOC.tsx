import type { ComponentType } from 'react';
import { Loader } from './Loader';


type WithLoadingProps = {
  isLoading: boolean;
};


export function withLoading<P extends object>(WrappedComponent: ComponentType<P>): ComponentType<P & WithLoadingProps> {
  return ({ isLoading, ...restProps }) => {
    if (isLoading) {
      return <Loader />;
    }
    return <WrappedComponent {...(restProps as P)} />;
  };
}




