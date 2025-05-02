import {openForm, updateForm} from "../slices/formSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import Button from "./Button";

export default function AddPost() {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.form.isOpenForm);

  const handleButtonClick = () => {
    dispatch(openForm());
  };

  return (
    <div className="border-b border-gray-200 py-5 flex items-center justify-center">
      {isOpen ?
        <Form /> : <Button onButtonClick={handleButtonClick}>Добавить новый пост</Button>
      }
    </div>
  )
}