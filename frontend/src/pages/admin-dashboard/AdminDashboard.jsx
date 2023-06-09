import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AdminContext from "../../contexts/AdminContext";

const AdminDashboard = () => {
  const { admin, getOneAdmin } = useContext(AdminContext);

  const id = localStorage.getItem("uId");
  getOneAdmin(id);

  return (
    <div>
      {/* component */}
      <link rel="preconnect" href="https://rsms.me/" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    :root { font-family: 'Inter', sans-serif; }\n@supports (font-variation-settings: normal) {\n  :root { font-family: 'Inter var', sans-serif; }\n}\n",
        }}
      />
      <div className="antialiased bg-white w-full min-h-screen text-white relative py-4">
        <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
          <div id="menu" className="bg-gray-500 col-span-3 rounded-lg p-4 ">
            <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text text-transparent">
              Dashboard<span className="text-indigo-400">.</span>
            </h1>
            <p className="text-slate-400 text-sm mb-2">Welcome back,</p>
            <a
              href="#"
              className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2"
            >
              <div>
                <img
                  className="rounded-full w-10 h-10 relative object-cover"
                  src="https://img.icons8.com/color/96/000000/user-menu-male--v1.png"
                  alt=""
                />
              </div>
              <div>
                <p className="font-medium group-hover:text-indigo-400 leading-4">
                  {admin.name}
                </p>
                <span className="text-xs text-white font-bold">
                  {admin.permissionLevel}
                </span>
              </div>
            </a>
            <hr className="my-2 border-slate-700" />
            <div id="menu" className="flex flex-col space-y-2 my-5">
              <a
                href="#"
                className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
              >
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 group-hover:text-indigo-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                      Dashboard
                    </p>
                    <p className="text-slate-400 text-sm hidden md:block">
                      Dashboard overview
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
              >
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 group-hover:text-indigo-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <Link to="/admin/viewAllComplaints">
                      <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                        Complaints
                      </p>
                      <p className="text-slate-400 text-sm hidden md:block">
                        View all complaints
                      </p>
                    </Link>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
              >
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 group-hover:text-indigo-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <Link to="/admin/govUsers">
                      <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                        Government Authority
                      </p>
                      <p className="text-slate-400 text-sm hidden md:block">
                        View Gov. Authority
                      </p>
                    </Link>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
              >
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 group-hover:text-indigo-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <Link to="/admin/feedManagement">
                      <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                        Complaints Feed
                      </p>
                      <p className="text-slate-400 text-sm hidden md:block">
                        Approve complaints
                      </p>
                    </Link>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
              >
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 group-hover:text-indigo-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <Link to={`/admin/${id}`}>
                      <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                        Settings
                      </p>
                      <p className="text-slate-400 text-sm hidden md:block">
                        Edit settings
                      </p>
                    </Link>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div id="content" className="bg-gray-500 col-span-9 rounded-lg p-6">
            <div id="24h">
              <div
                id="stats"
                className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              ></div>
            </div>
            <div id="last-incomes">
              <h1 className="font-bold py-4 uppercase text-white ">
                User Management
              </h1>
              <div
                id="stats"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              >
                <div className="bg-white to-white/5 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="p-2">
                      <p className="text-xl font-bold text-black">
                        Pending Accounts
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      className="rounded-full ml-2 w-[12rem] h-[12rem] relative object-cover"
                      src="../pending.png"
                      alt=""
                    />
                  </div>
                  <center>
                    <div className="border-t border-white/5 p-4">
                      <Link to="/admin/pending">
                        <button className="bg-red-700 text-white px-4 py-2 rounded-lg mt-4">
                          Click Here
                        </button>
                      </Link>
                    </div>
                  </center>
                </div>

                <div className="bg-white to-white/5 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="p-2">
                      <p className="text-xl font-bold text-black">
                        Manage Accounts
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      className="rounded-full ml-2 w-[12rem] h-[12rem] relative object-cover"
                      src="../manage.png"
                      alt=""
                    />
                  </div>
                  <center>
                    <div className="border-t border-white/5 p-4">
                      <Link to="/admin/userManage">
                        <button className="bg-red-700 text-white px-4 py-2 rounded-lg mt-4">
                          Click Here
                        </button>
                      </Link>
                    </div>
                  </center>
                </div>
              </div>
            </div>
            <div id="last-incomes">
              <h1 className="font-bold py-4 uppercase">Complaints</h1>
              <div
                id="stats"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              >
                <div className="bg-white to-white/5 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="p-2">
                      <p className="text-xl font-bold text-black">Pending</p>
                    </div>
                  </div>
                  <div>
                    <img
                      className="rounded-full ml-2 w-[12rem] h-[12rem] relative object-cover"
                      src="../pending1.png"
                      alt=""
                    />
                  </div>
                  <center>
                    <div className="border-t border-white/5 p-4">
                      <Link to="/admin/pendingComplaints">
                        <button className="bg-red-700 text-white px-4 py-2 rounded-lg mt-4">
                          Click Here
                        </button>
                      </Link>
                    </div>
                  </center>
                </div>

                <div className="bg-white to-white/5 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="p-2">
                      <p className="text-xl font-bold text-black">Assigned</p>
                    </div>
                  </div>
                  <div>
                    <img
                      className=" ml-2 w-[12rem] h-[12rem] relative object-cover"
                      src="../todo.png"
                      alt=""
                    />
                  </div>
                  <center>
                    <div className="border-t border-white/5 p-4">
                      <Link to="/admin/assignComplaints">
                        <button className="bg-red-700 text-white px-4 py-2 rounded-lg mt-4">
                          Click Here
                        </button>
                      </Link>
                    </div>
                  </center>
                </div>

                <div className="bg-white to-white/5 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="p-2">
                      <p className="text-xl font-bold text-black">
                        In-Progress
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      className=" ml-2 w-[12rem] h-[12rem] relative object-cover"
                      src="../Progress.png"
                      alt=""
                    />
                  </div>
                  <center>
                    <div className="border-t border-white/5 p-4">
                      <Link to="/admin/inprogressComplaints">
                        <button className="bg-red-700 text-white px-4 py-2 rounded-lg mt-4">
                          Click Here
                        </button>
                      </Link>
                    </div>
                  </center>
                </div>
                <div className="bg-white to-white/5 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="p-2">
                      <p className="text-xl font-bold text-black">Resolved</p>
                    </div>
                  </div>
                  <div>
                    <img
                      className="rounded-full ml-2 w-[12rem] h-[12rem] relative object-cover"
                      src="../Assigned1.png"
                      alt=""
                    />
                  </div>
                  <center>
                    <div className="border-t border-white/5 p-4">
                      <Link to="/admin/resolvedComplaints">
                        <button className="bg-red-700 text-white px-4 py-2 rounded-lg mt-4">
                          Click Here
                        </button>
                      </Link>
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
