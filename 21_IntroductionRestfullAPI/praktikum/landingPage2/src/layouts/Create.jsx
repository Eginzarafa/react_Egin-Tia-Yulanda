"use client";
import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Keterangan from "../components/Keterangan";
import LanguageChangeButton from "../components/buttons/LanguageChangeButton";

export default function CreateProduct() {
  const [welcome, setWelcome] = useState(
    <section className="fixed right-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-200/50 opacity-100 backdrop-blur-md transition-all duration-500">
      <p className="text-8xl">Welcome To Emovie!</p>
    </section>
  );

  useEffect(() => {
    setTimeout(() => {
      setWelcome(
        <section className="fixed right-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-200/50 opacity-0 backdrop-blur-md transition-all duration-500">
          <p className="text-8xl">Welcome To Emovie!</p>
        </section>
      );
      setTimeout(() => {
        setWelcome("");
      }, 550);
    }, 1000);
  }, []);

  const [language, setLanguage] = useState("inggris");
  return (
    <>
      {welcome}
      <Header />
      <Keterangan
        languageProps={language}
        languageChangeButtonProps={
          <LanguageChangeButton
            languageProps={language}
            onClickENProps={() => {
              setLanguage("inggris");
            }}
            onClickIDProps={() => {
              setLanguage("indonesia");
            }}
          />
        }
      />
      <Form languageProps={language} />
      <Footer languageProps={language} />
    </>
  );
}
