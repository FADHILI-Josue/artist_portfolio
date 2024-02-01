import { IArt, arts } from "./constants";

 export const getRandomArts = (count: number): IArt[] => {
    const shuffledArts = arts.sort(() => Math.random() - 0.5);
    return shuffledArts.slice(0, count);
  }  