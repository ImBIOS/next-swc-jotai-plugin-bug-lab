import { useAtom } from "jotai";
import React, { ChangeEvent } from "react";
import { textAtom } from "../lib/atoms";

const Input = () => {
  const [text, setText] = useAtom(textAtom);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  return (
    <input
      value={text}
      onChange={handleChange}
      className="bg-black text-white"
    />
  );
};

export default Input;
