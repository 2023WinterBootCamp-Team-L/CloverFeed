import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import Question from "./Question";

const questionUpdateAtom = atomWithStorage<Question[]>(
  LOCAL_STORAGE_KEY.questionUpdate,
  []
);
