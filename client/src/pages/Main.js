import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SubjectBar from "../components/SubjectBar";
import GroupBar from "../components/GroupBar";
import CategoryBar from "../components/CategoryBar";
import MaterialList from "../components/MaterialList";

const Main = () => {
    return (
        <Container>
            <Row className={"mt-2"}>
                <Col md={3}>
                    <SubjectBar/>
                </Col>
                <Col md={9}>
                    <GroupBar/>
                    <CategoryBar/>
                    <MaterialList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Main;