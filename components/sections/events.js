import React from 'react';
import cardstyles from '../../pages/profile.module.css';
import tw from "twin.macro";
import { motion } from "framer-motion";
import Link from 'next/link';

const Container = tw.div`relative bg-transparent `;
const Content = tw.div`max-w-screen-xl px-5 sm:px-0 mx-auto  lg:pb-20`;
const TabContent = tw(motion.div)`flex flex-wrap items-center justify-center `;
const Heading = tw.div`pt-10 text-4xl font-black text-white tracking-wide text-center`
const Subheading = tw.div`pt-10 text-3xl font-black text-primary-500 tracking-wide text-center`

export default function Events(props) {

    const events = [
        {
            category: 'Inter-College Events',
            eventList: ["Crescendo Hackathon", "Crescendo Mechathon", "E-sports:Valorant", "Technical Paper Presentation", "Project Competition"]
        },

        {
            category: "Intra-College Events",
            eventList: ["Market Mayhem","Doomsday","Circuit Whiz"]
        }
    ];


    return (
        <Container>
            <div className={props.bgStyles.stars}></div>
            <Content>

                <Heading>Events at Crescendo</Heading>
                {
                    events.map((category, index) => (
                        <div key={index}>
                            <Subheading>{category.category}</Subheading>
                            <TabContent>
                                {
                                    category.eventList.map((eventName, i) => (
                                        <Link href={"/events"}>
                                            <div key={i} className={cardstyles.card}>

                                                <h2 className={cardstyles.primaryText}>{eventName}</h2>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </TabContent>
                        </div>
                    ))
                }
            </Content>
        </Container>
    );
}