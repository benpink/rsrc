/* @flow */

import * as React from "react";

type Props = {
  width: number,
};

export default ({ width = 120 }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 189 40"
    width={width}
    height={(width * 40) / 189}
    fill="#f05424"
  >
    <path d="M41.02 12.82c-.31-.39-.7-.7-1.25-.98-.55-.27-1.1-.39-1.64-.39-.31 0-.67.04-.98.12-.31.08-.63.2-.9.39-.27.16-.51.39-.67.67-.16.27-.27.63-.27 1.02 0 .35.08.67.23.94.16.27.35.47.63.67.27.2.59.35.94.47.39.12.78.27 1.25.39.51.16 1.06.35 1.6.55.55.2 1.06.47 1.53.82s.82.78 1.14 1.29c.27.51.43 1.17.43 1.96 0 .86-.16 1.6-.47 2.23-.31.63-.74 1.17-1.25 1.6-.51.43-1.14.74-1.84.94-.7.2-1.45.31-2.23.31-1.02 0-2.04-.2-3.05-.59-.98-.39-1.8-.94-2.43-1.68l2.04-1.88c.39.55.9.98 1.57 1.29s1.29.47 1.92.47c.31 0 .67-.04 1.02-.12.35-.08.67-.23.94-.43.27-.2.51-.43.67-.74.16-.27.27-.67.27-1.1s-.08-.78-.27-1.06c-.2-.27-.47-.51-.78-.7-.31-.2-.7-.39-1.17-.55s-.94-.31-1.41-.47c-.47-.16-.98-.31-1.45-.55-.47-.2-.9-.47-1.29-.82s-.7-.78-.94-1.25c-.23-.51-.35-1.14-.35-1.88 0-.82.16-1.53.51-2.07.35-.59.78-1.06 1.33-1.45.55-.39 1.17-.67 1.88-.86.7-.2 1.41-.27 2.11-.27.82 0 1.64.16 2.47.43.82.27 1.57.7 2.15 1.29l-1.99 1.99" />
    <path d="M45.17 10.94c0-.43.16-.82.47-1.14.31-.31.74-.47 1.21-.47s.9.16 1.25.47c.35.31.51.7.51 1.17s-.16.86-.51 1.17c-.35.31-.74.47-1.25.47s-.9-.16-1.21-.47c-.32-.37-.47-.77-.47-1.2zm.35 3.68h2.7v10.8h-2.7v-10.8z" />
    <path d="M62.31 14.62v9.82c0 .98-.12 1.84-.35 2.66-.23.78-.63 1.45-1.1 2-.51.55-1.14.98-1.92 1.25-.78.31-1.68.43-2.74.43-.43 0-.9-.04-1.37-.12-.47-.08-.98-.2-1.45-.35-.47-.16-.94-.35-1.37-.55-.43-.23-.82-.47-1.17-.78l1.57-2.07c.51.51 1.14.86 1.76 1.14.67.27 1.33.39 2 .39.63 0 1.17-.08 1.64-.27.43-.2.78-.43 1.06-.78.27-.31.47-.7.55-1.17.12-.47.16-.94.16-1.49v-.78h-.04c-.39.55-.9.94-1.49 1.21-.63.27-1.29.43-2.04.43-.82 0-1.53-.16-2.19-.47-.67-.31-1.21-.7-1.68-1.21s-.82-1.1-1.06-1.8c-.27-.67-.39-1.41-.39-2.15 0-.78.12-1.53.35-2.19.23-.7.59-1.29 1.06-1.8.47-.51 1.02-.9 1.68-1.21.67-.31 1.37-.47 2.19-.47.78 0 1.49.16 2.15.47.67.31 1.17.82 1.57 1.45h.04v-1.6h2.58v.01zm-5.79 1.88c-.51 0-.94.08-1.33.27-.39.2-.7.43-.98.74-.27.31-.47.67-.63 1.1-.16.43-.2.86-.2 1.33 0 .43.08.86.2 1.25.16.39.35.78.63 1.1.27.31.59.59.98.78.39.2.82.27 1.29.27.51 0 .94-.08 1.33-.27s.74-.43 1.02-.74c.27-.31.51-.67.63-1.1.16-.43.23-.82.23-1.29 0-.47-.08-.9-.23-1.33-.16-.43-.35-.78-.63-1.1-.27-.31-.63-.55-1.02-.74-.35-.19-.78-.27-1.29-.27z" />
    <path d="M65.17 14.62h2.58v1.72h.04c.23-.55.67-1.02 1.25-1.45s1.29-.63 2.11-.63c.7 0 1.29.12 1.8.35.51.23.9.59 1.25.98.31.39.55.86.7 1.41.16.51.23 1.06.23 1.6v6.77h-2.7v-5.95c0-.31-.04-.63-.08-.98s-.16-.67-.27-.94c-.12-.27-.35-.51-.63-.7s-.63-.27-1.06-.27c-.43 0-.82.08-1.14.27-.31.16-.59.39-.78.67-.2.27-.35.59-.47.94s-.16.7-.16 1.06v5.95h-2.7l.03-10.8" />
    <path d="M84.82 24.06h-.08c-.27.47-.7.86-1.29 1.17s-1.29.47-2.04.47c-.43 0-.9-.04-1.37-.16-.47-.12-.9-.31-1.29-.55-.39-.27-.74-.63-.98-1.02-.27-.43-.39-.94-.39-1.6 0-.82.23-1.45.7-1.92s1.06-.86 1.76-1.1c.7-.27 1.53-.43 2.39-.51.86-.08 1.72-.12 2.58-.12v-.27c0-.67-.23-1.17-.74-1.49-.47-.31-1.06-.47-1.76-.47-.59 0-1.14.12-1.64.35-.51.23-.98.55-1.29.86l-1.41-1.64a5.87 5.87 0 0 1 2.11-1.29c.82-.27 1.6-.43 2.43-.43.98 0 1.76.12 2.39.39.63.27 1.1.63 1.49 1.06.35.43.63.94.74 1.45.16.55.2 1.1.2 1.6v6.58h-2.51v-1.36zm-.04-3.57h-.63c-.43 0-.9 0-1.37.04s-.94.12-1.33.23c-.39.12-.74.31-1.02.55-.27.23-.39.55-.39.94 0 .27.04.47.16.63.12.16.27.31.43.43.2.12.39.2.63.23s.47.08.67.08c.94 0 1.64-.23 2.11-.74s.7-1.17.7-2.04v-.35h.04z" />
    <path d="M90.1 8.4h2.7v17.03h-2.7V8.4z" />
    <path d="M109.91 12.82c-.31-.39-.74-.7-1.25-.98-.55-.27-1.1-.39-1.64-.39-.31 0-.67.04-.98.12-.31.08-.63.2-.9.39-.27.16-.51.39-.67.67-.16.27-.27.63-.27 1.02 0 .35.08.67.23.94s.35.47.63.67c.27.2.59.35.94.47.39.12.78.27 1.25.39.51.16 1.06.35 1.6.55.55.2 1.06.47 1.53.82s.82.78 1.14 1.29c.27.51.43 1.17.43 1.96 0 .86-.16 1.6-.47 2.23-.31.63-.74 1.17-1.25 1.6-.51.43-1.14.74-1.84.94-.7.2-1.45.31-2.23.31-1.02 0-2.04-.2-3.05-.59-.98-.39-1.8-.94-2.43-1.68l2.04-1.88c.39.55.9.98 1.57 1.29s1.29.47 1.92.47c.31 0 .67-.04 1.02-.12s.67-.23.94-.43c.27-.2.51-.43.67-.74.16-.27.27-.67.27-1.1s-.08-.78-.27-1.06c-.2-.27-.47-.51-.78-.7-.31-.2-.7-.39-1.17-.55-.43-.16-.94-.31-1.41-.47-.47-.16-.98-.31-1.45-.55-.47-.2-.9-.47-1.29-.82s-.7-.78-.94-1.25c-.23-.51-.35-1.14-.35-1.88 0-.82.16-1.53.51-2.07.35-.59.78-1.06 1.33-1.45.55-.39 1.17-.67 1.88-.86s1.41-.27 2.11-.27c.82 0 1.64.16 2.47.43.82.27 1.57.7 2.15 1.29l-1.99 1.99" />
    <path d="M121.61 17.6c-.2-.31-.51-.55-.94-.74-.43-.2-.86-.31-1.29-.31-.51 0-.94.12-1.29.31-.39.2-.7.47-.94.78s-.43.7-.55 1.1c-.12.43-.2.82-.2 1.25s.08.82.2 1.25c.12.43.31.78.59 1.1.27.31.59.59.94.78.39.2.82.31 1.33.31.43 0 .82-.08 1.25-.23.43-.16.74-.39 1.02-.7l1.68 1.72c-.43.47-1.02.86-1.72 1.1-.7.27-1.45.39-2.27.39-.78 0-1.57-.12-2.27-.39s-1.33-.63-1.88-1.14c-.55-.51-.94-1.1-1.25-1.8-.31-.7-.47-1.53-.47-2.43 0-.86.16-1.64.47-2.35.31-.7.7-1.29 1.25-1.8.51-.51 1.14-.86 1.84-1.14.7-.27 1.45-.39 2.23-.39s1.57.16 2.31.47c.74.31 1.33.7 1.76 1.25l-1.8 1.61" />
    <path d="M125.52 10.94c0-.43.16-.82.47-1.14.31-.31.74-.47 1.21-.47.51 0 .9.16 1.25.47.35.31.51.7.51 1.17s-.16.86-.51 1.17c-.35.31-.74.47-1.25.47s-.9-.16-1.21-.47c-.31-.37-.47-.77-.47-1.2zm.39 3.68h2.7v10.8h-2.7v-10.8z" />
    <path d="M142 20.14v.35c0 .12 0 .23-.04.35h-8.22c.04.39.12.74.31 1.06.16.31.39.59.7.82.27.23.63.43.98.55.35.12.74.2 1.14.2.67 0 1.25-.12 1.72-.35.47-.23.86-.59 1.14-1.02l1.8 1.45c-1.06 1.45-2.62 2.15-4.62 2.15-.82 0-1.6-.12-2.31-.39-.7-.27-1.33-.63-1.84-1.1-.51-.47-.94-1.06-1.21-1.76a6.57 6.57 0 0 1-.43-2.39c0-.86.16-1.64.43-2.39.27-.7.7-1.33 1.21-1.84s1.1-.9 1.8-1.17c.7-.27 1.45-.43 2.27-.43.74 0 1.45.12 2.07.35.63.23 1.17.63 1.64 1.1.47.47.82 1.1 1.1 1.84.24.82.36 1.64.36 2.62zm-2.7-1.21c0-.35-.04-.67-.16-.98a1.7 1.7 0 0 0-.47-.82c-.2-.23-.47-.43-.78-.59s-.7-.2-1.14-.2c-.82 0-1.49.23-2.07.74-.55.47-.86 1.1-.94 1.88h5.56v-.03z" />
    <path d="M144.35 14.62h2.58v1.72h.04c.23-.55.67-1.02 1.25-1.45.59-.43 1.29-.63 2.11-.63.7 0 1.29.12 1.8.35.51.23.9.59 1.25.98.31.39.55.86.7 1.41.16.51.23 1.06.23 1.6v6.77h-2.7v-5.95c0-.31-.04-.63-.08-.98s-.16-.67-.27-.94c-.16-.27-.35-.51-.63-.7s-.63-.27-1.06-.27c-.43 0-.82.08-1.14.27-.31.16-.59.39-.78.67s-.35.59-.47.94-.16.7-.16 1.06v5.95h-2.7v-10.8" />
    <path d="M164.27 17.6c-.2-.31-.51-.55-.94-.74-.43-.2-.86-.31-1.29-.31-.51 0-.94.12-1.29.31-.39.2-.7.47-.94.78s-.43.7-.55 1.1c-.12.43-.2.82-.2 1.25s.08.82.2 1.25c.12.43.31.78.59 1.1s.59.59.94.78c.39.2.82.31 1.33.31.43 0 .82-.08 1.25-.23.43-.16.74-.39 1.02-.7l1.68 1.72c-.47.47-1.02.86-1.72 1.1-.7.27-1.45.39-2.27.39-.78 0-1.57-.12-2.27-.39s-1.33-.63-1.88-1.14c-.55-.51-.94-1.1-1.25-1.8-.31-.7-.47-1.53-.47-2.43 0-.86.16-1.64.47-2.35.31-.7.74-1.29 1.25-1.8s1.14-.86 1.84-1.14c.7-.27 1.45-.39 2.23-.39a6 6 0 0 1 2.31.47c.74.31 1.33.7 1.76 1.25l-1.8 1.61" />
    <path d="M178.36 20.14v.35c0 .12 0 .23-.04.35h-8.22c.04.39.12.74.31 1.06.16.31.39.59.7.82.27.23.63.43.98.55.35.12.74.2 1.14.2.67 0 1.25-.12 1.72-.35.47-.23.86-.59 1.14-1.02l1.8 1.45c-1.06 1.45-2.62 2.15-4.62 2.15-.82 0-1.6-.12-2.31-.39-.7-.27-1.33-.63-1.84-1.1-.51-.47-.94-1.06-1.21-1.76a6.57 6.57 0 0 1-.43-2.39c0-.86.16-1.64.43-2.39.27-.7.7-1.33 1.21-1.84s1.1-.9 1.8-1.17c.7-.27 1.45-.43 2.27-.43.74 0 1.45.12 2.07.35.63.23 1.17.63 1.64 1.1.47.47.82 1.1 1.1 1.84.24.82.36 1.64.36 2.62zm-2.7-1.21c0-.35-.04-.67-.16-.98a1.7 1.7 0 0 0-.47-.82c-.2-.23-.47-.43-.78-.59-.31-.16-.7-.2-1.14-.2-.82 0-1.49.23-2.07.74-.55.47-.86 1.1-.94 1.88h5.56v-.03z" />
    <path d="M187.25 17.48c-.23-.31-.59-.59-.98-.82-.43-.23-.86-.35-1.37-.35-.43 0-.82.08-1.17.27-.35.2-.55.47-.55.9s.2.7.59.9c.39.16.98.35 1.76.55.39.08.82.2 1.21.35.43.16.78.35 1.14.59s.63.55.82.94c.2.35.31.82.31 1.33 0 .67-.12 1.21-.39 1.68-.23.47-.59.82-.98 1.1-.43.27-.9.51-1.45.63s-1.1.2-1.68.2c-.82 0-1.64-.16-2.47-.47-.78-.31-1.45-.74-2-1.33l1.76-1.68c.31.39.7.7 1.17.98.47.27 1.02.39 1.6.39.2 0 .39-.04.59-.08s.39-.12.55-.2c.16-.08.31-.23.43-.39s.16-.35.16-.63c0-.47-.2-.78-.63-.98-.43-.2-1.02-.39-1.84-.59-.39-.08-.78-.2-1.17-.35-.39-.16-.7-.31-1.02-.55-.31-.23-.55-.51-.7-.86-.2-.35-.27-.78-.27-1.29 0-.59.12-1.14.35-1.57.23-.43.59-.78.98-1.06.39-.27.86-.47 1.37-.63.51-.12 1.02-.2 1.57-.2.78 0 1.53.12 2.27.39s1.33.67 1.76 1.25l-1.72 1.58" />
    <path d="M23.17 8.05c-.12-.08-1.45-.78-3.25-1.6l-1.8 1.8c1.25.55 2.43 1.1 3.25 1.53-.2 2.82-1.25 9.16-2.39 12.6-.78 2.43-4.85 5.24-6.93 6.46a27.94 27.94 0 0 1-2.7-1.8l8.61-8.65a3.519 3.519 0 0 0 0-4.97 3.519 3.519 0 0 0-4.97 0l-3.52 3.52c-.47.47-1.21.47-1.68 0-.23-.23-.35-.51-.35-.82 0-.31.12-.63.35-.82l7.95-7.98 1.84-1.84c-1.92-.7-3.95-1.29-5.52-1.29C8.07 4.19 1.22 7.91.94 8.06l-.63.3v.7c0 2.66 1.29 10.25 2.54 14.01.27.82.78 1.64 1.37 2.39l1.68-1.68c-.35-.51-.67-.98-.82-1.49-1.14-3.44-2.23-9.79-2.39-12.6 2.19-1.06 6.81-3.17 9.35-3.17.31 0 .67.04 1.06.12l-6.97 6.97c-.67.67-1.02 1.57-1.02 2.51s.35 1.84 1.02 2.51a3.519 3.519 0 0 0 4.97 0l3.52-3.52c.47-.47 1.21-.47 1.68 0 .23.23.35.51.35.82 0 .31-.12.63-.35.82L5.83 27.23c2.35 2.15 5.17 3.76 5.64 3.99l.55.31.55-.31c7.05-3.84 8.49-7.67 8.61-8.1 1.25-3.8 2.54-11.35 2.54-14.01V8.4l-.55-.35z" />
  </svg>
);
