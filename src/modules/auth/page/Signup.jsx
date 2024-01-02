import React, { useEffect } from "react";
import { object, string } from "yup";
import { Field, FormikProvider, useFormik } from "formik";
import { Link } from "react-router-dom";
import axiosInstance from "../../../utils/axios";

const signupSchema = object({
  name: string().min(3).max(20).required(),
  email: string().email().required(),
  password: string().min(5).max(20).required(),
});

const SignupPage = () => {
  const handleSubmit = async (values) => {
    try {
      const response = await axiosInstance.post("/auth/register", values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
    validationSchema: signupSchema,
  });
  const { errors, touched, values } = formik;

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className="flex flex-col items-center justify-center h-full  text-white">
      <h1 className="text-4xl font-semibold mb-6">Sign Up</h1>
      <FormikProvider value={formik}>
        <form
          className="bg-gray-800 p-8 rounded-md shadow-md"
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className={`mt-1 p-2 text-black w-full rounded-md border ${
                errors.name && touched.name
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.name && touched.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <Field
              type="text"
              id="email"
              name="email"
              className={`text-black mt-1 p-2 w-full rounded-md border ${
                errors.email && touched.email
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.email && touched.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className={`text-black mt-1 p-2 w-full rounded-md border ${
                errors.password && touched.password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.password && touched.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </FormikProvider>
      <div className="mt-5">
        <p className="cursor-pointer">
          Already have an account?
          <Link to="/auth/login">
            <span className=" underline">Login</span>{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
