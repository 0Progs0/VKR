import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const SubjectBar = observer(() => {
    const {material} = useContext(Context)
    return (
        <ListGroup className={"list-group-bg:"}>
            {material.subjects.map(subject =>
            <ListGroup.Item
                key={subject.id}
                onClick={() => material.setSelectedSubject(subject)}
                active={subject.id === material.selectedSubject.id}
                style={{cursor:'pointer'}}
            >
                {subject.title}
            </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default SubjectBar;