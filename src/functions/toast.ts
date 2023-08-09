import { firebaseAuthError } from "@/data/firebaseAuthErrors";
import { FirebaseError } from "firebase/app";
import { toast, ToastOptions } from "react-toastify";

const toastOptions: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export function showToast(
  name: "success" | "info" | "error" | "warning",
  message: string
) {
  toast[name](message, toastOptions);
}

export const runShowAuthErrorToast = (error: unknown) => {
  if (error instanceof FirebaseError) {
    showToast("error", `${firebaseAuthError[error.code]}`);
  } else {
    showToast("error", `${error}`);
    console.error(error);
  }
};
