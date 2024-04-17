/* eslint-disable @next/next/no-img-element */
import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "Arpit N.",
        icon: "/test1.png",
        content:
            "As a college student, my budget's tight and routine sets in quick. Dinetimz has been a lifesaver! It breaks the boring meal cycle and makes even a random Tuesday lunch feel like an adventure. I've rediscovered the excitement of eating!"
    },
    {
        id: uuid(),
        title: "Vivek G.",
        icon: "test2.png",
        content:
            "I'm always seeking out new restaurants and hidden gems. Dinetimz feels like it was made for people like me. They introduce me to unique spots, flavors I never knew existed, and help me understand the stories behind the dishes. It's elevated my whole dining experience"
    },
    {
        id: uuid(),
        title: "Krish B.",
        icon: "test3.png",
        content:
            "Let's be real, after a long workday, the last thing I want is to decide what to eat.  Dinetimz takes that mental load off. I trust them to bring variety and deliciousness to my week. It's the best kind of surprise after a hectic day"
    },
    {
        id: uuid(),
        title: "Shubham D.",
        icon: "test4.png",
        content:
            "I love that Dinetimz caters to my changing moods. Sometimes I want comfort food, sometimes something exotic. Their selection feels limitless! It's inspired me to be bolder with my food choices and made dining out a journey rather than just a meal."
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    <div className="mb-4 w-10 h-10 my-2 rounded-full overflow-hidden">
                        <img
                            src={item.icon}
                            alt="icon"
                            className="w-full object-cover"
                        />
                    </div>
                    <h3 className="text-xl mb-2 font-medium text-black">
                        {item.title}
                    </h3>
                    <p>{item.content}</p>
                    <o className="flex">
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                    </o>
                </div>
            ))}
        </SectionContainer>
    );
};
