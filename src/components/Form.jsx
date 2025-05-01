import { UserCircleIcon } from '@heroicons/react/24/solid'
import {useState, useRef, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {closeForm, resetForm} from "../slices/formSlice.js";
import ButtonAddPost from "./ButtonAddPost.jsx";

export default function Form() {
  const stateForm = useSelector((state) => state.form);
  const isSubmitted = useSelector(state => state.form.isSubmitted);

  const dispatch = useDispatch();

  const [localFormData, setLocalFormData] = useState(stateForm.formData);

  const initialPreview = { image: '', userPhoto: '' };
  const [preview, setPreview] = useState(initialPreview);

  const fileInputRef = useRef(null);

  useEffect(() => {
    return () => {
      if (!isSubmitted) {
        dispatch(resetForm());
      }
    }
  }, [dispatch, isSubmitted]);

  useEffect(() => {
    setLocalFormData(stateForm.formData);
  }, [stateForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({ ...localFormData, [name]: value });
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.match('image.*')) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const base64 = event.target.result;
        setPreview({ ...preview, [e.target.name]: base64});
        const img = {
          id: Date.now(),
            base64,
          name: file.name,
          size: file.size,
          type: file.type
        }
        setLocalFormData({ ...localFormData, [e.target.name]: img});
      }

      reader.readAsDataURL(file);
    }
  }

  const deleteImage = (name) => {
    setPreview({...preview, [name]: ''});
    setLocalFormData({ ...localFormData, [name]: '' });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const handleClose = () => {
    dispatch(closeForm());
    setPreview(initialPreview);
  }

  const form = (
    <form className="mt-15">
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base/7 font-semibold text-gray-900">Добавление поста</h2>
        <p className="mt-1 text-sm/6 text-gray-600">
          Заполните данные и нажмите "Сохранить" для добавления нового поста.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label htmlFor="nickname" className="block text-sm/6 font-medium text-gray-900">
              Ваше имя
            </label>
            <div className="mt-2">
              <div
                className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                <input
                  onChange={handleChange}
                  value={localFormData.nickname}
                  id="nickname"
                  name="nickname"
                  type="text"
                  placeholder="janesmith"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="userPhoto" className="block text-sm/6 font-medium text-gray-900">
              Ваше фото
            </label>
            <div className="mt-2 flex items-center gap-x-3">
              <div className="relative flex items-center rounded-full bg-white outline-none">
                {(preview.userPhoto &&
                  <>
                    <img src={preview.userPhoto} alt="Preview" className="size-12 object-cover rounded-full"/>
                    <div onClick={() => deleteImage('userPhoto')} className="cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor" className="size-6">
                        <path color="#FF0000" d="M6 18 18 6M6 6l12 12"/>
                      </svg>
                    </div>
                  </>
                  ) ||
                  <>
                    <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300"/>
                    <button
                      onClick={() => fileInputRef.current.click()}
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                    >
                        Загрузить
                      </button>
                  </>
                }
            </div>
            <input
              type="file"
                name="userPhoto"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
              Название поста
            </label>
            <div className="mt-2">
              <div
                className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                <input
                  onChange={handleChange}
                  value={localFormData.title}
                  id="title"
                  name="title"
                  type="text"
                  placeholder=""
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">
              Описание
            </label>
            <div className="mt-2">
                <textarea
                  onChange={handleChange}
                  value={localFormData.description}
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
            <p className="mt-3 text-sm/6 text-gray-600">Поделитесь своими впечатлениями от путешествия.</p>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
              Место вашего путешествия
            </label>
            <div className="mt-2">
              <input
                onChange={handleChange}
                value={localFormData.country}
                id="country"
                name="country"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="image" className="block text-sm/6 font-medium text-gray-900">
              Фото с вашего путешествия
            </label>
            <div className="relative mt-2 flex justify-center rounded-lg border border-gray-900/25 px-6 py-10">
              {(preview.image && (
                <>
                  <img
                    src={preview.image}
                    alt="Preview"
                    className="size-64"
                  />
                  <div onClick={() => deleteImage('image')} className="absolute top-0 right-0 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" className="size-6">
                      <path color="#FF0000" d="M6 18 18 6M6 6l12 12"/>
                    </svg>
                  </div>
                </>
              )) || (
                <div className="text-center">
                  <div className="mt-4 flex text-sm/6 text-gray-600">
                    <label
                      htmlFor="image"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                    >
                      <span className="mx-auto">Загрузите файл</span>
                      <input
                        accept="image/*"
                        onChange={handleImageChange}
                        id="image"
                        name="image"
                        type="file"
                        className="sr-only"/>
                    </label>
                  </div>
                  <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button onClick={() => handleClose()} type="button" className="text-sm/6 font-semibold text-gray-900">
          Назад
        </button>
        <button
          onSubmit={handleSubmit}
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Сохранить
        </button>
      </div>
    </form>
  );

  return (
    <div className='mx-auto max-w-2xl mb-10'>
      {!stateForm.isOpenForm ? <ButtonAddPost/> : null}
      {stateForm.isOpenForm ? form : null}
    </div>
  )
}
