import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Card, Col} from "react-bootstrap";
import {MATERIAL_ROUTE} from "../utils/consts";

const UserMaterialItem = ({user, material}) => {
    const navigate = useNavigate()
    return (
        <Col md={9} onClick={() => navigate(MATERIAL_ROUTE + '/' + material.id)}>
            <Card className={"mt-2 mb-2 p-1"} style={{cursor:'pointer'}} border={"primary"}>
                <div className={"p-1"}>
                    <div className={"d-flex justify-content-between"}>
                        <h5>{material.title}</h5>
                        <div style={{color:"gray"}}>Опубликовано: {material.date_publication}</div>
                    </div>
                    <div className={"d-flex justify-content-between"}>
                        <div>
                            {<div>Автор: {user.allUsers[material.userId - 1].name}</div>}
                            <div>Описание: {material.description}</div>
                        </div>
                        <div>
                            <Button className={"me-2"} variant={"success"}>Редактировать</Button>
                            <Button variant={"danger"}>Удалить</Button>
                        </div>
                    </div>
                </div>
            </Card>
        </Col>
    );
};
export default UserMaterialItem;