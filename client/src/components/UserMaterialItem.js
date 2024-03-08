import React, {useState} from 'react';
import {Button, Card, Col} from "react-bootstrap";
import UpdateMaterial from "./modals/UpdateMaterial";
import {deleteMaterial} from "./http/materialAPI";

const UserMaterialItem = ({user, material}) => {
    const [updateVisible, setUpdateVisible] = useState()

    const removeMaterial = () => {
        deleteMaterial(material.id).then(data => console.log(data))
    }
    return (
        <Col md={9}>
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
                            <Button className={"me-2"} variant={"success"} onClick={() => setUpdateVisible(true)}>Редактировать</Button>
                            <Button variant={"danger"} onClick={removeMaterial}>Удалить</Button>
                        </div>
                    </div>
                </div>
            </Card>
            <UpdateMaterial material={material} show={updateVisible} onHide={() => setUpdateVisible(false)}/>
        </Col>
    );
};
export default UserMaterialItem;