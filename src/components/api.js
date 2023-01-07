import axios from 'axios';

export const fetchApi = async(name,page) => {
    const apiSearch = `https://pixabay.com/api/?q=${name}&page=${page}&key=30629726-597c78df0089c177162f75c58&image_type=photo&orientation=horizontal&per_page=12`;
    const response = await axios.get(apiSearch);
    return response.data;
}