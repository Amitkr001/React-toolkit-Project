import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdDeleteForever } from 'react-icons/md';
import { removeUser } from '../store/slices/userSlices';

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
        display: flex;
        align-items: center;
        justify-content: space-between; /* Space between text and button */
    }

    .btn-delete {
        background: none;
        border: none;
        cursor: pointer;
    }
`;

const DisplayUser = () => {
    const data = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const deleteUser = (Id) => {
        dispatch(removeUser(Id));
    };

    return (
        <Wrapper>
            <ul>
                {data.map((user, id) => (
                    <li key={id}>
                        {user} {/* Assuming user object has a 'name' property */}
                        <button className='btn-delete' onClick={() => deleteUser(user.id)}>
                            <MdDeleteForever className="delete-icon" />
                        </button>
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
};

export default DisplayUser;
