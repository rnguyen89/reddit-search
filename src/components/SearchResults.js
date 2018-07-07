import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink,
  Row, Col, Container
} from 'reactstrap';

const SearchResults = props => (


  <Container>
    <Row>
      {props.redditResults.map((redditResult) => {
        return (
          <div key={redditResult.data.id}>
            <Col xs="6" sm="4">
              <Card className="text-center" >
                <CardImg top width="180"
                src={redditResult.data.preview ? 
                    redditResult.data.thumbnail : "https://applets.imgix.net/https%3A%2F%2Fassets.ifttt.com%2Fimages%2Fchannels%2F1352860597%2Ficons%2Fon_color_large.png%3Fversion%3D0?ixlib=rails-2.1.3&w=240&h=240&auto=compress&s=14be39acc55fbe4638b776011273dfd5"}
                alt="Card image cap" />
                <CardBody>
                  <CardTitle>r/{redditResult.data.subreddit}</CardTitle>
                  <CardSubtitle>User: {redditResult.data.author}</CardSubtitle>
                  <CardText>{redditResult.data.title}</CardText>
                  <CardLink href={`https://reddit.com${redditResult.data.permalink}`} target="_blank">Reddit Thread</CardLink>
                  <CardLink href={redditResult.data.url} target="_blank">URL</CardLink>
                </CardBody>
              </Card>
            </Col>
          </div>
        )
      })}
    </Row>
  </Container>
)


export default SearchResults;

