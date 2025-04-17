"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import classes from "./MainArena.module.css"
import Trainer from "./Trainer"
import { Provider } from "react-redux";
import store from "../store/index.js";

export default function MainArena() {
    const queryClient = new QueryClient()


    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <main className={classes.mainArena}>
                    <Trainer trainerId="1" />
                    <Trainer trainerId="2" />
                </main>
            </QueryClientProvider>
        </Provider>
    )
}