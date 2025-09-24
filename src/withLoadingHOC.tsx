import type { ComponentType } from 'react';
import { Loader } from './Loader';


type WithLoadingProps = {
  isLoading: boolean;
};


export function withLoading<T extends object>(WrappedComponent: ComponentType<T>): ComponentType<T & WithLoadingProps> {
  return ({ isLoading, ...restProps }) => {
    if (isLoading) {
      return <Loader />;
    }
    return <WrappedComponent {...(restProps as T)} />;
  };
}




