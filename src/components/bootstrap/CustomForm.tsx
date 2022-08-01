import { FormEvent, useState } from 'react';
import { useAppDispatch, SearchTerm } from '../../store';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';

const CustomForm: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useAppDispatch();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(SearchTerm(searchInput));
    setSearchInput('');
  };

  return (
    <Card style={{ width: '50vw', margin: '2rem auto', fontSize: '1.8rem' }}>
      <Form onSubmit={onSubmitHandler} style={{ margin: '2rem' }}>
        <Row className='align-items-center'>
          <Col xs='auto'>
            <Form.Control
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              className='mb-2'
              id='inlineFormInput'
              placeholder='Enter Package Name'
              style={{ fontSize: '1.6rem' }}
            />
          </Col>
          <Col xs='auto'>
            <Button type='submit' className='mb-2' style={{ fontSize: '1.6rem' }} variant='dark'>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default CustomForm;
