import React, {useState} from 'react';
import {Button, ButtonGroup, Col, Container, Row} from "reactstrap";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {Manual} from "../Manual/Manual";
import {DragDrop} from "../DragDrop/DragDrop";
import './style.css'

export const Dashboard: React.FC = () => {
  const [manualMode, setManualMode] = useState(true);
  const { totalCount } = useSelector((state: RootState) => state.main);
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={3}>
            <ButtonGroup className="switchBtn">
              <Button
                color="primary"
                disabled={!manualMode}
                onClick={() => setManualMode(false)}
              >
                DragDrop
              </Button>
              <Button
                color="primary"
                disabled={manualMode}
                onClick={() => setManualMode(true)}
              >
                Manual
              </Button>
            </ButtonGroup>

          </Col>
        </Row>
          {
            manualMode ? (
              <Row className="align-items-center">
                <Manual/>
              </Row>
            ) : (
              <Row className="align-items-center dragDropContainer">
                <DragDrop/>
              </Row>
            )
          }
          <Row>
            <div className="totalCount">
              Total number of employee's transfers:
              <span>
                {totalCount}
              </span>
            </div>
          </Row>
      </Container>
    </>
  )
}
