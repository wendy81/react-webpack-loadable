/**
 * if you asyn import, you should have "@babel/plugin-syntax-dynamic-import" plugin
 */
import React from 'react';
import loadable from '@loadable/component';
import { timeout } from 'promise-timeout'
import {Skeleton} from "antd";
import pMinDelay from 'p-min-delay';
// Wait a minimum of 200ms before loading components.

const loading = {
    fallback: <Skeleton avatar paragraph={{ rows: 4 }} />
}

//data loading, use fetch data loading status , show loading
const page =  (importPage) => loadable(() =>pMinDelay(timeout(importPage,2000)))
// const page =  (importPage) => loadable(() => pMinDelay(timeout(importPage,2000),200),loading)

// export const App =  loadable(() =>import(/* webpackPrefetch: true */ 'Components/App'))


export const App =  loadable(() =>import('Components/App'))

export const Users = page(import('Components/Users'));
export const Table =  page(import('Components/Table'));
export const Progress =  page(import('Components/Progress'));
export const AddComments =  page(import('Components/AddComments'));


// import config from "Config";

// const container = config.containerSize;


// console.log('000000000000')
// console.log(container())


// // containerSize: ()=>{
//     const container = document.getElementById('container');
    // let width = document.getElementById('container') && document.getElementById('container').offsetWidth;
    // let height = document.getElementById('container') && document.getElementById('container').offsetHeight;
//     // return {width, height}
// // }






