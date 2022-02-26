import { createContext } from 'react';
export interface Image {
  imagePreview: string;
  set_imagePreview?: (user: any) => void;
}
const ImageContext = createContext<Image>({ imagePreview: '' });

export default ImageContext;
