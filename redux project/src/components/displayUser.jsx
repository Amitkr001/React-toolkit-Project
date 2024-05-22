import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

// Define the Wrapper component using styled-components
const Wrapper = styled.div`
    padding: 5px;
    border-radius: 5px;
    margin-right: 10px;

    ul {
        list-style-type: none; /* Removes default bullet points */
        padding: 0; /* Removes default padding */
        margin: 0; /* Removes default margin */
    }

    li {
        text-align: left; /* Aligns text to the left */
        padding: 5px 0; /* Adds some padding for better readability */
        border-bottom: 1px solid #ddd; /* Optional: adds a bottom border for separation */
    }
`;

const DisplayUser = () => {
    const data = useSelector((state) => state.user);

    if (!data || data.length === 0) {
        return <Wrapper>No users found.</Wrapper>;
    }

    return (
        <Wrapper>
            <ul>
                {data.map((user, id) => (
                    <li key={id}>{user}</li>
                ))}
            </ul>
        </Wrapper>
    );
};

export default DisplayUser;
