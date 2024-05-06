/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="flex gap-5 border p-5 shadow-md rounded flex-col">
      <img
        src={book?.coverImage}
        alt={book?.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "14rem" }}
        // className="w-[16rem] h-[12rem]"
      />
      <div>
        <h2 className="line-clamp-2 text-[1.7rem] font-bold text-primary-600 text-balance capitalize">
          {book?.title}
        </h2>
        <p className="font-bold text-primary-900 mt-1 capitalize text-lg">
          by {book?.author?.name}
        </p>
        <Link
          to={`/books/${book._id}`}
          className="py-1 px-2 rounded border border-primary-500 mt-4 inline-block text-primary-500 font-medium text-lg
                    hover:border-primary-100 hover:bg-primary-100 transition"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};
export default BookCard;
