import {openForm} from "../slices/formSlice.js";
import {useDispatch} from "react-redux";

export default function ButtonAddPost() {
  const dispatch = useDispatch();

  return (
    <div className="border-b border-gray-200 py-5 flex items-center justify-center">
      <div className="mt-3 sm:mt-0 sm:ml-4">
        <button
          onClick={() => dispatch(openForm())}
          type="button"
          className="inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Добавить новый пост
        </button>
      </div>
    </div>
  )
}