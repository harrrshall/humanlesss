"use client";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body suppressHydrationWarning className="antialiased min-h-screen">
      {children}
    </body>
  );
}
