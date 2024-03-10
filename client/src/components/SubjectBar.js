import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const SubjectBar = observer(() => {
    const {subject} = useContext(Context)
    const [mark, setMark] = useState(false)
    return (
        <ListGroup className={"list-group-bg:"}>
            {subject.subjects.map(subjectItem =>
            <ListGroup.Item
                key={subjectItem.id}
                onClick={() => {
                    if (!mark) {
                        subject.setSelectedSubject(subjectItem)
                        setMark(true)
                    }
                    else {
                        subject.setSelectedSubject({})
                        setMark(false)
                    }
                }}
                active={subjectItem.id === subject.selectedSubject.id}
                style={{cursor:'pointer'}}
            >
                {subjectItem.title}
            </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default SubjectBar;