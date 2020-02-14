import * as React from 'react';
import { createContext, useState } from 'react';
export const HistoryContext = createContext(null);

export const HistoryProvider = (props: any) => {
  const [history, setHistory] = useState([{
    imageA: 'exampleNameA',
    weightA: 100,
    imageB: 'exampleNameB',
    addressB: '7AB0035',
    versionB: '1.0.2'
  }]);

  return (
    <HistoryContext.Provider value={{history, setHistory}}>
      {props.children}
    </HistoryContext.Provider>
  )
};

interface tikitakaContextType {
  imageA: string;
  weightA: number;
  imageB: string;
  addressB: string;
  versionB: string;
}

export const TikitakaContext = createContext<tikitakaContextType>({
  imageA: 'skskskssk',
  weightA: 0,
  imageB: '',
  addressB: '',
  versionB: ''
});
