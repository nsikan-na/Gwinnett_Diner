import React, { useContext } from "react";
import { useRouter } from "next/router";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../context";
import AlertSuccess from "./AlertSuccess";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "next/image";
export default function NavBar() {
  const router = useRouter();
  const {
    setCart,
    setLocation,
    username,
    setAlertText,
    alertText,
    setUsername,
  } = useContext(Context);
  return (
    <>
      <Container
        style={{ boxShadow: "0px 1px 0px 0px rgba(0, 0, 0, 0.1)" }}
        className="sticky bg-gray-50 top-0 z-50 mx-auto lg:hidden flex justify-between "
      >
        <MenuIcon
          className="scale-125  text-red-600 cursor-pointer link my-3"
          onClick={() => {
            router.push("/nav");
          }}
        />
        <Image
          src="/images/cfa.png"
          width="100%"
          height="10%"
          alt="logo"
          className="scale-50 cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        />
        <div className="my-3">
          <ShoppingCartIcon
            className="text-red-600 cursor-pointer link"
            onClick={() => {
              router.push("/cart");
            }}
          />
        </div>
      </Container>

      <Container
        className="sticky top-0 z-50 mx-auto  "
        style={{ boxShadow: "0px 1px 0px 0px rgba(0, 0, 0, 0.1)" }}
      >
        <Container className="bg-gray-50 hidden lg:block py-3">
          <Container className="flex items-center justify-between">
            <div className="space-x-5 z-20">
              <a
                style={{ color: "red" }}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/");
                }}
                className="text-lg   link"
              >
                Our Menu
              </a>
              <a
                style={{ color: "red" }}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // router.push("/about");
                }}
                className="text-lg link"
              >
                About Us
              </a>
              <a
                style={{ color: "red" }}
                href="#"
                onClick={() => {
                  router.push("/location");
                  setCart([]);
                }}
                className="text-lg link"
              >
                Change Location
              </a>
            </div>
            <div className="absolute flex w-11/12 justify-center ">
              <Image
                src="/images/cfa.png"
                width="100%"
                height="60%"
                alt="logo"
                className="scale-75 z-20 cursor-pointer"
                onClick={() => {
                  router.push("/");
                }}
              />
            </div>
            <div className="space-x-5 z-20">
              {!username ? (
                <>
                  <a
                    style={{ color: "red" }}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/sign-up");
                    }}
                    className="text-lg link"
                  >
                    Sign Up
                  </a>
                  <a
                    style={{ color: "red" }}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/sign-in");
                    }}
                    className="text-lg link"
                  >
                    Sign In
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="#"
                    style={{ color: "black" }}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="text-lg no-underline"
                  >
                    Welcome {username}!
                  </a>
                  <a
                    style={{ color: "red" }}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setUsername("");
                      setAlertText(`You have signed out!`);
                    }}
                    className="text-lg link"
                  >
                    Sign Out
                  </a>
                </>
              )}
              <ShoppingCartIcon
                className="text-red-600 cursor-pointer link"
                onClick={() => {
                  router.push("/cart");
                }}
              />
            </div>
            {/* {!username ? (
                <></>
              ) : (
                <p
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="mr-4"
                >
                  Welcome {username}!
                </p>
              )} */}
          </Container>
        </Container>
        {alertText ? (
          <>
            <div className="pb-3">
              <AlertSuccess />
            </div>
          </>
        ) : (
          ""
        )}
      </Container>
    </>
  );
}
