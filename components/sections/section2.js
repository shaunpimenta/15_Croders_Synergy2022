import React from "react";
import Image from 'next/image';
import styled from "styled-components";
import tw from "twin.macro";
import Link from 'next/link';

import defaultCardImage from "../../static/images/shield-icon.svg";

import SupportIconImage from "../../static/images/support-icon.svg";
import ShieldIconImage from "../../static/images/shield-icon.svg";
import ReliableIconImage from "../../static/images/reliable-icon.svg";
import SimpleIconImage from "../../static/images/simple-icon.svg";

const Container = tw.div`relative bg-transparent `;

const FourColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto`}
`;

const VerticalSpacer = tw.div`mt-5 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/4 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4  py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide text-white font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

export default function Section2(props) {
  

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Events",
      description: "Explore various events focused on various technological domains.",
      link: "/events"
    },
    
    { imageSrc: SimpleIconImage, title: "Footfall", description: "A footfall of around 20k+ was recorded in the previous year." },
    { imageSrc: ReliableIconImage, title: "Legacy", description: "It boasts a legacy of excellence of CRCE." },
  ];

  let cards = defaultCards;

  return (

    <div className={props.bgStyles.parent}>
      <div className={props.bgStyles.stars}></div>
      <Container>
        <FourColumnContainer>
          <VerticalSpacer />
          {cards.map((card, i) => (
            <Column key={i}>
              <Card>
                <span className="imageContainer" style={{ background: "white", height: "4rem" }}>
                  <Image src={card.imageSrc || defaultCardImage} alt="icon" />
                </span>
                <Link href={card.link ? card.link : "#"}>
                  <span className="textContainer">
                    <span className="title">{card.title || "Techno"}</span>
                    <p className="description">
                      {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                    </p>
                  </span>
                </Link>
              </Card>
            </Column>
          ))}
        </FourColumnContainer>
      </Container>
    </div>
  );
};
