import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { CommandIcon, HeartIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <CommandIcon className="sm:block hidden w-5 h-5 text-muted-foreground" />
          <p className="text-center">
            Build by{" "}
            <Link target="_blank"
              className="px-1 underline underline-offset-2"
              href="https://elijs.dev"
            >
              elijs.dev
            </Link>
            . The source code is available on{" "}
            <Link target="_blank"
              className="px-1 underline underline-offset-2"
              href="https://github.com/elizabthpazp/intera-ui"
            >
              GitHub
            </Link>
            .
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex ml-10">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <> 
      <Link target="_blank"
        href="https://github.com/sponsors/elizabthpazp"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Sponsor
      </Link>
    </>
  );
}
