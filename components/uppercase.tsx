import { useAtom } from "jotai";
import React from "react";
import { uppercaseAtom } from "../lib/atoms";

const Uppercase = () => {
  const [uppercase] = useAtom(uppercaseAtom);

  return <div className="text-5xl font-semibold">Uppercase: {uppercase}</div>;
};

export default Uppercase;
