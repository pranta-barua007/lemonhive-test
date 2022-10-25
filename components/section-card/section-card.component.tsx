import { SectionCardContainer, CardSection } from "./section-card.styles";
import Image from "next/image";
import { FC } from "react";

interface SectionCardPropsType {
    imgUrl: string,
    title: string,
    company: string,
    about: string,
}

const SectionCard: FC<SectionCardPropsType> = ({ imgUrl, title, company, about }) => {
    return (
        <SectionCardContainer>
            <CardSection>
                <Image src={imgUrl || "/hero-sm.png"} width={140} height={140} />
            </CardSection>
            <CardSection>
                <h3>{title || "Title"}</h3>
            </CardSection>
            <CardSection>
                <p>{company || "Unknow company"} </p>
            </CardSection>
            <CardSection>
                <span>
                    {about || "Lorem ipsum dolor sit, amet consectetur adipisicing elit."} 
                </span>
            </CardSection>
        </SectionCardContainer>
    )
}

export default SectionCard;