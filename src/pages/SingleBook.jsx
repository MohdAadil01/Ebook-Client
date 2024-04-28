import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DownloadButton from "../components/DownloadButton";

function SingleBook() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  const fetchBook = async () => {
    const res = await fetch(`http://localhost:4000/api/books/${bookId}`);
    const data = await res.json();
    setBook(data.foundBook);
  };
  useEffect(() => {
    fetchBook();
  }, []);
  if (book === null) {
    return <>Loading...</>;
  }
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
      <div className="col-span-2 pr-16 text-primary-950">
        <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
        <span className="font-semibold">by {book.author.name}</span>
        <p className="mt-5 text-lg leading-8">{book.description}</p>
        <DownloadButton fileLink={book.file} />
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
