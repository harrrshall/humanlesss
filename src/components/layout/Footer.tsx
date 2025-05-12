"use client";

import Link from "next/link";
// Removed Button import as it's no longer used

// Re-use the Logo component from Navbar (assuming it's exported or defined here)
// If Navbar's Logo is not exported, you might need to redefine it here or import it properly.
// const Logo = () => (
// <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path fillRule="evenodd" clipRule="evenodd" d="M0 50C0 22.3858 22.3858 0 50 0V100C22.3858 100 0 77.6142 0 50Z" fill="currentColor" className="text-primary" />
//   <path fillRule="evenodd" clipRule="evenodd" d="M100 50C100 77.6142 77.6142 100 50 100V0C77.6142 0 100 22.3858 100 50Z" fill="currentColor" className="text-primary opacity-70" />
// </svg>
// );

export function Footer() {
  return (
    // Updated background to bg-accent and adjusted padding
    <footer className="bg-accent py-8">
      <div className="container-custom">
        {/* Removed the multi-column grid */}
        {/* Added top section with logo */}
        {/* <div className="flex justify-center mb-6">
          <Link href="/" aria-label="Homepage">
            <Logo />
          </Link>
        </div> */}

        {/* Simplified bottom section with flexbox */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Humanless Inc. All rights reserved.
          </p>
          {/* Kept essential links */}
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
