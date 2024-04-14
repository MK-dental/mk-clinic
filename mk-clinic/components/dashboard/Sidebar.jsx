import React, { useEffect, useState } from "react"; // Import useEffect
import Link from "next/link";
import { MdOutlineHistory } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { IoMdArchive } from "react-icons/io";
import { MdOutlineReviews } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { RiUserFill } from "react-icons/ri";
import Signout from "../auth/Signout";
import { createClient } from "../../utils/supabase/component";
import { SupabaseClient } from "@supabase/supabase-js";
export default function Sidebar() {
  // Initialize user state
  const supabase = createClient();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [useremail, setUseremail] = useState("");
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log(event, session);

        if (event === "INITIAL_SESSION") {
          // handle initial session, if necessary
        } else if (event === "SIGNED_IN") {
          // handle sign in event
          const user = session.user;
          const userEmail = user.email;
          setUseremail(userEmail);
          console.log("Signed in user email:", userEmail);
          // You can use userEmail as needed
        } else if (event === "SIGNED_OUT") {
          // handle sign out event, if necessary
        } else if (event === "PASSWORD_RECOVERY") {
          // handle password recovery event, if necessary
        } else if (event === "TOKEN_REFRESHED") {
          // handle token refreshed event, if necessary
        } else if (event === "USER_UPDATED") {
          // handle user updated event, if necessary
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className="flex flex-row lg:hidden">
      <button
          id="menuButton"
          className="lg:hidden  mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
          onClick={toggleSidebar} // Attach onClick event handler
        >
          <svg
            className={`w-6 h-6  ${isSidebarOpen ? "hidden" : "block"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div>
          <Link
            href="/"
            className="text-sm font-semibold  flex items-center lg:ml-2.5"
          >
            <img
              src="/images/logo.png"
              height="80"
              width="80"
              className=" mr-2"
              alt="Logo"
            />
          </Link>
        </div>
       
      </div>

      <aside
        id="sidebar"
        className={`fixed z-20 h-full top-0 left-0  lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 ${
          isSidebarOpen ? "lg:block" : "hidden"
        }`} // Dynamically apply classes based on isSidebarOpen state
        
      >
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <button
              className="lg:hidden z-50 mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
              onClick={toggleSidebar}
            >
              <svg
                className={`w-6 h-6  ${isSidebarOpen ? "block" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="flex-1 px-3 bg-white divide-y space-y-1">
              <ul className="space-y-2 pb-2">
                <li >
                  <div className={ `items-center justify-start ${isSidebarOpen? "hidden lg:flex":"lg:flex"}`}>
                    <Link
                      href="/"
                      className="text-sm font-semibold  flexitems-center lg:ml-2.5"
                    >
                      <img
                        src="/images/logo.png"
                        height="80"
                        width="80"
                        className=" mr-2"
                        alt="Logo"
                      />
                    </Link>
                  </div>
                </li>
                <li >
                  <div className="text-lg text-[#10217D] font-normal rounded-lg flex items-center px-2 py-4 border-b  hover:bg-gray-100 group">
                    <RiUserFill />
                    <span className="ml-3 text-sm font-semibold">
                      {useremail}
                    </span>
                  </div>
                </li>
                <li>
                  <Link
                    href="/today"
                    className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                  >
                    <MdDashboard />
                    <span className="ml-3">today</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/history"
                    target="_blank"
                    className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                  >
                    <MdOutlineHistory />
                    <span className="ml-3 flex-1 whitespace-nowrap">
                      history
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/archive"
                    target="_blank"
                    className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                  >
                    <IoMdArchive />
                    <span className="ml-3 flex-1 whitespace-nowrap">
                      archive
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reviews"
                    className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                  >
                    <MdOutlineReviews />
                    <span className="ml-3 flex-1 whitespace-nowrap">
                      reviews
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/articles"
                    className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                  >
                    <GrArticle />
                    <span className="ml-3 flex-1 whitespace-nowrap">
                      articles
                    </span>
                  </Link>
                </li>
              </ul>
              <div className="space-y-2 pt-2">
                <Link
                  href="/settings"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <IoMdSettings />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Settings
                  </span>
                </Link>
                <a
                  href="#"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <RiLogoutCircleLine />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    <Signout></Signout>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
