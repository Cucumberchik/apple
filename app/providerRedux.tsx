"use client"
import { Provider } from "react-redux";
import { store } from "./GlobalRedux/store";

export default function ProviderRedux({children,}: Readonly<{children: React.ReactNode;}>){
    return (<Provider store={store}>{children}</Provider>)
}