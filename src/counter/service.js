import { useHttp } from "./http.hook"

export const useService = () => {
    const { loading, error, request, clearError } = useHttp();

    const getImage = async (id) => {
        const res = await request(
            `https://jsonplaceholder.typicode.com/photos/${id}`
        );
        return _transformPhoto(res);
    };

    const _transformPhoto = (photo) => {
        return {
            id: photo.id,
            thumbnailUrl: photo.thumbnailUrl,
        };
    };

    return {
        loading, error, clearError, getImage,
    };
}