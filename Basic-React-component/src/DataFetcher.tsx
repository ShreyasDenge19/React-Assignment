import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Album {
    userId: number;
    id: number;
    title: string;
}

const DataFetcher: React.FC = () => {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/1/albums')
            .then(response => {
                setAlbums(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Albums</h1>
            <ul className="list-disc list-inside">
                {albums.map(album => (
                    <li key={album.id} className="mb-2">
                        {album.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataFetcher;
