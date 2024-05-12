import React from 'react';
import {Card, Col} from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import {MATERIAL_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const MaterialItem = observer(({user, material}) => {
    const navigate = useNavigate()
    return (
        <Col onClick={() => navigate(MATERIAL_ROUTE + '/' + material.id)}>
            <Card className={"mt-2 mb-2 p-1"} style={{cursor:'pointer'}} border={"primary"}>
                <div className={"p-1"}>
                <div className={"d-flex justify-content-between"}>
                    <h5>{material.title}</h5>
                    <div style={{color:"gray"}}>Опубликовано: {material.date_publication}</div>
                </div>
                    {<div>Автор: {user.allUsers[material.userId - 1]?.name}</div>}
                    <div>Описание: {material.description}</div>
                </div>
            </Card>
        </Col>
    );
});

export default MaterialItem;