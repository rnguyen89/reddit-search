import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Container, Row, Col
} from 'reactstrap';
import Center from 'react-center';

const SearchResults = props => (


  <div>
    {props.redditResults.map((redditResult) => {
      return (
        <div key={redditResult.data.id}>
          <Row>
            <Col xs="6" sm="4">
              <Card>
                <CardImg top width={redditResult.data.thumbnail_width
                } src={redditResult.data.thumbnail} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{redditResult.data.title}</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button color="primary" size="sm" href={`https://reddit.com${redditResult.data.permalink}`} target="_blank">Reddit Thread</Button>
                  <Button color="primary" size="sm" href={redditResult.data.url} target="_blank">URL</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      )
    })}
  </div>
)


export default SearchResults;

