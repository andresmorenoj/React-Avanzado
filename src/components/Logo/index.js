import * as React from "react"
import {Svg} from './styles'

export const Logo = (props) => {
  return (
    <Svg
    width={422.178}
    height={155.233}
    viewBox="38.911 -37.616 422.178 225.233"
    style={{
      background: "0 0",
    }}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <linearGradient
        id="prefix__editing-shiny-gradient"
        x1={0.273}
        x2={0.727}
        y1={0.054}
        y2={0.946}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#ffb200" />
        <stop offset={0.5} stopColor="#e10057" />
        <stop offset={1} stopColor="#5A1A80" />
      </linearGradient>
      <linearGradient
        id="prefix__editing-shiny-gradient2"
        x1={0}
        x2={0}
        y1={0}
        y2={1}
      >
        <stop offset={0.2} stopColor="#fff" stopOpacity={0.8} />
        <stop offset={0.8} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <filter
        id="prefix__editing-shiny2"
        x="-100%"
        y="-100%"
        width="300%"
        height="300%"
      >
        <feMorphology radius={2} />
      </filter>
      <filter
        id="prefix__editing-shiny"
        x="-100%"
        y="-100%"
        width="300%"
        height="300%"
      >
        <feFlood floodColor="#fff" result="flood" />
        <feConvolveMatrix
          in="SourceGraphic"
          result="conv"
          order="8,8"
          divisor={1}
          kernelMatrix="0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 0 0 1 0 0 1 1 0 0 1 1 0 0 0 0 1 1 0 0 0"
        />
        <feOffset dy={4} in="conv" result="offset" />
        <feComposite operator="in" in="flood" in2="offset" result="comp" />
        <feGaussianBlur in="offset" stdDeviation={3} result="shadow" />
        <feColorMatrix
          in="shadow"
          values="0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.3 0"
          result="dark-shadow"
        />
        <feOffset dy={4} in="dark-shadow" result="offset-shadow" />
        <feOffset dy={2} in="conv" result="offset-2" />
        <feComposite
          operator="out"
          in="offset"
          in2="offset-2"
          result="edge-diff"
        />
        <feGaussianBlur in="edge-diff" stdDeviation={1} result="edge-blur" />
        <feColorMatrix
          in="edge-blur"
          result="edge-shadow"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
        <feComposite
          operator="in"
          in="edge-shadow"
          in2="offset"
          result="edge-shadow-in"
        />
        <feOffset dy={1} in="edge-shadow-in" result="edge-shadow-final" />
        <feMerge result="out">
          <feMergeNode in="offset-shadow" />
          <feMergeNode in="comp" />
          <feMergeNode in="edge-shadow-final" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#prefix__editing-shiny)">
      <path
        d="M26.68-39.39q4.13 0 7.64 2.38t5.54 6.47q2.03 4.1 2.03 8.93 0 6.87-1.91 11.9-1.92 5.03-5.5 7.76Q30.89.78 26.05.78q-1.17 0-2.3-.35T20.9-.78l2.03-4.45q1.95 1.25 5.62 1.25 3.27 0 5.34-4.33t2.07-11.11q0-3.9-1.56-7.14-1.56-3.24-4.29-5.07t-6.09-1.83q-4.05 0-6.24 4.37-2.18 4.36-2.18 12.4v39.23l-6.79 2.89v-57.49q0-1.4-.62-2.26-.62-.86-1.64-.86-.78 0-1.71.78-.94.78-2.34 2.5l-1.17-1.17q.93-2.65 3.27-4.49 2.34-1.83 4.68-1.83 3.51 0 5.07 2.07 1.56 2.06 1.56 6.67h.31q1.8-3.9 4.64-6.32 2.85-2.42 5.82-2.42zm44.61-.31q4.21 0 7.02 2.26 2.81 2.26 2.81 6.71 0 3.59-3.86 7.99-3.86 4.41-9.05 8.08-5.19 3.66-8.85 5.14 1.95 3.12 4.44 4.33 2.5 1.21 5.85 1.21 3.75 0 7.45-1.91 3.71-1.91 6.13-4.95l.93 1.64q-3.82 4.91-8.11 7.52Q71.76.94 65.52.94q-4.76 0-8.5-2.34-3.75-2.34-5.85-6.28-2.11-3.94-2.11-8.54 0-5.78 3.12-11.24t8.27-8.85q5.15-3.39 10.84-3.39zm-4.05 4.91q-3.44 0-6.13 2.19-2.69 2.18-4.21 5.61t-1.52 7.1q0 4.84 2.26 8.27 3.28-1.48 7.1-4.49 3.82-3 6.47-6.51 2.66-3.51 2.66-6.4 0-5.77-6.63-5.77zm34.08-24.96V-39h10.84l-2.34 4.99h-8.5v27.46q0 1.17.7 1.91.71.74 1.88.74 1.63 0 4.52-3.04l1.09 1.17q-1.48 2.96-3.55 4.41-2.06 1.44-3.9 1.79-1.83.35-1.83.04.08 0 .23-.04.16-.04.47-.04-6.86 0-6.86-7.88v-26.52h-5.85L90.64-39h3.43v-17.94l7.25-2.81zm36.12 19.74q3.74 0 7.17 2.06 3.43 2.07 5.23 5.58l-5.62 3.04q-1.17-2.73-3.35-4.29-2.19-1.56-4.84-1.56-3.9 0-6.82 2.65-2.93 2.66-4.53 6.56-1.6 3.9-1.6 7.41 0 5.46 2.31 9.67 2.3 4.21 7.37 4.21 5.77 0 7.95-5.19 2.19-5.18 2.19-11.19v-3.51l7.02-2.89v23.87q0 5.85-2.73 12.09t-7.53 10.38q-4.8 4.13-10.8 4.13-4.29 0-6.79-2.96l6.63-5.62q.55 1.4 1.83 2.26 1.29.86 3.24.86 5.85 0 7.61-4.33 1.75-4.33 1.75-10.88l-.23-6.4q0-2.88.54-4.68h-.54q-2.89 4.53-5.58 7.1-2.69 2.58-6.44 2.58-6.7 0-10.29-4.41Q117-7.88 117-14.66q0-6.63 2.69-12.45 2.69-5.81 7.41-9.36 4.72-3.54 10.34-3.54zm39.85 10.53q-3.51 3.66-6.04 9.55-2.54 5.89-2.54 10.73 0 4.21 1.84 7.05Q172.38.7 176.44.7q3.27 0 6.28-1.71 3-1.72 5.1-4.45l-.85-1.17q-2.42 1.64-4.76 1.64-3.67 0-5.54-2.58-1.87-2.57-1.87-6.24 0-5.92 3.04-11.23 3.04-5.3 7.72-10.29l-1.25-1.1q-5.46 3.44-9.98 3.44-2.65 0-4.84-2.38-2.18-2.38-3.35-5.27l-6.32 7.1q.55 1.56 2.97 3.59l-5.23 10.92 2.89 1.32 5.07-11.15q1.32.55 2.18.7.86.16 2.34.16 3.82 0 7.02-1.72l.23.24zM214.5-39q3.82 0 7.21 1.64 3.4 1.64 4.96 4.99l-5.62 3.04q-1.25-1.79-3.43-3.23-2.18-1.45-4.68-1.45-3.98 0-6.94 2.07-2.97 2.07-4.53 5.58-1.56 3.51-1.56 7.8 0 6.16 2.11 10.02 2.11 3.86 6.63 3.86 6.4 0 8.81-5.15 2.42-5.15 2.42-11.23v-3.51l6.87-2.89v20.52q0 1.01.54 1.95.55.93 1.64.93 2.26 0 4.13-3.12l1.17 1.25q-.93 2.65-3.27 4.49-2.34 1.83-4.68 1.83-3.36 0-4.96-2.5-1.59-2.49-1.59-6.63h-.16q-1.95 4.14-5.27 6.91-3.31 2.77-6.98 2.77-6.63 0-10.02-4.57-3.39-4.56-3.39-12.2 0-6.09 2.73-11.43t7.45-8.54q4.72-3.2 10.41-3.2zm66.61-.7q2.34 0 3.63 1.52t1.29 5.11v26.52q0 1.17.54 1.91.55.74 1.48.74.94 0 2.03-.78 1.09-.78 2.11-2.26l1.25 1.17q-1.64 3.51-3.9 4.87-2.27 1.37-.86 1.33 1.4-.04-3.36-.04-6.47 0-6.47-7.88v-21.53q0-.78-.39-1.32-.39-.55-1.01-.55-1.72 0-3.75 3.75-2.03 3.74-3.43 10.57-1.4 6.82-1.4 15.63l-7.1 2.03v-30.11q0-.78-.39-1.32-.39-.55-.94-.55-1.56 0-3.63 3.78-2.06 3.79-3.58 10.61-1.52 6.83-1.52 15.56L245 1.09v-33.38q0-1.33-.67-2.11-.66-.78-1.67-.78-1.95 0-3.98 3.36l-1.25-1.25q1.64-3.51 3.9-5.03 2.26-1.52 2.77-1.56.51-.04 1.52-.04 3.75 0 5.07 1.6 1.33 1.6 1.33 4.25v13.02h.23q1.95-8.5 5.27-13.69 3.31-5.18 6.59-5.18 2.42 0 3.62 1.48 1.21 1.48 1.21 5.15v12.24h.47q1.95-8.5 5.19-13.69 3.24-5.18 6.51-5.18z"
        fill="url(#prefix__editing-shiny-gradient)"
        transform="translate(102.615 117.59)"
      />
    </g>
    <g filter="url(#prefix__editing-shiny2)">
      <path
        d="M26.68-39.39q4.13 0 7.64 2.38t5.54 6.47q2.03 4.1 2.03 8.93 0 6.87-1.91 11.9-1.92 5.03-5.5 7.76Q30.89.78 26.05.78q-1.17 0-2.3-.35T20.9-.78l2.03-4.45q1.95 1.25 5.62 1.25 3.27 0 5.34-4.33t2.07-11.11q0-3.9-1.56-7.14-1.56-3.24-4.29-5.07t-6.09-1.83q-4.05 0-6.24 4.37-2.18 4.36-2.18 12.4v39.23l-6.79 2.89v-57.49q0-1.4-.62-2.26-.62-.86-1.64-.86-.78 0-1.71.78-.94.78-2.34 2.5l-1.17-1.17q.93-2.65 3.27-4.49 2.34-1.83 4.68-1.83 3.51 0 5.07 2.07 1.56 2.06 1.56 6.67h.31q1.8-3.9 4.64-6.32 2.85-2.42 5.82-2.42zm44.61-.31q4.21 0 7.02 2.26 2.81 2.26 2.81 6.71 0 3.59-3.86 7.99-3.86 4.41-9.05 8.08-5.19 3.66-8.85 5.14 1.95 3.12 4.44 4.33 2.5 1.21 5.85 1.21 3.75 0 7.45-1.91 3.71-1.91 6.13-4.95l.93 1.64q-3.82 4.91-8.11 7.52Q71.76.94 65.52.94q-4.76 0-8.5-2.34-3.75-2.34-5.85-6.28-2.11-3.94-2.11-8.54 0-5.78 3.12-11.24t8.27-8.85q5.15-3.39 10.84-3.39zm-4.05 4.91q-3.44 0-6.13 2.19-2.69 2.18-4.21 5.61t-1.52 7.1q0 4.84 2.26 8.27 3.28-1.48 7.1-4.49 3.82-3 6.47-6.51 2.66-3.51 2.66-6.4 0-5.77-6.63-5.77zm34.08-24.96V-39h10.84l-2.34 4.99h-8.5v27.46q0 1.17.7 1.91.71.74 1.88.74 1.63 0 4.52-3.04l1.09 1.17q-1.48 2.96-3.55 4.41-2.06 1.44-3.9 1.79-1.83.35-1.83.04.08 0 .23-.04.16-.04.47-.04-6.86 0-6.86-7.88v-26.52h-5.85L90.64-39h3.43v-17.94l7.25-2.81zm36.12 19.74q3.74 0 7.17 2.06 3.43 2.07 5.23 5.58l-5.62 3.04q-1.17-2.73-3.35-4.29-2.19-1.56-4.84-1.56-3.9 0-6.82 2.65-2.93 2.66-4.53 6.56-1.6 3.9-1.6 7.41 0 5.46 2.31 9.67 2.3 4.21 7.37 4.21 5.77 0 7.95-5.19 2.19-5.18 2.19-11.19v-3.51l7.02-2.89v23.87q0 5.85-2.73 12.09t-7.53 10.38q-4.8 4.13-10.8 4.13-4.29 0-6.79-2.96l6.63-5.62q.55 1.4 1.83 2.26 1.29.86 3.24.86 5.85 0 7.61-4.33 1.75-4.33 1.75-10.88l-.23-6.4q0-2.88.54-4.68h-.54q-2.89 4.53-5.58 7.1-2.69 2.58-6.44 2.58-6.7 0-10.29-4.41Q117-7.88 117-14.66q0-6.63 2.69-12.45 2.69-5.81 7.41-9.36 4.72-3.54 10.34-3.54zm39.85 10.53q-3.51 3.66-6.04 9.55-2.54 5.89-2.54 10.73 0 4.21 1.84 7.05Q172.38.7 176.44.7q3.27 0 6.28-1.71 3-1.72 5.1-4.45l-.85-1.17q-2.42 1.64-4.76 1.64-3.67 0-5.54-2.58-1.87-2.57-1.87-6.24 0-5.92 3.04-11.23 3.04-5.3 7.72-10.29l-1.25-1.1q-5.46 3.44-9.98 3.44-2.65 0-4.84-2.38-2.18-2.38-3.35-5.27l-6.32 7.1q.55 1.56 2.97 3.59l-5.23 10.92 2.89 1.32 5.07-11.15q1.32.55 2.18.7.86.16 2.34.16 3.82 0 7.02-1.72l.23.24zM214.5-39q3.82 0 7.21 1.64 3.4 1.64 4.96 4.99l-5.62 3.04q-1.25-1.79-3.43-3.23-2.18-1.45-4.68-1.45-3.98 0-6.94 2.07-2.97 2.07-4.53 5.58-1.56 3.51-1.56 7.8 0 6.16 2.11 10.02 2.11 3.86 6.63 3.86 6.4 0 8.81-5.15 2.42-5.15 2.42-11.23v-3.51l6.87-2.89v20.52q0 1.01.54 1.95.55.93 1.64.93 2.26 0 4.13-3.12l1.17 1.25q-.93 2.65-3.27 4.49-2.34 1.83-4.68 1.83-3.36 0-4.96-2.5-1.59-2.49-1.59-6.63h-.16q-1.95 4.14-5.27 6.91-3.31 2.77-6.98 2.77-6.63 0-10.02-4.57-3.39-4.56-3.39-12.2 0-6.09 2.73-11.43t7.45-8.54q4.72-3.2 10.41-3.2zm66.61-.7q2.34 0 3.63 1.52t1.29 5.11v26.52q0 1.17.54 1.91.55.74 1.48.74.94 0 2.03-.78 1.09-.78 2.11-2.26l1.25 1.17q-1.64 3.51-3.9 4.87-2.27 1.37-.86 1.33 1.4-.04-3.36-.04-6.47 0-6.47-7.88v-21.53q0-.78-.39-1.32-.39-.55-1.01-.55-1.72 0-3.75 3.75-2.03 3.74-3.43 10.57-1.4 6.82-1.4 15.63l-7.1 2.03v-30.11q0-.78-.39-1.32-.39-.55-.94-.55-1.56 0-3.63 3.78-2.06 3.79-3.58 10.61-1.52 6.83-1.52 15.56L245 1.09v-33.38q0-1.33-.67-2.11-.66-.78-1.67-.78-1.95 0-3.98 3.36l-1.25-1.25q1.64-3.51 3.9-5.03 2.26-1.52 2.77-1.56.51-.04 1.52-.04 3.75 0 5.07 1.6 1.33 1.6 1.33 4.25v13.02h.23q1.95-8.5 5.27-13.69 3.31-5.18 6.59-5.18 2.42 0 3.62 1.48 1.21 1.48 1.21 5.15v12.24h.47q1.95-8.5 5.19-13.69 3.24-5.18 6.51-5.18z"
        fill="url(#prefix__editing-shiny-gradient2)"
        transform="translate(102.615 117.59)"
      />
    </g>
    <style />
    </Svg>
  )
}

