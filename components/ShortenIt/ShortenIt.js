import React, { useState, useEffect, Fragment } from "react";
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
} from "../ShortenIt/ShortenItStyled";

const Searchbar = () => {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [linksList, setLinksList] = useState([]);
    useEffect(() => {
        if (copied) {
            setTimeout(() => setCopied(false), 3000);
        }
    }, [copied]);

    const handleOnClick = async (e) => {
        if (query !== "") {
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

        }
    };

    return (
        <Flex>
            <Background>
                <SearchBar
                    input
                    type="text"
                    placeholder="Shorten a link here..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button onClick={handleOnClick}>
                    {loading ? "Shortening...." : "Shorten It!"}
                </Button>
            </Background>
            {linksList.map((response, idx) =>
                <Fragment key={idx}>
                    <LinkList>
                        <GivenLink>{response.result.original_link}</GivenLink>
                        <LinkContainer>
                            <Paragraph>{response.result.short_link}</Paragraph>
                            <CopyToClipboard
                                text={response.result.short_link}
                                onCopy={() => setCopied(true)}
                            >
                                <CopyBtn copied={copied}>{copied ? "Copied" : "Copy"}</CopyBtn>
                            </CopyToClipboard>
                        </LinkContainer>
                    </LinkList>
                </Fragment>
            )}
        </Flex>
    );
};

export default Searchbar;
