import Card from 'react-bootstrap/Card';

function BasicCard(path, title) {
  return (
    <Card>
      <Card.Img variant="top" src={`${process.env.REACT_APP_BASE_URL_IMG}${path}`} style={{ width: '100%' }} />
      <Card.Body>
        <Card.Title style={{ height: '25px', textAlign: 'center' }}>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;
