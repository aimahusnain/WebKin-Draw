"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const isAuthenticated = false;

  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <svg
              viewBox="0 0 300 64"
              style={{
                width: "180px",
                height: "40px",
                overflow: "visible",
              }}
            >
              <defs id="SvgjsDefs1001"></defs>
              <g
                id="SvgjsG1007"
                transform="matrix(0.8101851851851851,0,0,0.8101851851851851,-8.101851851851851,-8.101851851851851)"
                fill="#7216f4"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M84.06,50.003C87.751,45.762,90,40.231,90,34.167C90,20.82,79.18,10,65.833,10C59.769,10,54.241,12.249,50,15.938  C45.755,12.249,40.231,10,34.167,10C20.82,10,10,20.82,10,34.167c0,6.064,2.249,11.592,5.938,15.833  C12.249,54.241,10,59.769,10,65.833C10,79.18,20.82,90,34.167,90c6.064,0,11.588-2.249,15.833-5.938  C54.241,87.751,59.769,90,65.833,90C79.18,90,90,79.18,90,65.833c0-6.064-2.249-11.592-5.938-15.833L84.06,50.003z M83.333,34.167  c0,9.648-7.852,17.5-17.5,17.5c-4.388,0-8.355-1.68-11.429-4.362c2.468-3.782,3.929-8.281,3.929-13.138  c0-4.857-1.445-9.369-3.909-13.154c3.069-2.673,7.031-4.346,11.409-4.346C75.481,16.667,83.333,24.519,83.333,34.167z   M34.167,16.667c9.648,0,17.5,7.852,17.5,17.5c0,4.388-1.68,8.355-4.355,11.432c-3.786-2.471-8.288-3.932-13.145-3.932  c-4.857,0-9.369,1.445-13.158,3.912c-2.669-3.072-4.342-7.034-4.342-11.412C16.667,24.519,24.519,16.667,34.167,16.667z   M16.667,65.833c0-9.648,7.852-17.5,17.5-17.5c4.388,0,8.355,1.68,11.432,4.359c-2.471,3.785-3.932,8.284-3.932,13.141  c0,4.857,1.445,9.369,3.912,13.154c-3.072,2.673-7.031,4.346-11.412,4.346C24.519,83.333,16.667,75.481,16.667,65.833z   M65.833,83.333c-9.648,0-17.5-7.852-17.5-17.5c0-4.388,1.68-8.355,4.355-11.432c3.786,2.471,8.288,3.932,13.145,3.932  c4.857,0,9.369-1.445,13.158-3.912c2.669,3.072,4.342,7.034,4.342,11.412C83.333,75.481,75.481,83.333,65.833,83.333z"
                ></path>
              </g>
              <g
                id="SvgjsG1008"
                transform="matrix(1.1753428367233658,0,0,1.1753428367233658,84.62389289272325,2.8361593319828824)"
                fill="#000000"
              >
                <path d="M27.8 15.52 l5.84 0 l-4.52 24.48 l-8.88 0 l-3.2 -14.28 l-3.4 14.28 l-9.36 0 l-3.96 -24.48 l6.12 0 l2.76 18.32 l3.6 -14.28 l8.52 0 l3.44 14.28 z M40.96 27.6 c0.6 0.2 1.28 0.36 2 0.44 c0.72 0.12 1.4 0.16 2.04 0.16 c0.8 0 2.84 -0.16 2.84 -1.32 c0 -1.24 -1.76 -1.28 -2.64 -1.28 c-1.76 0 -3.28 0.4 -4.24 2 z M52.28 33.76 l0 5.6 c-2.24 0.52 -4.48 0.88 -6.8 0.88 c-6.36 0 -11.08 -3.72 -11.08 -10.16 c0 -6.36 4.56 -10.28 10.6 -10.28 c4.12 0 8.88 1.96 8.88 6.64 c0 4.64 -5.04 6.36 -8.92 6.36 c-1.48 0 -2.96 -0.4 -4.32 -0.96 c0.8 2.24 3.2 2.6 5.28 2.6 c1.08 0 2.16 -0.04 3.24 -0.2 c1 -0.08 2.16 -0.2 3.12 -0.48 z M62.84 30 c0 2.96 1.48 4.64 4.48 4.64 c0.84 0 1.6 -0.12 2.2 -0.4 c1.12 -0.44 1.88 -1.28 2.28 -2.44 c0.16 -0.56 0.24 -1.16 0.24 -1.8 s-0.08 -1.24 -0.24 -1.8 c-0.44 -1.24 -1.12 -1.92 -2.28 -2.48 c-0.6 -0.24 -1.36 -0.36 -2.2 -0.36 c-3 0 -4.48 1.68 -4.48 4.64 z M56.84 12 l6 0 l0 10 c1.36 -1.56 3.2 -2.2 5.24 -2.2 c5.84 0 9.96 4.68 9.96 10.28 c0 6.32 -4.68 10.12 -10.64 10.12 c-6.2 0 -10.56 -4.08 -10.56 -10.2 l0 -18 z M81.12 15.52 l6 0 l0 11.48 l7.88 -11.48 l7.44 0 l-8.56 12.24 l8.88 12.24 l-7.36 0 l-8.28 -11.52 l0 11.52 l-6 0 l0 -24.48 z M103.96 20 l6 0 l0 20 l-6 0 l0 -20 z M106.96 18.12 c-2.04 0 -3.48 -1.44 -3.48 -3.48 c0 -2.08 1.44 -3.44 3.48 -3.44 c2.08 0 3.44 1.36 3.44 3.44 c0 2.12 -1.32 3.48 -3.44 3.48 z M134.56 30 l0 10 l-6 0 l0 -10 c0 -2.76 -1.28 -4.64 -4.2 -4.64 c-2.88 0 -4.2 1.92 -4.2 4.64 l0 10 l-6 0 l0 -10 c0 -6.16 4.24 -10.2 10.2 -10.2 c6.2 0 10.2 4.24 10.2 10.2 z M155.92000000000002 40 l-8.6 0 l0 -24.48 l8.6 0 c7.48 0 12.6 4.88 12.6 12.24 c0 7.56 -5.4 12.24 -12.6 12.24 z M153.32000000000002 21.08 l0 13.36 l2.6 0 c4.24 0 6.6 -2.68 6.6 -6.68 c0 -0.92 -0.12 -1.76 -0.36 -2.6 c-1.04 -2.92 -3.32 -4.08 -6.24 -4.08 l-2.6 0 z M177.96000000000004 30 l0 10 l-6 0 l0 -9.96 c0 -6.64 4.88 -10.24 11.04 -10.24 c0.2 0 0.48 0 0.76 0.04 s0.6 0.12 0.88 0.16 l0 5.8 c-0.2 -0.04 -0.44 -0.08 -0.72 -0.12 s-0.52 -0.08 -0.72 -0.08 c-1 0 -1.8 0.12 -2.48 0.32 c-1.12 0.4 -2.12 1.16 -2.48 2.36 c-0.2 0.52 -0.28 1.12 -0.28 1.72 z M201.28000000000003 30 c-0.16 -2.92 -1.48 -4.64 -4.52 -4.64 c-0.84 0 -1.56 0.12 -2.16 0.36 c-1.84 0.84 -2.52 2.4 -2.52 4.32 c0 0.64 0.08 1.24 0.28 1.76 c0.6 2.08 2.4 2.84 4.4 2.84 c3.04 0 4.52 -1.64 4.52 -4.64 z M208.88000000000005 40 l-6 0 c-0.4 -1 -0.76 -2 -1 -3.04 c-1.36 2.24 -3.44 3.24 -6 3.24 c-5.72 0 -9.8 -4.8 -9.8 -10.28 c0 -6.32 4.72 -10.12 10.68 -10.12 c6.36 0 10.36 4.08 10.52 10.2 c0.04 0.52 0.04 1.12 0.04 1.84 c0 2.8 0.44 5.6 1.56 8.16 z M235.56000000000003 20 l6 0 c1.32 3.08 1.4 6.68 1.4 10 c0 5.76 -3.6 10.2 -9.44 10.2 c-2.84 0 -5.12 -1.36 -6.56 -3.8 c-1.4 2.4 -3.76 3.8 -6.56 3.8 c-5.68 0 -9.44 -3.88 -9.44 -9.4 l0 -10.8 l6 0 l0 10.8 c0 2.24 1.08 3.84 3.44 3.84 c2.4 0 3.56 -1.56 3.56 -3.84 l0 -10.8 l6 0 l0 10.8 c0 2.28 1.16 3.84 3.56 3.84 c2.64 0 3.44 -2.4 3.44 -4.64 c0 -3.12 -0.16 -7.08 -1.4 -10 z"></path>
              </g>
            </svg>
          </Link>

          <MobileNav />

          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href="/about"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              About
            </Link>
            <Link
              href="/careers"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Careers
            </Link>
            <Link
              href="/history"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              History
            </Link>
            <Link
              href="/services"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Projects
            </Link>
          </div>
          <div className="hidden items-center space-x-4 sm:flex">
            {/* <Button
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Sign in
            </Button> */}
            {isAuthenticated ? (
              <Button
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Logout
              </Button>
            ) : (
              <Button
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Button
              </Button>
            )}

            {/* <Button
              className={buttonVariants({
                size: "sm",
              })}
            >
              Get started <ArrowRight className="ml-1.5 h-5 w-5" />
            </Button> */}

            {isAuthenticated ? (
              <Button size="sm">Dashboard</Button>
            ) : (
              <Button
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Sign Up
              </Button>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
