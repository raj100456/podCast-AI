import React from 'react';
import { ReactSVG } from 'react-svg';
import Waves from '../../../assets/login_waves.svg';
import LogoWithText from '../../../assets/QuesLogo.svg';

const SigninIntro = () => {
  return (
    <div className="w-2/3 h-full contain-content bg-gradient-to-bl from-[#C854FF] to-[#3A0B63] relative flex">
      <ReactSVG src={Waves} className="absolute w-full h-full top-0 left-0" />
      <div className="text-white z-10 mt-24 ml-20">
        <ReactSVG src={LogoWithText} />
        <div>
          <div className="text-8xl text-left tracking-wide font-light font-sans leading-[96px] mt-20 mb-10">
            Sign In
            Your podcast <br />
            will no longer <br />
            be just a hobby.
          </div>
          <div className="text-3xl text-left">
            Supercharge Your Distribution <br />
            using our AI assistant!
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninIntro;
