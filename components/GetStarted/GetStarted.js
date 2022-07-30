import Image from 'next/image';

import PeopleWorking from "../../public/people-working.png";

import {
    Description,
    Heading,
    Person,
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
                {/* <Person> */}
                <Image src={PeopleWorking} alt="people-working" />
                {/* </Person> */}
            </ContentWrapper2>
        </Description>
    );
};

export default Start;
