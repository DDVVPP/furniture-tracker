'use client';

import { useState, FormEvent } from 'react';

import { projects } from './data';
import { ItemType } from './types';
import ItemForm from './ItemForm';

const ItemCard = () => {
  const project = projects[5];
  const filteredRooms = ['Foyer', 'Living Room'];

  const [saving, setSaving] = useState(false);
  const [item, setItem] = useState<ItemType>({
    name: '', supplier: '', finish: ''
  });
  const [renderForm, setRenderForm] = useState(false);

  const saveItem = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);
    try {
      // POST item
    } catch (error) {
      console.error(error)
    } finally {
      setSaving(false)
    }
  };

  return (
    <div className='furniture_card'>
      <button onClick={() => setRenderForm(true)}>
        Add item
      </button>

      {renderForm && (
        <ItemForm
          project={project}
          room={filteredRooms[0]}
          saving={saving}
          handleSubmit={saveItem}
          setItem={setItem}
          item={item}
        />
      )}
    </div>
  )
}

export default ItemCard
