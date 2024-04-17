import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Quality Assurance",
        content:
            "Our vision extends beyond just breaking the monotony; we aim to spark a global movement where people appreciate the artistry in every dish, where a simple meal becomes a canvas for creativity. Dinetimz strives to be the bridge between diverse cuisines and eager taste buds, creating a tapestry of flavors that reflects the richness of our global culinary landscape",
        align: "right",
        image: "https://images.pexels.com/photos/7736775/pexels-photo-7736775.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: uuid(),
        title: "Diverse Offerings",
        content:
            "In this future, subscribing to Dinetimz isn't just a choice; it's a lifestyle. It's a commitment to savoring life's moments through the joy of discovering new tastes, forging connections over shared dining experiences, and ultimately, making each meal a story worth telling.",
        align: "left",
        image: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 rounded-3xl blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
