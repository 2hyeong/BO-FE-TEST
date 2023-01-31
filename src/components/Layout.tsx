import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="py-4 d-flex flex-column w-full h-full bg-grey overflow-x-auto">
      {children}
    </section>
  );
}
