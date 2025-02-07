declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const value: Image;
  export default value;
}
