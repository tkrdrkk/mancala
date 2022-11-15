import React, { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

export const RecoilProvider = ({ children }: PropsWithChildren) => (
  <RecoilRoot>{children}</RecoilRoot>
);
