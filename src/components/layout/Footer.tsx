"use client";

import Link from "next/link";

// Placeholder for a LinkedIn Icon component or direct SVG
// You can find a simple LinkedIn SVG icon online and paste it here
// or create a new component for it.
const LinkedInIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M19 0h-14C2.239 0 1 1.239 1 3v18c0 1.761 1.239 3 3 3h14c1.761 0 3-1.239 3-3V3c0-1.761-1.239-3-3-3zM7.5 20H4V9h3.5v11zM5.75 7.75c-1.03 0-1.75-.72-1.75-1.68 0-.98.74-1.68 1.79-1.68s1.75.7 1.77 1.68c0 .96-.74 1.68-1.8 1.68zM20 20h-3.5v-5.5c0-1.3-.47-2.2-1.64-2.2-.89 0-1.42.6-1.65 1.17-.08.2-.1.5-.1.8V20H9.6s.05-9 0-11H13v1.6c.46-.7 1.28-1.7 3.1-1.7 2.27 0 3.3 1.5 3.3 4.7V20z"/>
</svg>

);

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
          {/* Kept essential links and added LinkedIn */}
          <div className="flex gap-6 items-center"> {/* Added items-center for vertical alignment if icons have different heights */}
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link href="https://www.linkedin.com/company/humanlesssai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
