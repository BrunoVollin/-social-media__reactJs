import React, { Profiler } from "react";
import { Wrapper } from "./Header.style";
import img from "../../img/profile-img.png";

const Header = () => {
  return (
    <Wrapper>
      <Profile>
        <img src={img} alt="" />
        <div className="text-profile">
            <p className="name-profile"></p>
            <p className="id-profile"></p>
        </div>
      </Profile>

      <h1>Boa tarde</h1>
    </Wrapper>
  );
};

export default Header;
