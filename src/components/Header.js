import React from "react";
import img from "../image/fff.png";
import "./Header.css";

const Header = ({ children }) => {
  return (
    <div>
      <div class="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <div class="w-full navbar border-bttom fixed bg-base-100">
            <div class="flex-1 px-2 mx-2">
                <img className="w-10 rounded-full" src={img} alt="" />
                <span className="ml-1 tracking-widest text-1xl font-bold">NOZE</span>
                <ul className="flex ml-20 font-bold">
                    <li>Overview</li>
                    <li className="mx-5">Specs</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal">
                <li>
                  <p>Per price 12$</p>
                </li>
                <li>
                  <button className="btn btn-success rounded-lg">
                    Per Order
                  </button>
                </li>
              </ul>
            </div>
            <hr />
          </div>
          {children}
        </div>

        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
