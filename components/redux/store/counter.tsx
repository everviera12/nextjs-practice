"use client";

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/components/redux/store";
import { decrement, increment, reset } from "@/components/redux/store/counterSlice";

export default function Counter() {
    const count = useSelector(
        (state: RootState) => state.counter.value
    )
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className="max-w-7xl px-10 mx-auto py-16">
            <h1 className="text-2xl text-gray-300 mb-2"> <span className="font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500"> Redux </span> Counter Example</h1>

            <h2 className="text-6xl text-gray-300 mb-6"> {count} </h2>

            <div className="flex w-fit gap-2 bg-white text-black">
                <button onClick={() => dispatch(increment())}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>

                <button onClick={() => dispatch(decrement())}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                </button>

                <button onClick={() => dispatch(reset())}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </button>
            </div>
        </div>
    );
}