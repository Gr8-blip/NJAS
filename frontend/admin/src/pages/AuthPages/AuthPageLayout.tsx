import React from "react";
import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
        
        {children}

        {/* Right Side */}
        <div className="relative hidden w-full h-full lg:w-1/2 lg:flex items-center justify-center overflow-hidden bg-slate-950 dark:bg-zinc-950">
          
          {/* Background Glow */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-lg px-10 text-center">

            <h1 className="mb-4 text-4xl font-bold text-white">
              JSPPharm
            </h1>

            <p className="text-lg leading-relaxed text-zinc-400">
              Journal of Science and Practice of Pharmacy.
            </p>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Access the editorial management portal to manage articles,
              journal volumes, submissions, publications, and academic content
              from a single platform.
            </p>
          </div>
        </div>

        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div>

      </div>
    </div>
  );
}