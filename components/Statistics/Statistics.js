import Image from 'next/image';

import BrandRecognition from "../../public/icon-brand-recognition.svg";

import {
    Div,
    Flex,
    Heading,
    Para,
    SubTitleWrapper,
    CardsWrapper,
    Card1,
    Heading1,
    Para1,
    Circle,
    Line,
} from "./StatisticsStyled";

const Content = () => {
    return (
        <Flex>
            <Div>
                <SubTitleWrapper>
                    <Heading>Advanced Statistics</Heading>
                    <Para>
                        Track how your links are working performing accross the web with our
                        advance statistics dashboard.
                    </Para>
                </SubTitleWrapper>
                <CardsWrapper>
                    <Card1>
                        <Circle>
                            <Image src={BrandRecognition} alt="brand-recognition" />
                        </Circle>
                        <Heading1>Brand Recognition</Heading1>
                        <Para1>
                            Boost your brand recognition with each click. Generic links don&apos;t
                            mean a thing. Branded links help instil confidence in your
                            content.
                        </Para1>
                    </Card1>
                    <Line />
                    <Card1>
                        <Circle>
                            <Image src={BrandRecognition} alt="brand-recognition" />
                        </Circle>
                        <Heading1>Brand Recognition</Heading1>
                        <Para1>
                            Boost your brand recognition with each click. Generic links don&apos;t
                            mean a thing. Branded links help instil confidence in your
                            content.
                        </Para1>
                    </Card1>
                    <Line />
                    <Card1>
                        <Circle>
                            <Image src={BrandRecognition} alt="brand-recognition" />
                        </Circle>
                        <Heading1>Brand Recognition</Heading1>
                        <Para1>
                            Boost your brand recognition with each click. Generic links don&apos;t
                            mean a thing. Branded links help instil confidence in your
                            content.
                        </Para1>
                    </Card1>
                    <Line />
                </CardsWrapper>
            </Div>
        </Flex>
    );
};

export default Content;
