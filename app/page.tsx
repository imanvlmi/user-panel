"use client";
import React from "react";

import Header from "./components/header";
import HomePage from "./components/page/home";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8 max-w-[900px] mr-auto ml-auto">
      <Header />

      <HomePage />
    </main>
  );
}
