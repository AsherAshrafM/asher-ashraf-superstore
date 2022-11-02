"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";

export default function MainNavbar() {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://asher-ashraf-superstore.vercel.app/">
        <img
          src="/vercel.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Asher & Ashraf Superstore"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Asher & Ashraf Superstore
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Sachiel Shaheen</span>
            <span className="block truncate text-sm font-medium">
              sachielshaheen@asherashraf.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
