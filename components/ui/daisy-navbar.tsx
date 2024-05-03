"use client";
import { useEffect, useState } from "react";

export function NavBar() {
  return (
    <>
      <div className="navbar text-[#FCA311]">
        <div className="navbar-start">
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">HOME</a>
              </li>
              {/* <li>
                <a href="/about">ABOUT</a>
              </li> */}
              <li>
                <a href="/experience">EXPERIENCE</a>
              </li>
              {/* <li>
                <a href="/contact">CONTACT</a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
