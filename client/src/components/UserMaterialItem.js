import React, {useState} from 'react';
import {Button, Card, Col} from "react-bootstrap";
import UpdateMaterial from "./modals/UpdateMaterial";
import {deleteMaterial} from "./http/materialAPI";
import {observer} from "mobx-react-lite";

const UserMaterialItem = observer(({user, material,materialUpdate ,removeMaterial}) => {
    const [updateVisible, setUpdateVisible] = useState()

    return (
        <Col md={9}>
            <Card className={"mt-2 mb-2 p-1"} style={{cursor:'pointer'}} border={"primary"}>
                <div className={"p-1"}>
                    <div className={"d-flex justify-content-between"}>
                        <h5>{material?.title}</h5>
                        <div style={{color:"gray"}}>Опубликовано: {material.date_publication}</div>
                    </div>
                    <div className={"d-flex justify-content-between"}>
                        <div>
                            <div>Автор: {user.allUsers[material.userId - 1]?.name}</div>
                            <div>Описание: {material?.description}</div>
                        </div>
                        <div>
                            <Button className={"me-2"} variant={"success"} onClick={() => setUpdateVisible(true)}>Редактировать</Button>
                            <Button variant={"danger"} onClick={() => removeMaterial(material)}>Удалить</Button>
                        </div>
                    </div>
                </div>
            </Card>
            <UpdateMaterial material={material} show={updateVisible} onHide={() => setUpdateVisible(false)} onUpdate={materialUpdate}/>
        </Col>
    );
});
export default UserMaterialItem;