'use client';

import { useState } from 'react';

import { projects } from './data';
import Form from './Form';

const FurnitureCard = () => {
  const project = projects[5];
  const filteredRooms = ['Foyer', 'Living Room'];

  const [saving, setSaving] = useState(false);
  const [item, setItem] = useState({ supplier: '', itemName: '' })
  const [renderForm, setRenderForm] = useState(false);

  const saveItem = async (e: any) => {
    e.preventDefault();
  };

  return (
    <div className='furniture_card'>
      <button onClick={() => setRenderForm(true)}>
        Add item
      </button>

      {renderForm && (
        <Form
          project={project}
          room={filteredRooms[0]}
          handleSubmit={saveItem}
          setItem={setItem}
          item={item}
        />
      )}
    </div>
  )
}

export default FurnitureCard
