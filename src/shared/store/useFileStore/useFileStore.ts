import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ThemeState, VideoFile } from "./types";

export const useFileStore = create(
   persist<ThemeState>(
      (set) => ({
         files: [],
         currentFile: null,

         addFile: (file: VideoFile) =>
            set((state) => ({
               files: [...state.files, file],
            })),

         removeFile: (file: VideoFile) =>
            set((state) => ({
               files: state.files.filter((f) => f.name !== file.name),
            })),

         setCurrentFile: (file: VideoFile | null) =>
            set(() => ({
               currentFile: file,
            })),

         getVideoFile: (url: string) =>
            set((state) => {
               const foundFile = state.files.find((file) => file.url === url);
               return { currentFile: foundFile || null };
            }),
      }),
      {
         name: "file_storage",
         serialize: (state) => JSON.stringify(state),
         deserialize: (str) => {
            const state = JSON.parse(str);
            if (state.files) {
               state.files = state.files.map((file: VideoFile) => ({
                  ...file,
                  url: URL.createObjectURL(
                     new Blob([Uint8Array.from(atob(file.base64), (c) => c.charCodeAt(0))], {
                        type: "video/*",
                     })
                  ),
               }));
            }
            return state;
         },
      }
   )
);
