import Link from "next/link";

const Form = ({
  project,
  room,
  handleSubmit,
  setItem,
  item
}: any): JSX.Element => {

  const formInput = (
    label: string,
    input: string,
    placeholder: string
    ): JSX.Element => {
    return (
      <label>
        <span className="font-satoshi font-semibold text-sm text-gray-700">
          {label} {` `}
        </span>

        <input
          value={input}
          onChange={(e) => setItem({ ...item, input: e.target.value })}
          placeholder={placeholder}
          required
          className="form_input"
        />
      </label>
    )
  }

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="subhead_text text-left">
        <span className="blue_gradient">
          {project && project.name}
        </span>
      </h1>
      <h2 className="mt-2 text-left font-semibold">
        <span className="blue_gradient">
         {room}
        </span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mt-5 p-8 w-full max-w-2xl flex flex-col gap-4 rounded-xl border border-gray-200 bg-gray-100">

        {
          formInput(
            'Supplier', item.supplier, 'Knoll'
          )
        }
        {
          formInput(
            'Item', item.item, "Marcel Breuer Chaise Lounge"
          )
        }
        {
          formInput(
            'Finish', item.finish, "Natural oak frame with saddle H cognac leather"
          )
        }

        <div className="flex-end mt-4 gap-4">
          <Link href='/' className="mr-3 text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={false}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {false ? 'Saving...' : 'Save'}
          </button>
        </div>

      </form>
    </section>
  )
}

export default Form
