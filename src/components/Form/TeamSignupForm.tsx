"use client";

// next imports
import { useRouter } from "next/navigation";
// icons
import { Icon } from "@iconify/react";
// react imports
import { useState, useReducer, useEffect } from "react";
// hooks
import useAuthentication from "@/hooks/useAuthentication";
// toasts
import { showToast } from "@/functions/toast";
// components
import Loader from "../Loader/Loader";

const initialState = {
  username: "",
  email: "",
  password: "",
  thumbnail: null,
};

type authState = {
  username: string;
  email: string;
  password: string;
  thumbnail: File | null;
};

type authActions =
  | { name: "username" | "email" | "password"; value: string }
  | { name: "thumbnail"; value: File | null };

const authReducer = (state: authState, action: authActions) => {
  return { ...state, [action.name]: action.value };
};

export default function TeamSignupForm() {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const [state, dispatch] = useReducer(authReducer, initialState);

  const { signup, pending, success } = useAuthentication();

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.name === "email" ||
      e.target.name === "password" ||
      e.target.name === "username"
    )
      dispatch({ name: e.target.name, value: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ name: "thumbnail", value: null });

    if (!e.target.files) return;

    let selectedFile = e.target.files[0];

    if (!selectedFile.type.includes("image")) {
      showToast("error", "Please select an image");
      return;
    }

    if (selectedFile.size > 3000000) {
      showToast("error", "File size must not be larger than 3mb");
      return;
    }
    dispatch({ name: "thumbnail", value: selectedFile });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !state.email ||
      !state.password ||
      !state.username ||
      !state.thumbnail
    ) {
      showToast("error", "Fill all form values");
      return;
    }

    signup({
      email: state.email,
      password: state.password,
      username: state.username,
      thumbNail: state.thumbnail,
    });
  };

  useEffect(() => {
    if (success) {
      router.push("/");
      showToast("success", "Registration successful");
    }
  }, [success]);

  return (
    <div className="w-1/2 flex-start flex-col gap-8 p-[5%] bg-pry-grey rounded-lg">
      <div className="flex-start flex-col space-y-4">
        <h1 className="title-text">Your Teams</h1>
        <h3 className="text-4xl font-bold">Register your teams</h3>
      </div>
      <form className="w-full max-w-xl flex items-stretch justify-center gap-4 md:gap-6 flex-col">
        <label className="w-full h-[2.8125rem] relative">
          <input
            required
            type="text"
            title="username"
            name="username"
            placeholder="team name"
            value={state.username}
            onChange={handleChange}
          />
        </label>
        <label className="relative w-full h-[2.8125rem]">
          <input
            required
            type={passwordVisible ? "text" : "password"}
            title="password"
            name="password"
            placeholder="team password"
            value={state.password}
            onChange={handleChange}
          />
          <span
            className="top-5 right-4 absolute cursor-pointer"
            onClick={() => setPasswordVisible((prev) => !prev)}
          >
            <Icon
              icon={!passwordVisible ? "ph:eye-closed-thin" : "ph:eye-thin"}
              width={24}
              height={24}
              color="#d4d4d4"
            />
          </span>
        </label>
        <div className="flex space-x-8">
          <div className="flex space-x-2 whitespace-nowrap items-center">
            <input type="radio" name="team" id="duo" className="w-1/4"/>
            <label htmlFor="team">Duo Team</label>
          </div>
          <div className="flex space-x-2 whitespace-nowrap items-center">
            <input type="radio" name="team" id="squad" className="w-1/4" />
            <label htmlFor="team" className="w-full">Squad Team</label>
          </div>
        </div>
        <div className="w-full h-72 relative flex-start flex-col gap-2 mt-4">
          <p className="body-text">team logo</p>
          {state.thumbnail ? (
            <img
              src={URL.createObjectURL(state.thumbnail)}
              alt="selected picture"
              className="w-full h-full object-contain object-center"
            />
          ) : (
            <label className="w-full border border-[#d4d4d4] flex-center h-full cursor-pointer">
              <span className="btn black-btn flex-center">upload</span>
              <input
                required
                type="file"
                title="file"
                name="thumbnail"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          )}
          {state.thumbnail && (
            <button
              type="button"
              className="btn black-btn mt-4"
              onClick={() => dispatch({ name: "thumbnail", value: null })}
            >
              Remove image
            </button>
          )}
        </div>
        <div className="flex-end mt-6">
          <button type="submit" className="cta-btn btn" onClick={handleSubmit}>
            {pending ? <Loader /> : "create team"}
          </button>
        </div>
      </form>
    </div>
  );
}
