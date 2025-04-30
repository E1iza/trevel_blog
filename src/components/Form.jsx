import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import AddPost from "./AddPost.jsx";

export default function Form() {
  const form =
    <form>
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
            <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
              Ваше фото
            </label>
            <div className="mt-2 flex items-center gap-x-3">
              <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300"/>
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
              >
                Загрузить
              </button>
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
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={''}
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
                id="country"
                name="country"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="place-image" className="block text-sm/6 font-medium text-gray-900">
              Фото с вашего путешествия
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300"/>
                <div className="mt-4 flex text-sm/6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                  >
                    <span>Загрузите файл</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                  </label>
                  <p className="pl-1">или перетащите сюда</p>
                </div>
                <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Назад
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Сохранить
        </button>
      </div>
    </form>

  return (
    <div className='mx-auto max-w-2xl mb-10'>
      <AddPost/>
      {form}
    </div>
  )
}
