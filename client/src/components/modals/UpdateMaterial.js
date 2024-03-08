import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {fetchSubjects} from "../http/subjectAPI";
import {fetchCategories} from "../http/categoryAPI";
import {fetchGroups} from "../http/groupAPI";
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {updateMaterial} from "../http/materialAPI";

const UpdateMaterial = observer(({material, show, onHide}) => {
    const {user, subject, group, category} = useContext(Context)
    const [title,setTitle] = useState(material.title)
    const [description,setDescription] = useState(material.description)
    const [file,setFile] = useState()
    const [currentCategory, setCurrentCategory] = useState(material.categoryId)
    const [currentGroup, setCurrentGroup] = useState(material.groupId)
    const [currentSubject, setCurrentSubject] = useState(material.subjectId)
    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const updateExistMaterial = () => {
        const formData = new FormData()
        formData.append('id', material.id)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('date_publication', new Date())
        formData.append('file', file)
        formData.append('userId', user.user.id)
        formData.append('categoryId', material.categoryId || category.selectedCategory.id)
        formData.append('subjectId', material.subjectId || subject.selectedSubject.id)
        formData.append('groupId', material.groupId || group.selectedGroup.id)
        updateMaterial(formData).then(data => onHide())
    }

    useEffect(() => {
        fetchSubjects().then(data => subject.setSubjects(data))
        fetchCategories().then(data => category.setCategories(data))
        fetchGroups().then(data => group.setGroups(data))
    }, [])

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить материал
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className={"mt-2 mb-2"}>
                        <Dropdown.Toggle>{subject.selectedSubject.title || subject.subjects[currentSubject-1].title}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {subject.subjects.map(subjectItem =>
                                <Dropdown.Item onClick={() => subject.setSelectedSubject(subjectItem)} key={subjectItem.id}>{subjectItem.title}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={"mt-2 mb-2"}>
                        <Dropdown.Toggle>{category.selectedCategory.title || category.categories[currentCategory-1].title}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {category.categories.map(categoryItem =>
                                <Dropdown.Item onClick={() => category.setSelectedCategory(categoryItem)} key={categoryItem.id}>{categoryItem.title}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={"mt-2 mb-2"}>
                        <Dropdown.Toggle>{group.selectedGroup.title || group.groups[currentGroup-1].title}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {group.groups.map(groupItem =>
                                <Dropdown.Item onClick={() => group.setSelectedGroup(groupItem)} key={groupItem.id}>{groupItem.title}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className={"mt-3"}
                        placeholder={"Введите название"}
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    >

                    </Form.Control>
                    <Form.Control
                        className={"mt-3"}
                        placeholder={"Введите описание"}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    >

                    </Form.Control>
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
                <Button variant={"success"} onClick={updateExistMaterial}>Добавить</Button>
                <Button variant={"danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});
export default UpdateMaterial;