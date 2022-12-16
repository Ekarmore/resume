// import { Inter } from '@next/font/google';
import { useState } from "react";

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  const [isShow, setIsShow] = useState(true)
  const onChange = (e:boolean) => {
    setIsShow(e)
  }
  return (
    <>
      <main>{children}</main>
    </>
  );
}