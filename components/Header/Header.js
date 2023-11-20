/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";

export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <SectionContainer className="header--container wrap wrap-px ">
                <div className="header-logo--container">
                    <h1 className="logo mb-0">
                        <Link href="/" className="flex items-center gap-3">
                            <p className="font-semibold text-3xl">Z-Washers</p>
                            <img
                                className="-mt-2"
                                src="/logo1.png"
                                width={70}
                                height={70}
                                alt="Z-Washers Logo"
                            />
                        </Link>
                    </h1>
                </div>
                <SectionContainer className="flex items-center ml-auto">
                    <Nav />
                    <ButtonGroup className="hidden md:block">
                        <a
                            role="button"
                            href=""
                            className="btn btn--secondary ml-4"
                        >
                            Whatsapp
                            <Icon icon="material-symbols:arrow-forward-rounded" />
                        </a>
                    </ButtonGroup>
                </SectionContainer>
            </SectionContainer>
        </header>
    );
};
