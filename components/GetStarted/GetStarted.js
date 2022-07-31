import Image from 'next/image';

import PeopleWorking from "../../public/people-working.png";

import {
    Description,
    Heading,
    ContentWrapper,
    ContentWrapper2,
} from "./GetStartedStyled";

const Start = () => {
    return (
        <Description>
            <ContentWrapper>
                <Heading>More than just shorter links</Heading>
            </ContentWrapper>
            <ContentWrapper2>
                <Image src={PeopleWorking} alt="people-working" />
            </ContentWrapper2>
        </Description>
    );
};

export default Start;
