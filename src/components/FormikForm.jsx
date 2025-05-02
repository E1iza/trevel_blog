import _ from 'lodash';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import { updateForm, closeForm} from "../slices/formSlice.js";
import { actions } from "../slices/postsSlice.js";

const getFormatDate = () => {
  const today = new Date();
  const date =  today.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const datetime = today.toLocaleString();
  return [date, datetime];
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Обязательное поле').min(3, 'Не меньше 3 символов'),
  title: Yup.string().required('Обязательное поле').min(5, 'Не меньше 5 символов'),
  country: Yup.string().required('Обязательное поле').min(3, 'Не меньше 3 символов'),
  description: Yup.string().required('Обязательное поле').min(10, 'Не меньше 10 символов').max(300, 'Не больше 300 символов'),
});

export default function FormikForm() {
  const dispatch = useDispatch();
  const { formData } = useSelector(state => state.form);

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ ...formData, [name]: value }));
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.match('image.*')) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const base64 = event.target.result;
        const img = {
          type: 'base64',
          url: base64,
        }

        dispatch(updateForm({ ...formData, [e.target.name]: img }));
      }

      reader.readAsDataURL(file);
    }
  }

  const deleteImage = (name) => {
    const defaultImages = {
      image: { type: 'default', url: new URL('../assets/images/photos/img_default.png', import.meta.url).href },
      userPhoto: { type: 'default', url: new URL('../assets/images/users/author_default.jpg', import.meta.url).href }
    }

    dispatch(updateForm({ ...formData, [name]: defaultImages[name] }));
  }

  const handleSubmit = () => {
    const [date, datetime] = getFormatDate();

    if (formData.id) {
      dispatch(actions.updatePost({
        id: formData.id,
        changes: {
          ...formData,
          date,
          datetime,
        },
      }))
    } else {
      dispatch(actions.addPost({
        id: _.uniqueId("p_"),
        ...formData,
        date,
        datetime,
      }));
    }
    dispatch(closeForm());
  }

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      onChange={handleChange}
      validateOnChange={false}
      validateOnBlur={true}
      enableReinitialize
    >
      <Form>
        <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">
                {(formData.id && <span>Редактирование поста</span>) || <span>Добавление поста</span>}
              </h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                {(formData.id && <span>Измените данные и нажмите "Сохранить" для обновления поста.</span>) ||
                  <span>Заполните данные и нажмите "Сохранить" для добавления нового поста.</span>
                }
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                    Ваше имя
                  </label>
                  <div className="mt-2">
                    <Field
                      onChange={handleChange}
                      type="text"
                      name="username"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    <ErrorMessage name="username" component="div" className="text-sm text-red-900 mr-2" />
                  </div>
                </div>

          <div className="col-span-full">
            <label htmlFor="userPhoto" className="block text-sm/6 font-medium text-gray-900">
              Ваше фото
            </label>
            <div className="mt-2 flex items-center gap-x-3">
              <div className="relative flex items-center rounded-full bg-white outline-none">
                {(formData.userPhoto.type !== 'default' &&
                  <>
                    <img src={formData.userPhoto.url} alt="Preview" className="size-12 object-cover rounded-full"/>
                    <div onClick={() => deleteImage('userPhoto')} className="cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor" className="size-6">
                        <path color="#FF0000" d="M6 18 18 6M6 6l12 12"/>
                      </svg>
                    </div>
                  </>
                  ) ||
                  <>
                    <img src={formData.userPhoto.url} alt="Preview" className="size-12 object-cover rounded-full mr-2"/>
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
              <Field
                onChange={handleChange}
                id="title"
                name="title"
                type="text"
                placeholder=""
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <ErrorMessage name="title" component="div" className="text-sm text-red-900 mr-2" />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">
              Описание
            </label>
            <div className="mt-2">
                <Field
                  as="textarea"
                  onChange={handleChange}
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              <ErrorMessage name="description" component="div" className="text-sm text-red-900 mr-2" />
            </div>
            <p className="mt-3 text-sm/6 text-gray-600">Поделитесь своими впечатлениями от путешествия.</p>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
              Место вашего путешествия
            </label>
            <div className="mt-2">
              <Field
                onChange={handleChange}
                id="country"
                name="country"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <ErrorMessage name="country" component="div" className="text-sm text-red-900 mr-2" />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="image" className="block text-sm/6 font-medium text-gray-900">
              Фото с вашего путешествия
            </label>
            <div className="relative mt-2 flex justify-center rounded-lg border border-gray-900/25 px-6 py-10">
              {(formData.image.type !== 'default' && (
                <>
                  <img
                    src={formData.image.url}
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
            <button onClick={() => dispatch(closeForm())} type="button" className="text-sm/6 font-semibold text-gray-900">
              Назад
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Сохранить
            </button>
          </div>
      </Form>
    </Formik>
  )
}
