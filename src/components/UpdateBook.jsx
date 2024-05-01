/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

function UpdateBook({ onShowUpdateBook, book }) {
  const location = useLocation();

  const [formData, setFormData] = useState({
    title: book.title,
    genre: book.genre,
    coverImage: null,
    file: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const hideUpdateBookModal = () => {
    onShowUpdateBook();
  };

  const token = localStorage.getItem("accessToken");

  const handleBookUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const bookData = new FormData();
    bookData.append("title", formData.title);
    bookData.append("genre", formData.genre);
    bookData.append("coverImage", formData.coverImage);
    bookData.append("file", formData.file);

    try {
      const res = await fetch(`http://localhost:4000/api/books/${book._id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: bookData,
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.message);
        setLoading(false);
        return;
      }
      window.location.href = location.pathname;
      setMessage(data.message);
      setLoading(false);
    } catch (error) {
      setMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-md relative">
        <button
          onClick={hideUpdateBookModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-primary-700 mb-6">
          Update Book
        </h2>
        <form onSubmit={handleBookUpdate}>
          {/* Form fields */}
          {/* Title */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              name="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
              required
            />
          </div>
          {/* Genre */}
          <div className="mb-4">
            <label
              htmlFor="genre"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Genre
            </label>
            <input
              type="text"
              id="genre"
              value={formData.genre}
              onChange={(e) =>
                setFormData({ ...formData, genre: e.target.value })
              }
              name="genre"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
              required
            />
          </div>
          {/* Image URL */}
          <div className="mb-4">
            <label
              htmlFor="coverImage"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Cover Image
            </label>
            <input
              type="file"
              id="coverImage"
              onChange={(e) =>
                setFormData({ ...formData, coverImage: e.target.files[0] })
              }
              name="coverImage"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
              required
            />
          </div>
          {/* File upload */}
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
              name="file"
              onChange={(e) =>
                setFormData({ ...formData, file: e.target.files[0] })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
            />
          </div>
          {/* Submit and cancel buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={hideUpdateBookModal}
              className="bg-gray-300 text-gray-700 rounded-md py-2 px-4 font-medium hover:bg-gray-400 transition-colors ml-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-primary-500 text-white rounded-md py-2 px-4 font-medium hover:bg-primary-600 transition-colors"
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateBook;
