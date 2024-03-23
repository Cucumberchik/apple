"use client"
import { configureStore } from '@reduxjs/toolkit'
import generalAppleSlice from "./Slices/generalAppleSlice"

export const store = configureStore({
    reducer: {
        generalAppleSlice,
    },
  })

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;