import React from 'react';
import {Form, Row} from "react-bootstrap";

const Search = ({onChange}) => {
    const handleSearchChange = event => {
        onChange(event.target.value)
    };
    return (
        <Row>
            <Form className={"mb-2"}>
                <Form.Group >
                    <Form.Control
                        className={"mt-2"}
                        placeholder={"Введите название"}
                        onChange={handleSearchChange}
                    >
                    </Form.Control>
                </Form.Group>
            </Form>
        </Row>
    );
};

export default Search;