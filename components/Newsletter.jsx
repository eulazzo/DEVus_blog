import React, { useRef } from "react";

const Newsletter = () => {
  const emailRef = useRef(null);

  return (
    <div className="text-white hidden md:inline-block">
      <div>
        <h3 className="text-sm">
          <span className="font-semibold text-purple text-base">NEWSLETTER</span>{" "}
          - Sign up and stay tuned!
        </h3>
        {/* <p className="text-sm ">Inscreva-se e fique por dentro.</p> */}
      </div>
      <div className="flex">
        <input
          className="outline-none text-black pl-2 text-sm rounded-sm border-0"
          type="email"
          required
          name="email"
          id="email"
          placeholder="Enter your best e-mail"
        />
        <button className="bg-purple font-medium px-2 py-1 rounded-sm  ">
          Register
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
