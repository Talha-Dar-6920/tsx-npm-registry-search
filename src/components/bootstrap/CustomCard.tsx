import { Card } from 'react-bootstrap';
import { RequestedDataInterface } from '../../store/interfaces';

const CustomCard: React.FC<RequestedDataInterface> = ({ name, version, description, date }) => {
  return (
    <Card style={{ width: '50vw', margin: '2rem auto', fontSize: '1.8rem' }}>
      <Card.Body>
        <Card.Title style={{ fontSize: '3rem', textTransform: 'uppercase' }}>{name}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted' style={{ fontSize: '1.5rem', marginLeft: '.2rem' }}>
          {version}
        </Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Footer className='text-muted'>{date.slice(0, date.indexOf('T'))}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
