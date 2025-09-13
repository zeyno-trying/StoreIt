import React from "react";
import Image from "next/image";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min h-screen">
      <section className="bg-brand p-10 hidden justify-center w-1/2 lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-1 2">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            width={224}
            height={82}
            className="h-auto"
          />
          <div className="space-y-5 text-white">
            <h1 className="h1">Manage your files the best way</h1>
            <p>this is a place where u store all your life </p>
          </div>
          <div>
            <Image
              src="/assets/images/files.png"
              alt="illustration"
              width={342}
              height={342}
              className="transition-all hover:scale-105 hover:rotate-2"
            ></Image>
          </div>
        </div>
      </section>
      {children}
    </div>
  );
};
export default Layout;
