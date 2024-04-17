import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { Button, ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import {
    ContainerScroll,
    MacbookScroll
} from "@components/MacbookScroll/Macbook";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const HomeBanner = () => {
    return (
        <SectionContainer className="page-banner--container py-16">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                {/* Appear First */}
                <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
                    <BadgeGroup alignment="center">
                        <BadgeMessage>Discover Dine Timz!</BadgeMessage>
                        <BadgeIcon icon="game-icons:meal" />
                    </BadgeGroup>
                </MotionBTTContainer>
                {/* Appear Second */}
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <PageTitle className="text-center mx-auto" type="heavy">
                        Dinetimz – Elevate Your Dining Experience.
                    </PageTitle>
                </MotionBTTContainer>
                {/* Appear Third */}
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content className="text-center" alignment="center">
                        <p>
                            At Dinetimz, we dream of a world where every meal
                            feels like a new adventure. We want to break the
                            routine of eating the same thing every day.
                        </p>
                    </Content>
                    <div className="mt-6 mb-16 text-center">
                        <ButtonGroup alignment="center">
                            <Button href="#features">Features</Button>
                            <a
                                role="button"
                                href="whatsapp"
                                className="btn btn--secondary"
                            >
                                Whatsapp
                                <Icon icon="material-symbols:arrow-forward-rounded" />
                            </a>
                        </ButtonGroup>
                    </div>
                </MotionBTTContainer>
                {/* Appear Fourth */}
                <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
                    <div className="page-banner--image">
                        <Image
                            src="https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            width={1024}
                            height={680}
                            alt="Page Banner"
                            objectFit="cover"
                            className="mx-auto rounded-3xl"
                        />
                    </div>
                </MotionBTTContainer>

                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black ">
                                Your Passport to Dining <br />
                                <span className="text-4xl text-primarytext md:text-[6rem] font-bold mt-1 leading-none">
                                    Freedom
                                </span>
                            </h1>
                        </>
                    }
                >
                    <Image
                        src={`/screen.png`}
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </SectionContainer>
        </SectionContainer>
    );
};
