import React, { forwardRef } from 'react';
import { Spinner } from 'zeni-ui';

export const CatSpinner = () => <Spinner className="absolute left-[50%] top-[50%]" />;

export const CatContainer = forwardRef(({ children }: { children: React.ReactNode }, ref: any) => (
  <div
    ref={ref}
    className="m-auto mt-8 relative"
    style={{
      width: 450,
      height: 450,
    }}
  >
    {children}
  </div>
));

const Loader = () => (
  <CatContainer>
    <CatSpinner />
  </CatContainer>
);

export default Loader;
