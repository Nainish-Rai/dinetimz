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
                title="ZWashers - Your Clothes Deserve It"
                description="Z-Washers Your Clothes Deserve It"
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
                                className="text-center mx-auto"
                                type="default"
                            >
                                Simplify Your Clothes Washing Journey with
                                Z-Washers
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Revolutionize laundry with Z-Washers – your
                                    go-to online service for effortless clothes
                                    cleaning. Simplify your washing journey with
                                    just a click, delivering convenience
                                    to your doorstep.
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
                                Master Your Laundry Game with Z-Washers
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
                                            src="/efeat1.jpg"
                                            alt="Customizable Layouts image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Customizable Plans
                                        </CardHeader>
                                        <p>
                                            Experience flexibility like never
                                            before with ZWashers Customizable
                                            Plans. Tailor your monthly
                                            subscription to fit your exact needs
                                            – choose the number of pickups,
                                            extend your clothing limit, and even
                                            personalize per-unit plans. From
                                            clothes to bed sheets, bags, and
                                            shoes, we offer a range of options
                                            to make laundry entirely on your
                                            terms. Simplify your laundry
                                            experience with ZWashers – where
                                            customization meets convenience
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/efeat2.jpg"
                                            alt="Progress Tracking image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Affordable Prices
                                        </CardHeader>
                                        <p>
                                            Experience budget-friendly freshness
                                            with ZWashers – our Affordable
                                            Prices ensure quality laundry care
                                            at unbeatable rates. Enjoy savings
                                            compared to other options,
                                            delivering value that doesn’t
                                            compromise on excellence. Elevate
                                            your laundry experience without
                                            breaking the bank – choose ZWashers
                                            for affordability that
                                            exceeds expectations.
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
                                Z-Washers
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
                                Got some burning questions about Z-Washers?{" "}
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
