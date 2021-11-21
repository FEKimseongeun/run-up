import {
    Button,
    ListGroup,
    Container,
    Row,
    Col
} from "react-bootstrap";
import {Typography} from 'antd'
import AuthInput from "../../../components/AuthInput/AuthInput";
import classNames from "classnames";
import React, { useEffect } from "react";

const { Title } = Typography;
// login logout. keep 10questions in localstorgage + db and dashboard "new quiz" instead. ability to invite friend to the same quiz
export default ({ question, nextQuestion }) => {
    if (!question) return "Loading...";


    const [submittedIndex, setSubmittedIndex] = React.useState();
    const submitted = submittedIndex !== undefined;

    useEffect(() => {
        setSubmittedIndex(undefined);
    }, [question]);

    const submitAnswer = index => {
        if (!submitted) {
            setSubmittedIndex(index);
        }
    };

    return (
        <div>
            <Container>
                <Row className="justify-content-md-center" style={{ flexDirection: 'row',justifyContent: 'space-between'}}>
                    <h2>
                        문제 번호: {question.q_no}
                    </h2>
                    <Title >
                       문제 - {question.q_ques}
                    </Title>
                    <div style={{marginBottom:'20px'}}>
                        <AuthInput></AuthInput>
                    </div>
                </Row>
            </Container>
                <Button className="mt-3" variant="primary" onClick={nextQuestion}>
                    Next
                </Button>
        </div>

    );
};

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
