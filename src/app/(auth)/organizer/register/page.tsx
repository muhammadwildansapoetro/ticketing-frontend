// "use client";

// import { IRegister } from "@/types/blog";
// import { Field, Form, Formik, FormikProps } from "formik";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import * as Yup from "yup";

// const RegisterSchema = Yup.object().shape({
//   username: Yup.string().required("Userame is required"),
//   email: Yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password")], "Password not match!")
//     .required("Confirm password is required"),
// });

// export default function SignIn() {
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const initialValue: IRegister = {
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   };

//   const handleRegister = async (user: IRegister) => {
//     try {
//       setIsLoading(true);
//       const res = await fetch("http://localhost:8000/api/auth/register", {
//         method: "POST",
//         body: JSON.stringify(user),
//         headers: { "content-type": "application/json" },
//       });

//       const result = await res.json();
//       if (!res.ok) throw await result;

//       toast.success(result.message);
//     } catch (error: any) {
//       console.log(error);
//       toast.error(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center">
//       <div className="mt-10 w-[500px] p-5 lg:rounded-lg lg:border lg:border-slate-300 lg:shadow-lg">
//         <h1 className="mb-5 text-2xl font-bold">Register</h1>
//         <Formik
//           initialValues={initialValue}
//           validationSchema={RegisterSchema}
//           onSubmit={(values, action) => {
//             handleRegister(values);
//             action.resetForm();
//           }}
//         >
//           {(props: FormikProps<IRegister>) => {
//             const { handleChange, values, touched, errors } = props;
//             return (
//               <Form className="flex flex-col gap-2">
//                 <div className="flex flex-col gap-1">
//                   <label htmlFor="username" className="font-semibold">
//                     Username
//                   </label>
//                   <Field
//                     type="text"
//                     name="username"
//                     onChange={handleChange}
//                     value={values.username}
//                     className="rounded-md border border-slate-500 p-[1px] py-2"
//                     placeholder=" Enter your username"
//                   />
//                   {touched.username && errors.username ? (
//                     <div className="text-xs text-red-500">
//                       {errors.username}
//                     </div>
//                   ) : null}
//                 </div>

//                 <div className="flex flex-col gap-1">
//                   <label htmlFor="email" className="font-semibold">
//                     Email
//                   </label>
//                   <Field
//                     type="email"
//                     name="email"
//                     onChange={handleChange}
//                     value={values.email}
//                     className="rounded-md border border-slate-500 p-[1px] py-2"
//                     placeholder=" Enter your email"
//                   />
//                   {touched.email && errors.email ? (
//                     <div className="text-xs text-red-500">{errors.email}</div>
//                   ) : null}
//                 </div>

//                 <div className="flex flex-col gap-1">
//                   <label htmlFor="password" className="font-semibold">
//                     Password
//                   </label>
//                   <Field
//                     type="password"
//                     name="password"
//                     onChange={handleChange}
//                     value={values.password}
//                     className="rounded-md border border-slate-500 p-[1px] py-2"
//                     placeholder=" Enter your password"
//                   />
//                   {touched.password && errors.password ? (
//                     <div className="text-xs text-red-500">
//                       {errors.password}
//                     </div>
//                   ) : null}
//                 </div>

//                 <div className="flex flex-col gap-1">
//                   <label htmlFor="confirmPassword" className="font-semibold">
//                     Confirm Password
//                   </label>
//                   <Field
//                     type="password"
//                     name="confirmPassword"
//                     onChange={handleChange}
//                     value={values.confirmPassword}
//                     className="rounded-md border border-slate-500 p-[1px] py-2"
//                     placeholder=" Enter your confirm password"
//                   />
//                   {touched.confirmPassword && errors.confirmPassword ? (
//                     <div className="text-xs text-red-500">
//                       {errors.confirmPassword}
//                     </div>
//                   ) : null}
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="mt-3 rounded-md bg-black py-2 font-medium text-white hover:bg-black/70 disabled:cursor-not-allowed disabled:bg-black/70"
//                 >
//                   {isLoading ? "Loading..." : "Register"}
//                 </button>
//               </Form>
//             );
//           }}
//         </Formik>
//       </div>
//     </div>
//   );
// }
