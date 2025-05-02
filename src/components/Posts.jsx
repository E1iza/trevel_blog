import { useSelector, useDispatch } from "react-redux";
import { selectors } from "../slices/postsSlice.js";
import { openForm } from "../slices/formSlice.js";
import { actions } from "../slices/postsSlice.js";

export default function Posts() {
  const posts = useSelector(selectors.selectAll);
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.datetime) - new Date(a.datetime);
  });

  const dispatch = useDispatch();

  return (
    <div className="bg-white py-3 sm:py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {sortedPosts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  alt=""
                  src={post.image.url}
                  className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
              </div>
              <div className="max-w-xl w-full">
                <div className="mt-8 flex items-center justify-between text-xs">
                  <div className="flex gap-x-4">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    {post.country}
                  </div>
                  <div className="flex gap-x-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" color="#101828" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-4"
                         onClick={() => dispatch(openForm(post))}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" color="#c10007" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-4"
                         onClick={() => {
                           console.log(post.id);
                           dispatch(actions.removePost(post.id));
                         }
                         }
                    >
                      <path strokeLinecap="round" strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                    </svg>
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <div>
                      <span className="absolute inset-0"/>
                      {post.title}
                    </div>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img alt="" src={post.userPhoto.url} className="size-10 rounded-full bg-gray-100 object-cover" />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {post.username}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
