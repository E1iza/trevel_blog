export default function Button({ onButtonClick, children }) {
  return (
    <div className="mt-3 sm:mt-0 sm:ml-4">
      <button
        onClick={() => onButtonClick()}
        type="button"
        className="inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {children}
      </button>
  </div>
  )
}