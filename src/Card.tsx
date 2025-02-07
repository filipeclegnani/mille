import React from "react";
import styled from "styled-components";
import InstagramIcon from "./icons/instagram.svg";
import YoutubeIcon from "./icons/youtube.svg";
import WhatsappIcon from "./icons/whatsapp.svg";
import Miniatura from "./channels4_profile.jpg";

const borderRadius = 60;
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - ${borderRadius * 2}px);
  height: calc(100% - ${borderRadius * 2}px);
  z-index: 100;
  padding: ${borderRadius}px;
`;
const SubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  & > * {
    margin: 10px;
  }
`;

const ImageWrapper = styled.img``;

const MediaWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const MediasWrapper = styled.div``;

export default function Card() {
  const iconSize = 50;
  const instagramLink =
    "https://www.instagram.com/millecoberturas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const youtubeLink =
    "https://youtube.com/@uvasdecobertura?si=gs1HIy2i-6TStfKw";
  const whatsappLink = "https://web.whatsapp.com/send?phone=5549999280177";
  const mobileWhatsappLink = "https://wa.me/5549999280177";

  const isMobile = window.innerWidth < 768;
  return (
    <Wrapper>
      <SubWrapper>
        <img src={Miniatura} alt="Miniatura" />
        <MediasWrapper>
          <a href={instagramLink}>
            <MediaWrapper>
              <ImageWrapper
                src={InstagramIcon}
                alt="Instagram"
                width={iconSize}
                height={iconSize}
                style={{ filter: "invert(100%)" }}
              />
              <h3>@millecoberturas</h3>
            </MediaWrapper>
          </a>
          <a href={youtubeLink}>
            <MediaWrapper>
              <ImageWrapper
                src={YoutubeIcon}
                alt="Youtube"
                width={iconSize}
                height={iconSize}
                style={{ filter: "invert(100%)" }}
              />
              <h3>@uvasdecobertura</h3>
            </MediaWrapper>
          </a>
          <a href={isMobile ? mobileWhatsappLink : whatsappLink}>
            <MediaWrapper>
              <ImageWrapper
                src={WhatsappIcon}
                alt="Whatsapp"
                width={iconSize}
                height={iconSize}
                style={{ filter: "invert(100%)" }}
              />
              <h3>+55 (49) 99928 0177</h3>
            </MediaWrapper>
          </a>
        </MediasWrapper>
      </SubWrapper>
    </Wrapper>
  );
}
