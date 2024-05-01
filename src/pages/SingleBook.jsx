/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DownloadButton from "../components/DownloadButton";
import UpdateBook from "../components/UpdateBook";

function SingleBook() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [author, setAuthor] = useState(null);
  const [showUpdateBook, setUpdateBook] = useState(false);

  const navigate = useNavigate();

  const fetchBook = async () => {
    const res = await fetch(`http://localhost:4000/api/books/${bookId}`);
    const data = await res.json();
    setBook(data?.foundBook);
    setAuthor(data?.author?._id);
  };
  useEffect(() => {
    fetchBook();
  }, []);

  let currentUserAuthorSame =
    localStorage.getItem("user").toString() === author?.toString();

  if (book === null) {
    return <>Loading...</>;
  }

  const token = localStorage.getItem("accessToken");

  const handleDeleteBook = async () => {
    const res = await fetch(`http://localhost:4000/api/books/${book?._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    console.log(data);
    navigate("/");
  };

  const handleShowUpdateBook = () => {
    setUpdateBook((prev) => !prev);
  };
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
      {showUpdateBook && (
        <UpdateBook onShowUpdateBook={handleShowUpdateBook} book={book} />
      )}
      <div className="col-span-2 pr-16 text-primary-950">
        <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
        <span className="font-semibold">by {book.author.name}</span>
        <p className="mt-5 text-lg leading-8">{book.description}</p>
        <DownloadButton fileLink={book.file} />
        {currentUserAuthorSame && (
          <div className="flex gap-6 mt-12">
            <button
              onClick={handleShowUpdateBook}
              className="text-primary-500 font-medium hover:text-primary-700 underline underline-offset-4 "
            >
              Update Book
            </button>
            <button
              onClick={handleDeleteBook}
              className="text-primary-500 font-medium hover:text-primary-600 underline underline-offset-4"
            >
              Delete Book
            </button>
          </div>
        )}{" "}
      </div>
      <div className="flex justify-end">
        <img
          src={book.coverImage}
          alt={book.title}
          className="rounded-md border"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default SingleBook;
