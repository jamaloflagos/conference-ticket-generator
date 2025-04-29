'use client';

import Image from "next/image";
import { useState } from "react";
import { useTicket } from "./contexts/TicketContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [fileError, setFileError] = useState("");
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ fullname?: string; username?: string; email?: string }>({});

  const { setData } = useTicket();
  const router = useRouter();

  const removeImage = () => {
    setFilePreview(null);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError("");
    setFilePreview(null);

    if (!file) return;

    const validTypes = ["image/jpeg", "image/png"];
    const maxSizeKB = 500;

    if (!validTypes.includes(file.type)) {
      setFileError("Invalid file type. Please upload a JPG or PNG image.");
      return;
    }

    if (file.size > maxSizeKB * 1024) {
      setFileError("File too large. Please upload a photo under 500KB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFilePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "fullname") setFullname(value);
    if (name === "username") setUsername(value);
    if (name === "email") setEmail(value);

    setErrors(prev => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors: { fullname?: string; username?: string; email?: string } = {};

    if (!fullname.trim()) newErrors.fullname = "Full name is required.";
    if (!username.trim()) newErrors.username = "Username is required.";
    if (!filePreview) setFileError("Please upload an image");
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(filePreview);
      setData({ fullname, email, username, filePreview });
      router.push("/ticket");
    }
  };


  return (
    <section className=" overflow-x-hidden lg:bg-[url('/assets/images/background-desktop.png')] sm:bg-[url('/assets/images/background-mobile.png')] bg-[url('/assets/images/background-tablet.png')] h-full">
      <div className="bg-[url('/assets/images/pattern-lines.svg')] h-full relative pt-10 pb-[134px] ">
        <Image
          src="/assets/images/pattern-circle.svg"
          alt="Pattern Circle"
          height={217}
          width={217}
          className="absolute right-70 bottom-85"
        />
        <Image
          src="/assets/images/pattern-squiggly-line-top.svg"
          alt="Pattern Squiggly Line Top"
          height={208}
          width={446}
          className="absolute right-0 top-20"
        />
        <Image
          src="/assets/images/pattern-squiggly-line-bottom-desktop.svg"
          alt="Pattern Squiggly Line Bottom"
          height={476}
          width={825}
          className="absolute left-0 bottom-0"
        />
        <div className="z-10 flex flex-col items-center">
          <Image
            src="/assets/images/logo-full.svg"
            alt="Logo"
            height={30}
            width={208}
            className="mx-auto mb-10 sm:mb-15"
          />
          <div className="mb-11 lg:w-[891px] sm:w-[705px] w-[343px] px-10">
            <h1 className="text-neutral-0 font-extrabold text-xl sm:text-5xl lg:text-6xl mb-5 lg:leading-20 ">
              Your Journey to Coding Conf 2025 Starts Here!
            </h1>
            <p className="text-neutral-300 font-medium sm:text-2xl sm:text-start text-center">
              Secure your spot at next year’s biggest coding conference.
            </p>
          </div>

          <form className="lg:w-[460px] sm:w-[522px] max-w-[343px] w-[300px] 
           sm:px-0 border" onSubmit={handleSubmit}>
            <h2 className="text-neutral-0 font-medium mb-3">Upload Avatar</h2>

            <div className={`border border-dashed border-neutral-500 rounded-xl bg-neutral-0/8 focus:bg-neutral-0/8  backdrop-blur-xl h-[126px] flex flex-col items-center justify-center gap-5 ${!filePreview ? 'hover:bg-neutral-0/20' : ''}`}>

              {filePreview ? (
                <>
                  <div className="h-12 w-12 relative">
                    <Image
                      src={filePreview}
                      alt="Preview"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl mb-2"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button type="button" className="bg-neutral-0/8 text-neutral-300 px-2 py-1 rounded-md cursor-pointer" onClick={removeImage}>Remove Image</button>
                    <label htmlFor="file-upload" className="bg-neutral-0/8 text-neutral-300 px-2 py-1 rounded-md cursor-pointer">Change Image
                      <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        accept="image/jpeg,image/png"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </>


              ) : (
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer h-full flex flex-col items-center justify-center"
                >
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept="image/jpeg,image/png"
                    onChange={handleFileChange}
                  />
                  <div className="bg-neutral-0/10 border border-neutral-700 h-12 w-12 mb-4 rounded-xl p-2">
                    <Image
                      src="/assets/images/icon-upload.svg"
                      alt="Upload"
                      height={30}
                      width={30}
                    />
                  </div>
                  <p className="text-neutral-300 text-[10px] sm:text-[18px]">
                    Drag and drop or click to upload
                  </p>
                </label>
              )}

            </div>


            <div className="flex gap-2 mt-3">
              <Image
                src="/assets/images/icon-info.svg"
                alt="Upload"
                height={16}
                width={16}
              />
              <p className={`sm:text-[16px] text-[10px] ${fileError ? "text-orange-500" : "text-neutral-300"}`}>
                {fileError ? fileError : "Upload your photo (JPG or PNG, max size: 500KB)."}
              </p>
            </div>

            <div className="mt-6">
              <label htmlFor="full-name" className="font-medium text-neutral-0">Full Name</label>
              <input
                type="text"
                className="w-full h-13 text-neutral-0 p-4 bg-neutral-0/8 focus:bg-neutral-0/8 hover:bg-neutral-0/20 border border-neutral-500 rounded-xl backdrop-blur-xl mt-3"
                name="fullname"
                value={fullname}
                onChange={handleChange}
              />
              {errors.fullname && <p className="text-orange-500 text-sm">{errors.fullname}</p>}

            </div>

            <div className="mt-6">
              <label htmlFor="email" className="font-medium text-neutral-0">Email Address</label>
              <input
                type="text"
                className="w-full h-13 text-neutral-0 bg-neutral-0/8 focus:bg-neutral-0/8 hover:bg-neutral-0/20 border border-neutral-500 rounded-xl backdrop-blur-xl mt-3 placeholder:text-neutral-300 p-4"
                placeholder="example@email.com"
                name="email"
                value={email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-orange-500 text-sm">{errors.email}</p>}
            </div>

            <div className="mt-6">
              <label htmlFor="username" className="font-medium text-neutral-0">GitHub Username</label>
              <input
                type="text"
                className="w-full h-13 text-neutral-0 bg-neutral-0/8 focus:bg-neutral-0/8 hover:bg-neutral-0/20 border border-neutral-500 rounded-xl backdrop-blur-xl mt-3 placeholder:text-neutral-300 p-4"
                placeholder="@yourusername"
                name="username"
                value={username}
                onChange={handleChange}
              />
              {errors.username && <p className="text-orange-500 text-sm">{errors.username}</p>}

            </div>

            <button
              type="submit"
              className="w-full h-13 bg-orange-500 focus:bg-orange-500 hover:bg-orange-700 text-neutral-900 rounded-xl mt-6 cursor-pointer"
            >
              Generate My Ticket
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
