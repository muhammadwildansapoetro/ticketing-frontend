// "use client";

// import { useSession } from "@/context/useSession";
// import { ISignIn } from "@/types/blog";
// import { Field, Form, Formik, FormikProps } from "formik";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import * as Yup from "yup";

// const RegisterSchema = Yup.object().shape({
//   data: Yup.string().required("Username or email is required"),
//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
// });

// export default function SignIn() {
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const { setIsAuth, setUser } = useSession();
//   const router = useRouter();
//   const initialValue: ISignIn = {
//     data: "",
//     password: "",
//   };

//   const handleSignIn = async (user: ISignIn) => {
//     try {
//       setIsLoading(true);
//       const res = await fetch("http://localhost:8000/api/auth/sign-in", {
//         method: "POST",
//         body: JSON.stringify(user),
//         headers: { "content-type": "application/json" },
//         credentials: "include",
//       });

//       const result = await res.json();
//       if (!res.ok) throw await result;
//       router.push("/");
//       setIsAuth(true);
//       setUser(result.user);
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
//         <h1 className="mb-5 text-2xl font-bold">Sign in</h1>
//         <Formik
//           initialValues={initialValue}
//           validationSchema={RegisterSchema}
//           onSubmit={(values, action) => {
//             handleSignIn(values);
//             action.resetForm();
//           }}
//         >
//           {(props: FormikProps<ISignIn>) => {
//             const { handleChange, values, touched, errors } = props;
//             return (
//               <Form className="flex flex-col gap-2">
//                 <div className="flex flex-col gap-1">
//                   <label htmlFor="data" className="font-semibold">
//                     Username or Email
//                   </label>
//                   <Field
//                     type="text"
//                     name="data"
//                     onChange={handleChange}
//                     value={values.data}
//                     className="rounded-md border border-slate-500 p-[1px] py-2"
//                     placeholder=" Enter your username or email"
//                   />
//                   {touched.data && errors.data ? (
//                     <div className="text-xs text-red-500">{errors.data}</div>
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

//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="mt-3 rounded-md bg-black py-2 font-medium text-white hover:bg-black/70 disabled:cursor-not-allowed disabled:bg-black/70"
//                 >
//                   {isLoading ? "Loading..." : "Sign in"}
//                 </button>
//               </Form>
//             );
//           }}
//         </Formik>
//       </div>
//     </div>
//   );
// }
