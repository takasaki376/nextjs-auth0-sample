import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { VFC } from "react";
import { Col, Row } from "reactstrap";
import { contentData } from "src/utils/contentData";

export const Content: VFC = () => {
  return (
    //   TODO
    <div className="my-5 px-8 py-0" data-testid="content">
      <h2 className="my-5 text-center" data-testid="content-title">
        What can I do next?
      </h2>
      <Row className="flex justify-between" data-testid="content-items">
        {contentData.map((col, i) => (
          <Col key={i} md={5} className="mb-4">
            <h6 className="mb-3">
              <a href={col.link}>
                <FontAwesomeIcon icon="link" className="mr-2" />
                {col.title}
              </a>
            </h6>
            <p>{col.description}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};
