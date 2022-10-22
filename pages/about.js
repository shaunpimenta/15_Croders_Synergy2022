import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
// import { ReactComponent as SvgDotPatternIcon } from "../../static/images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../components/misc/Headings.js";
import Head from 'next/head';
import bgStyles from "../styles/bgStyles.module.css";

const Container = tw.div`relative bg-transparent`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingDescription = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;


const HeadingInfoContainer = tw.div`flex flex-col items-center`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
    tw`mt-24 md:flex justify-center items-center`,
    props.reversed ? tw`flex-row-reverse` : "flex-row"
]);

const Image1 = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover md:bg-center sm:bg-top mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Image2 = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-center bg-cover  mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Image3 = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover sm:bg-top mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);

const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-white`;
const Description = tw.p`mt-2 text-sm text-white leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

export default function About() {

    return (

        <>
            <Head>
                <title>About Student Council | Crescendo CRCE 2022-23</title>
                
        
        

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
            <div className={bgStyles.parent}>
                <div className={bgStyles.stars}></div>
                <Container>
                    <SingleColumn>
                        <HeadingInfoContainer>
                            <HeadingTitle>About Us</HeadingTitle>
                            <HeadingDescription>
                                Unity is strength... When there is teamwork and collaboration, wonderful things can be achieved.
                            </HeadingDescription>
                        </HeadingInfoContainer>

                        <Content>

                            <Card reversed={false}>
                                <Image1 imageSrc="images/About/stuco.png"/>
                                <Details>
                                    <Title>Students Council</Title>
                                    <Subtitle>Fr. Conceicao Rodrigues College of Engineering,Bandra</Subtitle>
                                    <Description>The raison d’etre of the Students' Council is to be a formal communication channel between the students, faculties and the administration. While it seeks to address any queries and resolve issues that the students and / or admin may face, the Student Council also relentlessly strives towards the enrichment of the campus experience.As a team, we are 21 players with one heartbeat who take pride in being the voice and strength of a community of 1000+ students. We don't look for a reason to help others. We work for a cause, not for applause.  
                                    </Description>
                                </Details>
                            </Card>



                        </Content>
                    </SingleColumn>
                </Container>
            </div>
        </>
    );
};