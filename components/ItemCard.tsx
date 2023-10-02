'use client';

import { useState, FormEvent } from 'react';

import { projects } from './data';
import { ItemType } from './types';
import ItemForm from './ItemForm';

const ItemCard = () => {
  const project = projects[5];
  const filteredRooms = ['Foyer', 'Living Room'];

  const [isSaving, setIsSaving] = useState(false);
  const [item, setItem] = useState<ItemType>({
    name: '', supplier: '', finish: ''
  });
  const [renderForm, setRenderForm] = useState(false);

  const saveItem = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);
    try {
      // POST item with trade and list price calculations/totals
    } catch (error) {
      console.error(error)
    } finally {
      setIsSaving(false)
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
          isSaving={isSaving}
          handleSubmit={saveItem}
          setItem={setItem}
          item={item}
        />
      )}
    </div>
  )
}

export default ItemCard
