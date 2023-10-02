import { Dispatch, FormEventHandler, SetStateAction } from 'react';

export type ProjectType = {
  id: string,
  name: string,
  image: string,
}

export type ItemType = {
  name: string,
  supplier: string,
  finish: string,
}

export type ItemFormProps = {
  project: ProjectType,
  room: string,
  setItem: Dispatch<SetStateAction<ItemType>>,
  item: ItemType,
  isSaving: boolean,
  handleSubmit: FormEventHandler<HTMLFormElement>,
}

export type TextFieldType = {
  label: string,
  textInput: string,
  placeholder: string,
  isRequired: boolean,
}
