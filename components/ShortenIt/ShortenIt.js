import React, { useState, useEffect, Fragment, useRef } from "react";
import axios from "axios";

import { CopyToClipboard } from "react-copy-to-clipboard";
import {
    Flex,
    Background,
    SearchBar,
    Button,
    LinkList,
    CopyBtn,
    GivenLink,
    Paragraph,
    LinkContainer,
    InputError
} from "../ShortenIt/ShortenItStyled";

const Searchbar = () => {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [linksList, setLinksList] = useState([]);
    const [hidden, setHidden] = useState(true);
    const inputRef = useRef();

    const handleCopy = ({ target }) => {
        if (target.innerText == 'Copy') {
            target.style.backgroundColor = '#3a3053';
            target.innerText = 'Copied';
            setTimeout(() => {
                target.innerText = 'Copy';
                target.style.backgroundColor = '#2acfcf';
            }, 3000);
        }
    }

    const handleOnClick = async (e) => {
        if (query !== "") {
            setHidden(true);
            try {
                setLoading(true);
                let res = await axios.get(
                    `https://api.shrtco.de/v2/shorten?url=${query}`
                );
                console.log(res.data);
                setResponse(res.data);
                setLinksList([...linksList, res.data]);
                setLoading(false);
                setQuery('');
            } catch (e) {
                console.log(e);
            }
        } else {
            setHidden(false);
        }
    };

    return (
        <Flex>
            <Background>
                <SearchBar
                    ref={inputRef}
                    input
                    type="text"
                    placeholder="Shorten a link here..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button onClick={handleOnClick} type='submit'>
                    {loading ? "Shortening...." : "Shorten It!"}
                </Button>
                <InputError hidden={hidden}>
                    Please Provide some valid Input
                </InputError>
            </Background>
            {linksList.map((response, idx) =>
                <Fragment key={idx}>
                    <LinkList>
                        <GivenLink>{response.result.original_link}</GivenLink>
                        <LinkContainer>
                            <Paragraph>{response.result.short_link}</Paragraph>
                            <CopyToClipboard
                                text={response.result.short_link}
                            >
                                <CopyBtn onClick={e => handleCopy(e)}>Copy</CopyBtn>
                            </CopyToClipboard>
                        </LinkContainer>
                    </LinkList>
                </Fragment>
            )}
        </Flex>
    );
};

export default Searchbar;
