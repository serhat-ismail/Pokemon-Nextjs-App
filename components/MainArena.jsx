"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import classes from "./MainArena.module.css"
import Trainer from "./Trainer"

export default function MainArena() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <main className={classes.mainArena}>
                <Trainer trainerId="1" />
                <Trainer trainerId="2" />
            </main>
        </QueryClientProvider>
    )
}