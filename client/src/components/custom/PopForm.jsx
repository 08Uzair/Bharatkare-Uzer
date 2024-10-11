import React from "react";

export function PopForm() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button
        onClick={handleOpen}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md"
      >
        Add Product
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="relative">
              <h4 className="text-xl font-semibold text-blue-gray-900">
                Manage Item
              </h4>
              <p className="mt-1 text-gray-600">
                Keep your records up-to-date and organized.
              </p>

              <button
                className="absolute right-3 top-3 text-gray-600 hover:text-gray-800"
                onClick={handleOpen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4 space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-blue-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. White Shoes"
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-blue-gray-700">
                  Category
                </label>
                <select className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-500">
                  <option>Clothing</option>
                  <option>Fashion</option>
                  <option>Watches</option>
                </select>
              </div>

              <div className="flex gap-4">
                {/* Weight */}
                <div className="w-full">
                  <label className="block text-sm font-medium text-blue-gray-700">
                    Weight
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. <8.8oz | 250g"
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                  />
                </div>

                {/* Size */}
                <div className="w-full">
                  <label className="block text-sm font-medium text-blue-gray-700">
                    Size
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. US 8"
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-blue-gray-700">
                  Description (Optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="e.g. This is a white shoes with a comfortable sole."
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                ></textarea>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleOpen}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
