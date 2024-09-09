"use client"

import React from "react";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
} from "@nextui-org/navbar";

import {
  DropdownItem, 
  DropdownTrigger, 
  Dropdown, 
  DropdownMenu, 
} from "@nextui-org/dropdown"
import {Link} from "@nextui-org/link";
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";
import Logout from "./Logout";

interface User {
  name: string;
  email: string;
  image: string;
}

const NavBar: React.FC<{ user: User }> = ({ user }) => {
  return (
    <Navbar>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">Bio</p>
      </NavbarBrand>

      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={user.image}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user.email}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              <Logout/>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}


export default NavBar;













// // components/NavBar.tsx
// "use client"

// import { useState } from 'react';
// import Image from 'next/image';
// import Logout from '@/components/Logout';

// import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";

// interface User {
//   name: string;
//   email: string;
//   image: string;
// }

// const NavBar: React.FC<{ user: User }> = ({ user }) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <nav className="bg-white p-3 flex justify-between items-center shadow-lg">
//       <div className=" text-lg">Portfolio</div>
//       <div className="relative">
//         <div className="w-10 h-10 rounded-full cursor-pointer overflow-hidden" onClick={() => setDropdownOpen(!dropdownOpen)}>
//           <Image
//             src={user.image}
//             alt="User"
//             width={40}
//             height={40}
//             className="object-cover"
//           />
//         </div>
//         {dropdownOpen && (
//           <div className="absolute right-0  w-64 bg-gray-200 rounded-md shadow-md">
//             <div className="flex flex-row p-2 ">
//                 <div className='basis-3/4'>
//                     {user.name}
//                     <div><code>{user.email}</code></div>
//                 </div>
//                 <div className='basis-1/4'>
//                     <Logout />
//                 </div>
//             </div>
            
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
