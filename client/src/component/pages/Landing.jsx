import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { ButtonLogIn, ButtonLogOutLanding } from "../../private/ButtonLogIn";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const Landing = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="w-full h-full bg-colorFondo1">
      {/* NAVBAR LANDING */}
      <div className="h-14 md:h-16 w-full">
        <nav className="grid grid-cols-5 grid-rows-1 shadow-lg fixed h-14 md:h-16 w-full bg-colorFondo2 rounded-b-2xl">
          <div className="flex m-0 justify-center">
            <div className="mt-3 md:mt-4  ml-8">
              <Link to="landing" smooth={"easeInOutQuad"} duration={1500}>
                <button className="font-bold  text-2xl">JSeekers</button>
              </Link>
            </div>
          </div>
          <div></div>
          <div className="col-span-2">
            <div className="flex m-0 justify-center mt-4 md:mt-5 mr-16">
              <div className="mr-2 md:mr-10">
                <Link to="FAQ" smooth={"easeInOutQuad"} duration={1500}>
                  <button className="hover:opacity-100 rounded-2xl opacity-70 text-lg">
                    FAQ
                  </button>
                </Link>
              </div>
              <div>
                <Link to="about" smooth={"easeInOutQuad"} duration={1500}>
                  <button className="hover:opacity-100 rounded-2xl  opacity-70 text-lg">
                    About
                  </button>
                </Link>
              </div>
              <div className="ml-2 md:ml-10">
                <Link to="contact" smooth={"easeInOutQuad"} duration={1500}>
                  <button className="hover:opacity-100 rounded-2xl  opacity-70 text-lg">
                    Contact
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex m-0 justify-center">
            <div className="mt-3 md:mt-4 mr-5  w-32">
              {isAuthenticated ? <ButtonLogOutLanding /> : <ButtonLogIn />}
            </div>
          </div>
        </nav>
      </div>
      {/* SECTION LANDING */}
      <section name="landing" className="m-5 md:pt-16 ">
        <div className="grid  pt-8 md:pt-0 grid-rows-1 md:grid-cols-2">
          {isAuthenticated ? (
            <Navigate to={"/register"} />
          ) : (
            <div className="flex flex-col m-0 justify-center">
              <h1 className="text-4xl text-center font-bold">JSekkers</h1>
              <h2 className="text-3xl text-center">
                Optimized to make you grow
              </h2>
            </div>
          )}

          <div className="flex flex-col m-0 justify-center">
            <img className="w-fit h-fit p-10" src="/Landing.png" alt="asd" />
          </div>
        </div>
      </section>
      {/* SECTION FAQ */}
      <section name="FAQ" className="text-center p-14 md:p-16 mb-32">
        <div className="max-w-xl inline-block">
          <h1 className="text-4xl font-bold mb-4">How it Works?</h1>
          <p className="mb-4">
            JSeeker is an application that emerges to efficiently connect
            developers and recruiters. Through an effective and minimalist
            system, it makes finding the right developer or the ideal position
            easier every day!
          </p>
          <div className="grid grid-cols-2 tex-center gap-4">
            <div className="pt-8">
              <h2 className="font-bold text-2xl"> Step 1</h2>
              <p>Register in a very simple way only with your email</p>
            </div>
            <div className="pt-8">
              <h2 className="font-bold text-2xl"> Step 2</h2>
              <p>Complete your data in a simple and dynamic form</p>
            </div>
            <div className="pt-8">
              <h2 className="font-bold text-2xl"> Step 3</h2>
              <p>
                Browse the application looking for your ideal match in the IT
                world
              </p>
            </div>
            <div className="pt-8">
              <h2 className="font-bold text-2xl"> Step 4</h2>
              <p>Enjoy your extra free time!</p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION ABOUT */}
      <section name="about" className="text-center pt-14 md:p-16 mb-32">
        <div className="max-w-xl inline-block">
          <h2 className="text-5xl font-bold pb-4">About</h2>
          <p className="pb-4">
            JSeeker is an application that emerges to efficiently connect
            developers and recruiters.
            <br />
            Created in February 2022 by a group of students from Henry's
            bootcamp, this application was created to make the process of hiring
            workers in the IT world easier and more dynamic.
            <br />
            JSekeer allows you to have an updated resume without having to spend
            too much time on it. It also provides a series of statistical data
            so that the developer can continue training in a completely
            supported way... cause anyone can help you get a job, we give you
            the right advice to grow in your career! <br />
            But also for the recruiters we bring an update... Connection without
            laps and metrics day by day that are marking the optimal work times.
          </p>
        </div>
      </section>
      {/* SECTION CONTACT */}
      <section name="contact" className="text-center pt-14 md:p-16 mb-32">
        <div className="max-w-xl inline-block">
          <h2 className="text-5xl font-bold pb-4">Contact</h2>
          <p className="pb-4">
            Doubts? Wanting to have the premium? ... Feel free to cantact us!{" "}
            <br />
            Call our general manager of UX/UI Franco Montini to more details:
            +5490303456 <br />
            Cordoba, Argentina{" "}
          </p>
          <div className="flex m-0 justify-center">
            <a
              className="m-2"
              href="https://wa.me/número?text=Hola%somos%hired%pro"
            >
              <AiOutlineWhatsApp className="hover:opacity-100 opacity-70 text-lg" />
            </a>
            <a
              className="m-2"
              href="https://wa.me/número?text=Hola%somos%hired%pro"
            >
              <AiOutlineFacebook className="hover:opacity-100 opacity-70 text-lg" />
            </a>
            <a
              className="m-2"
              href="https://wa.me/número?text=Hola%somos%hired%pro"
            >
              <AiOutlineInstagram className="hover:opacity-100 opacity-70 text-lg" />
            </a>
            <a
              className="m-2"
              href="https://wa.me/número?text=Hola%somos%hired%pro"
            >
              <AiOutlineLinkedin className="hover:opacity-100 opacity-70 text-lg" />
            </a>
          </div>
        </div>
      </section>
      {/* SECTION FOOTER */}
      <footer className="text-center py-8 border-t">
        <a className="hover:opacity-100 opacity-70 mr-4" href="a">
          JSeekers
        </a>
        <a className="hover:opacity-100 opacity-70 mr-4" href="a">
          About
        </a>
        <a className="hover:opacity-100 opacity-70 mr-4" href="a">
          Contact
        </a>
        <a className="hover:opacity-100 opacity-70" href="a">
          Por Henry Group PAPA!
        </a>
      </footer>
    </div>
  );
};

export default Landing;
