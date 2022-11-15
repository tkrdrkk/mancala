import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilProvider } from "@/app/providers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilProvider>
      <Component {...pageProps} />
    </RecoilProvider>
  );
}
