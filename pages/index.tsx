import Head from "next/head";
import { ChangeEvent } from "react";
import { useAtom } from "jotai";
import { textAtom } from "../lib/atoms";
import Input from "../components/input";
import Uppercase from "../components/uppercase";

export default function Home() {
  const [text, setText] = useAtom(textAtom);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  return (
    <>
      <Input />
      <Uppercase />
    </>
  );
}
