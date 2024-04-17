import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";

const accordionData = [
    {
        id: uuid(),
        title: "How can my mess or hostel partner with Dinetimz?",
        isOpen: true,
        content:
            "To partner with Dinetimz, you can reach out to our team through the Partner with Us section on our website or contact us directly. We will guide you through the onboarding processlorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattilorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
        id: uuid(),
        title: "What are the benefits of joining Dinetimz as a mess provider?",
        isOpen: false,
        content:
            "By partnering with Dinetimz, you can expand your customer base and reach a wider audience of students. You'll also benefit from increased visibility and marketing support"
    },
    {
        id: uuid(),
        title: "How does Dinetimz handle payments and subscriptions for mess providersHow much do I need to pay for this?",
        isOpen: false,
        content:
            "Dinetimz manages all payments and subscriptions on behalf of mess providers. We ensure timely disbursement of subscription fees to your mess or hostel"
    },
    {
        id: uuid(),
        title: "Can I customize the menu and pricing for my mess on Dinetimz?",
        isOpen: false,
        content:
            "Yes, you have the flexibility to customize your menu offerings  BUT pricing on our platform.will remain constant as decided by us  We provide tools for you to update your menu as needed."
    }
];

const accordionItemType = {
    top: "rounded-t-lg",
    default: "border rounded-none border-t-0",
    bottom: "border border-t-0 rounded-b-lg"
};

export const Accordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const accordionClickHandle = (id) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
            {accordionData.map((accordionItem, index) => (
                <div
                    key={accordionItem.id}
                    id={accordionItem.id}
                    className={clsx(
                        "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
                        {
                            [accordionItemType.top]: index === 0,
                            [accordionItemType.default]:
                                index > 0 && index < accordionData.length - 1,
                            [accordionItemType.bottom]:
                                index === accordionData.length - 1
                        }
                    )}
                >
                    <h2 className="accordion-item--heading mb-0">
                        <button
                            className="group relative flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
                            type="button"
                            aria-expanded={accordionItem.isOpen}
                            onClick={() =>
                                accordionClickHandle(accordionItem.id)
                            }
                        >
                            {accordionItem.title}
                            <Icon
                                icon="material-symbols:keyboard-arrow-up-rounded"
                                className="ml-auto h-8 w-8 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                            />
                        </button>
                    </h2>
                    <div
                        className={clsx(
                            "accordion-item--content py-4 px-5 text-base",
                            {
                                hidden: activeAccordion !== accordionItem.id, // Use hidden class to animate height to 0
                                "!visibility block":
                                    activeAccordion === accordionItem.id // Use block class to show content again
                            }
                        )}
                    >
                        <p>{accordionItem.content}</p>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
