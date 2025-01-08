import { toast } from "react-toastify";

export const toastError = (error: unknown) => {
  if (typeof error === "object" && error !== null && "message" in error) {
    const apiError = error as { message: string };
    toast.error(apiError.message);
  } else {
    console.error("Unexpected error:", error);
    toast.error("An unexpected error occurred.");
  }
};
