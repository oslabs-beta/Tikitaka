import React, {createContext, useState} from 'react';
export const tikitakaContext = createContext([]);


const request = {
    imageA: 'skskskssk',
    weightA: 0,
    imageB: '',
    addressB: '',
    versionB: ''
}

export const requestContext = createContext(request)