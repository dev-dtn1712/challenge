import React, { useEffect, useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';
import { getItems, getListOfAges } from '../../apis/ages';
import LoadingComponent from '../../components/LoadingComponent';
import '../_styels/users.css';

const Users = () => {
  const [items, setItems] = useState([]);
  const [ages, setAges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      setLoading(true);
      const items = await getItems();
      setItems(items);
      setLoading(false);
    }

    fetchItems();
  }, []);

  const selectItem = async (item) => {
    setLoading(true);
    const ages = await getListOfAges(item);
    setLoading(false);
    setAges(ages);
  };

  const renderAgeList = () => (
    <ListGroup variant="flush" className="w-50">
      <ListGroup.Item className="d-flex justify-content-between">
        <p className="column h6">Age</p>
        <p className="column h6">Count</p>
      </ListGroup.Item>
      {loading ? <LoadingComponent /> : ages.map((ageItem) => (
        <ListGroup.Item
          className="d-flex justify-content-between"
          key={ageItem.age}
        >
          <p className="column h6">{ageItem.age}</p>
          <p className="column h6">{ageItem.count}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

  return (
    <div className="py-5">
      <header>
        <p className="h3">Age Demographic Of Users With __</p>
      </header>
        <DropdownButton variant="primary" title="items">
        {items.map(item => (
          <Dropdown.Item
            onClick={() => selectItem(item)}
            key={item}
            eventKey="item"
          >
            {item}
          </Dropdown.Item>
        ))}
        </DropdownButton>
      {renderAgeList()}
    </div>
  );
};

export default Users;