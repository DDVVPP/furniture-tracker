'use client';

import { useState } from 'react';

import { projects } from './data';
import Form from './Form';

const FurnitureCard = () => {
  const project = projects[5];
  const filteredRooms = ['Foyer', 'Living Room'];

  const [saving, setSaving] = useState(false);
  const [item, setItem] = useState({ supplier: '', itemName: '' })

  const addItem = async (e: any) => {
    e.preventDefault();
  };



  return (
    <div className='profile_card'>
      <Form
          project={project}
          room={filteredRooms[0]}
          handleSubmit={addItem}
          setItem={setItem}
          item={item}
        />
    </div>
  )
}

export default FurnitureCard
