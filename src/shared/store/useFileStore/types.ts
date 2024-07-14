export interface VideoFile {
   url: string;
   name: string;
   base64: string;
}

export interface ThemeState {
   files: VideoFile[];
   currentFile: VideoFile | null;
   addFile: (file: VideoFile) => void;
   removeFile: (file: VideoFile) => void;
   setCurrentFile: (file: VideoFile) => void;
   getVideoFile: (name: string) => void;
}
