import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Family from "./family";
import Home from "./home";
import Secondary from "./secondary";
import Support from "./support";
import Refinancing from "./refinancing";
import Build from "./build";
import Commerce from "./commerce";
import Privacy from "./privacy";
import Certificates from "./certificates";

export const RootContext = createContext(null);

ReactDOM.render(
    <React.StrictMode>
        <RootContext.Provider value={[1]}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/family" element={<Family />} />
                    <Route path="/secondary" element={<Secondary />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/refinancing" element={<Refinancing />} />
                    <Route path="/build" element={<Build />} />
                    <Route path="/commerce" element={<Commerce />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/certificates" element={<Certificates />} />
                </Routes>
            </BrowserRouter>
        </RootContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
);