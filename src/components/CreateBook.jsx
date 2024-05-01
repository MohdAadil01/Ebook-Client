import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBook() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    coverImage: null,
    file: null,
  });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(formData);
  const handleCreateBook = async (e) => {
    e.preventDefault();
    setLoading(true);

    const bookData = new FormData();
    bookData.append("title", formData.title);
    bookData.append("genre", formData.genre);
    bookData.append("coverImage", formData.coverImage);
    bookData.append("file", formData.file);

    const token = localStorage.getItem("accessToken");

    const res = await fetch("http://localhost:4000/api/books", {
      method: "POST",
      body: bookData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    console.log(data);
    if (!res.ok) {
      setMessage(data.message);
      setLoading(false);
      return;
    }
    setMessage(data.message);
    setLoading(false);
    navigate("/");
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold text-primary-700 mb-6">
        Create New Book
      </h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            required
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="genre"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Genre
          </label>
          <input
            required
            type="text"
            id="genre"
            value={formData.genre}
            onChange={(e) =>
              setFormData({ ...formData, genre: e.target.value })
            }
            name="genre"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="coverImage"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Cover Image
          </label>
          <input
            required
            type="file"
            id="coverImage"
            onChange={(e) =>
              setFormData({ ...formData, coverImage: e.target.files[0] })
            }
            name="coverImage"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="file"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            File (PDF, ePub, etc.)
          </label>
          <input
            type="file"
            id="file"
            required
            onChange={(e) =>
              setFormData({ ...formData, file: e.target.files[0] })
            }
            name="file"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          onClick={handleCreateBook}
          className="w-full bg-primary-500 text-white rounded-md py-2 px-4 font-medium hover:bg-primary-600 transition-colors"
        >
          {loading ? "Creating..." : "Create Book"}
        </button>
        {!loading && message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default CreateBook;
