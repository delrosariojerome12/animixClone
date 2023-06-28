import React, {useState} from "react";
import {FaBitcoin, FaEthereum, FaTwitter} from "react-icons/fa";
import {BsDiscord} from "react-icons/bs";
import {IconContext} from "react-icons";
const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <footer>
      <IconContext.Provider value={{className: "icon", size: "1.6rem"}}>
        <div className="top">
          <div className="left-icons">
            <p>Donate</p>
            <FaBitcoin />
            <FaEthereum />
          </div>
          <div className="right-icons">
            <p>Chat</p>
            <span
              onClick={() => setIsChatOpen(!isChatOpen)}
              className={isChatOpen ? "ball-con-open" : "ball-con"}
            >
              <span className={isChatOpen ? "ball-open" : "ball"}></span>
            </span>
            <BsDiscord />
            <FaTwitter />
          </div>
        </div>
        <div className="bottom">
          <p>Watch HD Anime for Free ©2022 AniMixPlay</p>

          <p>
            Disclaimer: This site does not store any files on its server. All
            contents are provided by non-affiliated third parties.
          </p>
          <p>
            THIS IS A CLONE OF ANIMIXPLAY. THIS IS FOR PRACTICING MY SKILLS IN
            WEB DEVELOPMENT.
          </p>
          <p>Jerome Del Rosario Ramos</p>
        </div>
      </IconContext.Provider>
    </footer>
  );
};

export default React.memo(Footer);
