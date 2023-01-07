import { ImageItem, Image } from './ImageGalleryItem.styled';

export const ImageGallaryItem = ({
  id,
  imageLink,
  imageName,
  onImageClick,
}) => {
  return (
    <ImageItem onClick={onImageClick}>
      <Image id={id} src={imageLink} alt={imageName} />
    </ImageItem>
  );
};