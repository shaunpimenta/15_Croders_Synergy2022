import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import tw from "twin.macro";
import Head from 'next/head';
import { SectionHeading } from "../components/misc/Headings.js";
import bgStyles from "../styles/bgStyles.module.css";

const Container = tw.div`relative bg-transparent `;
const Content = tw.div`max-w-screen-xl px-5 sm:px-0 mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`text-center max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`mt-4  leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;

const TabContent = tw(motion.div)`flex flex-wrap items-center justify-center `;
const CategoryHeading = tw.div`pt-10 text-3xl font-black text-purple-500 tracking-wide text-center`

export default function GLS() {

    const events = [
        {
            category: 'Intra-College',
            eventList: [
                {
                    name: "Crescendo Hackathon",
                    description: "We are organizing a 24-hour Hackathon with problem statements from varied domains.Our hackathon imparts you the platform to showcase your ideas and technical skills at a recognized level. This is the perfect opportunity to get those breathtaking ideas out of your astonishing minds and onto the computer screens. Coming again this year we bring you more engrossing and strenuous problem statements than ever before.Duration: 24 hours",
                    url: "/register/workshop/unity",
                    imageSrc: "/images/workshops/hack.jpg",
                },
                {
                    name: "Crescendo Mechathon",
                    description: "We are organizing a 24-hour Mechathon with problem statements. Showcase your technical abilities and mechanical intellect as you solve critical real life problems applying a machine based approach within the stipulated time.",
                    url: "/register/workshop/unity",
                    imageSrc: "/images/workshops/mech.jpg",
                },
            ]
        },
        {
            category: 'Inter-College events',
            eventList: [
                {
                    name: "CRCE Robotics Challenge - VRC 9.0",
                    description: "The UNITY gaming engine will be used to recreate an arena with obstacles and tasks based on a theme. Participants will have to compete with the bots they have created.",
                    url: "/register/event/vrc",
                    imageSrc: "/images/workshops/hack.jpg",
                },
                {
                    name: "Robomaze",
                    description: "The UNITY gaming engine will be used to mimic an arena. Users will be able to design their own bots to navigate through a maze.",
                    url: "/register/event/robomaze",
                    imageSrc: "/images/workshops/hack.jpg",
                },
                {
                    name: "Monster Arena",
                    description: "The UNITY gaming engine will be used to mimic an arena. Users will be able to construct there own bots, which will be structuraly and technically tested. The controllers abilities are also put to test.",
                    url: "/register/event/monster_arena",
                    imageSrc: "/images/workshops/hack.jpg",
                },
                {
                    name: "Fast N Furious",
                    description: "The UNITY gaming engine will be used to mimic an arena. Users will be able to develop there own bots and race against other players on a well-designed track with numerous obstacles.",
                    url: "/register/event/fnf",
                    imageSrc: "/images/workshops/hack.jpg",
                },
            ]
        // },
        // {
        //     category: 'Other Online events',
        //     eventList: [
        //         {
        //             name: "Escape Room",
        //             description: "A brain teasing treasure hunt based on a theme.",
        //             url: "/register/event/escape_room",
        //             imageSrc: "/images/events/escape-room.png",
        //         },
        //         {
        //             name: "Smart City",
        //             description: "Design a smart city using an online sketch-up site.",
        //             url: "/register/event/smart_city",
        //             imageSrc: "/images/events/smart-city.png",
        //         },
        //         {
        //             name: "Peruse",
        //             description: "Quiz based on logical and analytical thinking + cryptography.",
        //             url: "/register/event/peruse",
        //             imageSrc: "/images/events/peruse.png",
        //         },
        //         {
        //             name: "VMCO Cubing Event",
        //             description: "Annual Cubing competition where people from all over the country come and compete.",
        //             url: "/register/event/vmco",
        //             imageSrc: "/images/events/vmco.png",
        //         },
        //         {
        //             name: "Capture the Flag",
        //             description: "CTF is a cyber-security event where you'll have to break programs, sneakily hack systems, intercept and decrypt hidden messages, reverse engineer, or do whatever it takes to find a certain hidden 'flag' and retrieve it.",
        //             url: "/register/event/ctf",
        //             imageSrc: "/images/events/ctf.png",
        //         },
        //         {
        //             name: "UI/UX Challenge",
        //             description: "A UI/UX Challenge revolving around the world of web development, a perfect platform for you to showcase your creativity and design thinking. A challenge that provides you with an opportunity to take a peek into the world of design and the freedom to experiment.",
        //             url: "/register/event/uiux",
        //             imageSrc: "/images/events/ui-ux.png",
        //         },
        //     ]
        // },
        // {
        //     category: "I-Code Events",
        //     eventList: [
        //         {
        //             name: "Hackathon",
        //             description: "A sprint-style event focused on collaborative programming, in which teams will be given a problem statement and their goal will be to develop a protoype within 24hrs.",
        //             url: "/register/event/hackathon",
        //             imageSrc: "/images/events/hackathon.png",
        //         },
        //         {
        //             name: "Java-C Guru",
        //             description: "This event consists of various levels with increasing difficulties incorporated with a fascinating theme. There are variety of question patterns challenging each area knowledge. ",
        //             url: "/register/event/cway_javaguru",
        //             imageSrc: "/images/events/cjavaguru.png",
        //         },
        //         {
        //             name: "Ultimate Coder",
        //             description: "Questions based on an all round coding challenge.",
        //             url: "/register/event/ultimate_coder",
        //             imageSrc: "/images/events/ultimate-coder.png",
        //         },
        //         {
        //             name: "Sherlocked -The Hunt",
        //             description: "Treasure Hunt based on programming and an event based on Sherlock Holmes' mysteries.",
        //             url: "/register/event/technohunt_sherlocked",
        //             imageSrc: "/images/events/sherlocked.png",
        //         },
        //         {
        //             name: "Codestorm",
        //             description: "Competitive coding contest.",
        //             url: "/register/event/codestorm",
        //             imageSrc: "/images/events/codestorm.png",
        //         },
        //     ],
        }
    ];

    return (
        <>
            <Head>
                <title>Events | Crescendo CRCE 2022-23</title>
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
                    <Content>
                        <HeadingInfoContainer>
                            <HeadingTitle>
                                Crescendo <span tw="text-white">Events</span>
                            </HeadingTitle>
                            <HeadingDescription>Take part in the amazing fun events and stand a chance to win exciting cash prizes or goodies.</HeadingDescription>
                        </HeadingInfoContainer>

                        {
                            events.map((category, i) => (
                                <div key={i}>
                                    <CategoryHeading>{category.category}</CategoryHeading>
                                    <TabContent>
                                        {
                                            category.eventList.map((event, index) => (
                                                <a href={event.url} key={index}>
                                                    <div className="p-5">
                                                        <div class="max-w-md border-2 border-secondary-600 rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
                                                            <div>
                                                                <img className="w-full" src={event.imageSrc} alt={event.name} />
                                                            </div>
                                                            <div class="py-4 px-4 bg-black">
                                                                <h3 class="text-lg font-semibold text-white">{event.name}</h3>
                                                                <p class="mt-4 text-lg text-gray-500 font-thin">{event.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            ))
                                        }
                                    </TabContent>
                                </div>
                            ))
                        }


                    </Content>
                </Container>
            </div>
        </>
    );
}