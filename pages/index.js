import React from 'react';
import tw from "twin.macro";
import styles from "./index.module.css";
import Section1 from "../components/sections/section1.js";
import Section2 from "../components/sections/section2.js";


import Events from "../components/sections/events.js";


import bgStyles from "../styles/bgStyles.module.css";

import Head from 'next/head';

export default function index() {
  const Heading = tw.span`uppercase text-2xl text-primary-100`;
  const Subheading = tw.span`uppercase text-4xl tracking-widest font-bold text-white`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <>


      <Head>
        <title>Crescendo CRCE 2022-2023 </title>
        

        {/* Meta tags */}
        <meta charset="UTF-8" />
        <meta name="description" content="Crescendo CRCE - The technical fest of fun and astonishing events,amazing prizes, and much more." />
        <meta name="keywords" content="Crescendo ,FrCRCE,CRCE,Fr.Conceicao Rodrigues College of Engineering Technology, Technosavy, extravaganze, fun events" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* OG Tags */}
        <meta property="og:title" content="Crescendo CRCE 2022-2023" />
        <meta property="og:description" content="Crescendo CRCE - The technical fest of fun and astonishing events,amazing prizes, and much more." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />

   
      </Head>




      <div className="bg-transparent">

        <Section1 styles={styles} bgStyles={bgStyles} subheading={<Heading> Fr. Conceicao Rodrigues College of Engineering's Student Council PRESENTS</Heading>}
          heading={
            <>
              CRES<HighlightedText>CENDO</HighlightedText>
            </>
          }
          description={""} />

        <Section2
          bgStyles={bgStyles}
        />

        <Events bgStyles={bgStyles} />

       

      </div>

    </>
  );
}
