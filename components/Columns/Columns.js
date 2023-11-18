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
            "Z Washers has revolutionized the way I do laundry. The work is user-friendly, and scheduling pickups is a breeze. The team is always on time, and my clothes come back smelling fresh and neatly folded. I can't imagine going back to the hassle of traditional laundry after experiencing the convenience of Z Washers!"
    },
    {
        id: uuid(),
        title: "Vivek G.",
        icon: "test2.png",
        content:
            "Z Washers has been a lifesaver for me! As a busy professional, I hardly find time for household chores. With their seamless online platform, I can schedule my laundry pick-ups and deliveries with just a few clicks. The service is prompt, my clothes always come back fresh and perfectly folded. Thank you, Z Washers, for making my life a little bit easier"
    },
    {
        id: uuid(),
        title: "Krish B.",
        icon: "test3.png",
        content:
            "Being a parent and running a business leaves me with little time for anything else. Z Washers has become an essential part of my routine. Their reliable service and attention to detail are unmatched. I appreciate the convenience of scheduling pickups around my hectic schedule. Z Washers, you've made laundry day stress-free for me"
    },
    {
        id: uuid(),
        title: "Shubham D.",
        icon: "test4.png",
        content:
            "Z Washers has been a game-changer for me in college. Instead of spending hours at the laundromat, I can focus on my studies and extracurricular activities. The app is user-friendly, and the team at Z Washers ensures my laundry is returned in top-notch condition. It's affordable, efficient, and a must-have for any student juggling a busy schedule"
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
