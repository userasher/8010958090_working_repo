import React, { useState } from "react";
import {
  Banner,
  BannerButton,
  BannerContent,
  BannerFlag,
  BannerGuidance,
  BannerHeader,
  BannerIcon,
  Icon,
  MediaBlockBody,
} from "@trussworks/react-uswds";

import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

import flagImg from "../../Assets/download.png";
import dotGovIcon from "../../Assets/govicon.svg";
import httpsIcon from "../../Assets/secureicon.svg";
const BannerGov = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Banner aria-label="Official website of the state department of something specific">
        <BannerHeader
          isOpen={isOpen}
          flagImg={<BannerFlag src={flagImg} aria-hidden alt="" />}
          headerText="This is an official website of the state department of something specific"
          headerActionText="Here's how you know"
        >
          <BannerButton
            isOpen={isOpen}
            aria-controls="custom-banner"
            onClick={() => {
              setIsOpen((previousIsOpen) => !previousIsOpen);
            }}
          >
            Here&apos;s how you know
          </BannerButton>
        </BannerHeader>
        <BannerContent id="custom-banner" isOpen={isOpen}>
          <div className="grid-row grid-gap-lg">
            <BannerGuidance className="tablet:grid-col-6">
              <BannerIcon src={dotGovIcon} alt="" />
              <MediaBlockBody>
                <p>
                  <strong>Official websites use .gov</strong>
                  <br />A <strong>.gov</strong> website belongs to an official
                  government organization in the United States.
                </p>
              </MediaBlockBody>
            </BannerGuidance>
            <BannerGuidance className="tablet:grid-col-6">
              <BannerIcon src={httpsIcon} alt="" />
              <MediaBlockBody>
                <p>
                  <strong>Secure .gov websites use HTTPS</strong>
                  <br />A{" "}
                  <strong>
                    lock (<Icon.Lock aria-label="Locked padlock icon" />)
                  </strong>{" "}
                  or <strong>https://</strong> means you&apos;ve safely
                  connected to the .gov website. Share sensitive information
                  only on official, secure websites.
                </p>
              </MediaBlockBody>
            </BannerGuidance>
          </div>
        </BannerContent>
        <h1>hi</h1>
      </Banner>
    </div>
  );
};

export default BannerGov;
