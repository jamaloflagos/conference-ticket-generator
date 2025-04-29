'use client'

import Image from "next/image";
import { useTicket } from "../contexts/TicketContext";


const Ticket = () => {
    const { data } = useTicket();
    return (
        <section className="overflow-x-hidden lg:bg-[url('/assets/images/background-desktop.png')] sm:bg-[url('/assets/images/background-mobile.png')] bg-[url('/assets/images/background-tablet.png')] h-screen">
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
                <div className="z-10 flex flex-col items-center px-10">
                    <Image
                        src="/assets/images/logo-full.svg"
                        alt="Logo"
                        height={30}
                        width={208}
                        className="mx-auto mb-10 sm:mb-15"
                    />
                    <div className="lg:w-[814px] sm:w-[705px] w-[343px] px-10 ">
                        <h1 className="text-center  text-neutral-0 font-extrabold text-3xl sm:text-6xl mb-5 lg:leading-20 ">
                            Congrats, <span className="bg-[linear-gradient(90deg,_#F37362_0%,_#FFF_100%)] bg-clip-text text-transparent">{data.fullname}</span> Your ticket is ready.
                        </h1>
                        <p className="text-center text-neutral-300 font-medium text-xl sm:text-2xl">
                            We&apos;ve emailed your ticket to <span className="text-orange-500">{data.email}</span> and will send updates in the run up to the event.
                        </p>
                    </div>

                    <div className="relative w-85 h-40 sm:w-150 sm:h-70 bg-cover bg-[url('/assets/images/pattern-ticket.svg')] mt-25 sm:mt-[127px] p-6 gap-5 flex flex-col justify-between">
                        <div className="flex gap-4">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 36C6.6275 36 12.0001 30.6274 12.0001 24C12.0001 17.3726 6.6275 12 0 12V20.4C1.98823 20.4 3.60001 22.0117 3.60001 24C3.60001 25.9882 1.98823 27.6 0 27.6V36Z" fill="#F57463" />
                                <path d="M40.0002 16.0001C37.9496 15.3505 35.7658 15 33.5001 15C21.6259 15 12 24.626 12 36.5C12 37.6918 12.097 38.861 12.2834 40H25.6422C25.1653 38.9309 24.9002 37.7464 24.9002 36.5C24.9002 31.7504 28.7505 27.9 33.5001 27.9C36.0961 27.9 38.4233 29.0502 40.0002 30.8687V16.0001Z" fill="#F57463" />
                                <path d="M2.10938 0C3.10427 8.99989 10.7345 16 19.9997 16C29.2647 16 36.8951 8.99989 37.8899 0H25.0172C24.2225 1.99222 22.2754 3.39998 19.9997 3.39998C17.7239 3.39998 15.7769 1.99222 14.9821 0H2.10938Z" fill="#F57463" />
                            </svg>
                            <div>
                                <h2 className="text-bold text-2xl sm:text-4xl text-neutral-0 mb-3 leading-5">Coding Conf</h2>
                                <p className="text-neutral-300 text-[14px]">Jan 21, 2025 / Austin Tx</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">

                                <Image
                                    src={data.filePreview ? data.filePreview : ""}
                                    alt="User Avatar"
                                    height={80}
                                    width={80}
                                    className="rounded-xl sm:w-20 sm:h-20 w-[45px] h-[45px]"
                                />
                            <div>
                                <h3 className="text-neutral-0 text:xl sm:text-3xl mb-2">Jonatan kristof </h3>
                                <div className="flex gap-2 items-center">
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.0222 12.2213C12.1014 12.4889 12.1322 12.7713 12.1102 13.0538L12.112 13.4938C12.112 13.8581 11.8163 14.1538 11.452 14.1538C11.0877 14.1538 10.792 13.8581 10.792 13.4938V13.0019C10.8166 12.6657 10.7181 12.3929 10.5157 12.1809C10.3423 11.9996 10.2869 11.7356 10.3722 11.4997C10.4585 11.2639 10.6705 11.0976 10.9205 11.0694C12.4569 10.8996 13.4795 10.3654 13.4795 8.30623C13.4795 7.79055 13.2841 7.30215 12.9295 6.93079C12.7544 6.74775 12.6998 6.48198 12.7878 6.24438C12.8961 5.95398 12.9277 5.64598 12.8837 5.34678C12.6593 5.42334 12.3056 5.57998 11.8198 5.90558C11.6605 6.01382 11.4625 6.04374 11.2777 5.99446C10.2728 5.71902 9.21062 5.71902 8.20654 5.99446C8.02174 6.04374 7.82374 6.01382 7.66446 5.90558C7.1831 5.5835 6.83286 5.42686 6.59966 5.3503C6.55654 5.64862 6.5891 5.95574 6.69646 6.24526C6.78358 6.48198 6.72902 6.74687 6.55566 6.92903C6.1975 7.30567 6.00214 7.79935 6.00478 8.31855C6.00478 10.3513 7.03174 10.8952 8.57262 11.087C8.8199 11.1178 9.02934 11.2859 9.11294 11.5209C9.19654 11.7567 9.14022 12.0189 8.96686 12.1993C8.7715 12.4026 8.6703 12.6789 8.69054 12.9553L8.6923 13.4296C8.6923 13.7209 8.50046 13.9787 8.2215 14.0623C7.77886 14.1943 7.3943 14.2506 7.05814 14.2506C5.83846 14.2506 5.25942 13.5158 4.88102 13.0345C4.72438 12.8365 4.56246 12.6314 4.45158 12.6041C4.0987 12.5153 3.8831 12.1571 3.97198 11.8033C4.05998 11.4505 4.41726 11.2331 4.7719 11.3229C5.32014 11.4601 5.63782 11.8632 5.91766 12.2178C6.29518 12.6957 6.5583 13.0353 7.36702 12.9095C7.36174 12.6816 7.3943 12.451 7.46294 12.2257C6.28286 11.9151 4.68478 11.0492 4.68478 8.32207C4.68126 7.59519 4.9127 6.89823 5.3439 6.3227C5.19166 5.67414 5.24886 4.9939 5.51462 4.3735C5.59206 4.19222 5.74606 4.05582 5.93526 3.9995C6.1271 3.9423 6.83374 3.83406 8.14934 4.64806C9.19742 4.40694 10.2877 4.40694 11.3349 4.64806C12.6505 3.83494 13.3563 3.94406 13.5481 3.9995C13.7373 4.05582 13.8922 4.19222 13.9688 4.3735C14.2354 4.9939 14.2935 5.67326 14.1404 6.32182C14.5681 6.89119 14.7995 7.58287 14.7995 8.30623C14.7995 11.0668 13.2041 11.923 12.0222 12.2213ZM13.2736 0.367737H5.84638C2.93358 0.367737 0.97998 2.41814 0.97998 5.45414V12.4413C0.97998 15.4861 2.93358 17.5277 5.84638 17.5277H13.2736C16.1864 17.5277 18.14 15.4861 18.14 12.4413V5.45414C18.14 2.41814 16.1864 0.367737 13.2736 0.367737Z" fill="#D1D0D5" />
                                    </svg>
                                    <p className="text-neutral-300 sm:text-xl text-[14px]">{data.username}</p>
                                </div>
                            </div>
                        </div>

                        <p className="rotate-90 w-[85px] h-[33px] absolute right-0 sm:top-30 top-20 text-neutral-500 font-medium sm:text-3xl text-xl">#01609</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Ticket