import { ImageGallaryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ searchResults, lookBigImg }) => {
  return (
    <GalleryList>
      {searchResults.map(element => (
        <ImageGallaryItem
          key={element.id}
          id={element.id}
          imageLink={element.webformatURL}
          imageName={element.tags}
          onImageClick={lookBigImg}
        />
      ))}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  lookBigImg: PropTypes.func.isRequired,
};