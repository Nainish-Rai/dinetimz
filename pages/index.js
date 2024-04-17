import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="DineTimz"
                description="Dinetimz – Elevate Your Dining Experience."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Features</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center leading-10 mx-auto"
                                type="default"
                            >
                                Say Goodbye to Monotonous <br />{" "}
                                <span className="text-primarytext mt-4">
                                    {" "}
                                    Meals!
                                </span>
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Imagine students eagerly anticipating their
                                    next meal, not just for nourishment but for
                                    the excitement of trying something new. We
                                    envision a dynamic platform that adapts to
                                    evolving food trends, cultural fusions, and
                                    seasonal delights.
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>More Features</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Variety on Your Plate – Dinetimz
                                <span className="text-primarytext">
                                    {" "}
                                    Sets You Free
                                </span>
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nunc vulputate libero et
                                    velit interdum, ac aliquet odio mattilorem
                                    ipsum dolor sit amet, consectetur adipiscing
                                    elit. Nunc vulputate libero et velit
                                    interdum, ac aliquet odio mattis.
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="https://images.pexels.com/photos/4062274/pexels-photo-4062274.jpeg?auto=compress&cs=tinysrgb&w=600"
                                            alt="Customizable Layouts image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Customizable Plans
                                        </CardHeader>
                                        <p>
                                            At Dinetimz, our focus is not only
                                            on providing a variety of dining
                                            options but also on ensuring that
                                            each meal is prepared and delivered
                                            with the utmost care, meeting the
                                            highest standards of hygiene and
                                            safety for our valued subscribers.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="https://images.pexels.com/photos/5182122/pexels-photo-5182122.jpeg?auto=compress&cs=tinysrgb&w=600"
                                            alt="Progress Tracking image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Affordable Prices
                                        </CardHeader>
                                        <p>
                                            Dinetimz takes pride in partnering
                                            with local mess vendors and tiffin
                                            services to offer a diverse and
                                            hygienic dining experience for our
                                            subscribers. Our collaborative
                                            network ensures that students enjoy
                                            a variety of cuisines while
                                            maintaining high standards of
                                            hygiene and safety. .
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="left">
                                <BadgeMessage>Testimonials</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle className="" type="default">
                                This is what our customers have to say about
                                DineTimz
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Got some burning questions about DineTimz?{" "}
                                <br></br>
                                <br></br>No worries! We&apos;ve got the answers
                                you need:
                            </PageTitle>
                            <Accordion />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
