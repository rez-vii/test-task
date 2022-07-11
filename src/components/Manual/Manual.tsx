import React from 'react';
import {Col} from "reactstrap";
import {useSelector} from "react-redux";
import {SiteType} from "../../utils/types";
import {SITES_ARRAY} from "../../utils/constants";
import {RootState} from "../../store/store";
import {ManualMove} from "./ManualMove/ManualMove";
import {Site} from "../Universal/Site/Site";
import {Card} from "../Universal/Card/Card";
import './style.css';


export const Manual: React.FC = () => {
  const {workers} = useSelector((state: RootState) => state.main);

  const generateCard = (site: SiteType) => {
    return workers.map((worker, index) => (
      worker.site === site.id && (
          <Card worker={worker}
                key={index}
                dragDropCard={false}
                provided={null}
                snapshot={null}
          />
        )
    ))
  }

  return (
    <>
      <Col md={5}>
        <Site site={SITES_ARRAY[0]} key={SITES_ARRAY[0].id} dragDropCard={false} provided={null}>
          {generateCard(SITES_ARRAY[0])}
        </Site>
      </Col>
      <ManualMove/>
      <Col md={5}>
        <Site site={SITES_ARRAY[1]} key={SITES_ARRAY[1].id} dragDropCard={false} provided={null}>
          {generateCard(SITES_ARRAY[1])}
        </Site>
      </Col>
    </>
  )
}
