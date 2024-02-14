import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Document} from "react-pdf";

const MaterialPage = () => {
    const material = {id:1, title:'Название', description:'Лекции Денисова', date_publication:"2023-12-18 20:08:20.563+03", file:'http://repo.ssau.ru/bitstream/Uchebnye-izdaniya/Osnovy-baz-dannyh-96560/1/Крикунов%20М.М.%20Основы%20баз%20данных%202021.pdf'}
    return (
        <Container>
            <Row><h3>Название материала</h3></Row>
            <Row>
                <Col className={"d-flex"}>
                <Card className={"me-1 p-1"}>Категория</Card>
                <Card className={"me-1 p-1"}>Группа</Card>
            </Col>
            </Row>
            <Row className={"d-flex mt-3"}>
                <Col md={8}>
                    <object data={process.env.REACT_APP_API_URL + material.file + "#zoom=85&scrollbar=0&toolbar=0&navpanes=0"} style={{width:850, height:650}}/>
                </Col>
                <Col md={4}>
                    <Card className={"d-flex flex-column"} style={{width:300, height:200}}>
                        <div className={"ms-2 p-2"}><Button variant={"primary"}>Скачать</Button></div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default MaterialPage;