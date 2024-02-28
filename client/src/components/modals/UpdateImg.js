import React, {useContext, useState} from 'react';
import {updateProfileImg} from "../http/userAPI";
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";

const UpdateImg = ({show, onHide}) => {
    const {user} = useContext(Context)
    const [file,setFile] = useState(null)

    const loadImg = () => {
        const formData = new FormData()
        formData.append('id', user.user.id)
        formData.append('profile_img', file)
        updateProfileImg(formData).then(data => {onHide()})
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Редактировать фото профиля
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className={"mt-3"}
                        placeholder={"Выберите файл"}
                        type="file"
                        onChange={selectFile}
                    >
                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"success"} onClick={loadImg}>Обновить</Button>
                <Button variant={"danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateImg;