import React, { useDebugValue, useEffect, useState } from "react";
import axiosInstance from "../../../../utils/axios";

const DashboardProductsPage = () => {
  const [products, setProducts] = useState();

  const table_header = [
    "id",
    "image",
    "name",
    "desc",
    "category",
    "Qty",
    "cost",
    "price",
    "edit",
    "delete",
  ];

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);

      const response = await axiosInstance.get(
        "/admin/dashboard/products/product_listing",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="shadow-xl w-full h-full border-black p-4">
      <div className="h-full overflow-y-auto">
        <h1 className="text-4xl font-sans font-medium p-5 pb-2 w-full border-b-2 border-b-slate-600">
          Product Listing
        </h1>
        <div className="mt-16 bg-white p-4 overflow-x-auto shadow-xl">
          <table className="w-full min-w-full">
            <thead>
              <tr>
                {table_header.map((ele, index) => (
                  <th
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                  >
                    {ele}
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardProductsPage;
