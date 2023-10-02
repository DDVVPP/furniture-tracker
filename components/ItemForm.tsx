import Link from "next/link";

import { ItemFormProps, TextFieldType } from "./types";

const ItemForm = ({
  project,
  room,
  setItem,
  item,
  saving,
  handleSubmit,
}: ItemFormProps): JSX.Element => {
  /* TODO:
    - Error validation
    - Varying input types
    - Unit tests - Arrange, Act, Assert
  */
  const textField = ({
    label,
    textInput,
    placeholder,
    isRequired,
  }: TextFieldType): JSX.Element => {
    return (
      <label>
        <span className="font-semibold text-sm text-gray-700">
          {label}
        </span>
        {
          isRequired &&
          <span className=" text-sm text-gray-500">
            {' '}(required)
          </span>
        }

        <input
          value={textInput}
          onChange={(event) => setItem({ ...item, [textInput]: event.target.value })}
          placeholder={placeholder}
          required={isRequired}
          className="form_input"
        />
      </label>
    )
  }

  return (
    <section className="flex-start flex-col w-full max-w-full">
      <h1 className="subhead_text text-left">
        <span className="blue_gradient">
          {project.name}
        </span>
      </h1>
      <h2 className="font-semibold mt-2 text-left">
        <span className="blue_gradient">
         {room}
        </span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-5 p-8 w-full max-w-2xl gap-4 rounded-xl border border-gray-200 bg-gray-100">

        {
          textField({
            label: 'Supplier',
            textInput: item.supplier,
            placeholder: 'Knoll',
            isRequired: true
          })
        }
        {
          textField({
            label: 'Item Name',
            textInput: item.name,
            placeholder: "Marcel Breuer Chaise Lounge",
            isRequired: true
        })
        }
        {
          textField({
            label: 'Finish',
            textInput: item.finish,
            placeholder: "Natural oak frame with saddle H cognac leather",
            isRequired: true
        })
        }

        <div className="flex-end mt-4 gap-4">
          <Link href='/' className="mr-3 text-sm text-gray-500">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={saving}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>

      </form>
    </section>
  )
}

export default ItemForm
