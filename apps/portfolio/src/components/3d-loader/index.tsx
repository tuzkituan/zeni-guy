import React, { forwardRef } from 'react';
import { Spinner } from 'zeni-ui';

export const CatSpinner = () => <Spinner className="absolute left-[50%] top-[50%]" />;

export const CatContainer = forwardRef(({ children }: { children: React.ReactNode }, ref: any) => (
  <div ref={ref} className="m-auto mt-8 relative sm:w-[450px] sm:h-[450px] w-[260px] h-[260px]">
    {children}
  </div>
));

const Loader = () => (
  <CatContainer>
    <CatSpinner />
  </CatContainer>
);

export default Loader;
