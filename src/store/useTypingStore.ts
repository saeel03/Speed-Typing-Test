import {create} from "zustand"

type TypingState = {
  wpm: number;
  accuracy: number;
  time: number;

  setWpm: (wpm: number) => void;
  setAccuracy: (accuracy: number) => void;
  setTime: (time: number) => void;
  reset: () => void;
};


export const useTypingStore = create<TypingState>((set)=>({
    wpm: 0,
    accuracy:0,
    time:0,

    setWpm:(wpm)=> set({wpm}),
    setAccuracy:(accuracy)=> set({accuracy}),
    setTime:(time) => set({time}),
    reset:()=>set({wpm:0 , accuracy: 100, time:0,}),

    


}));