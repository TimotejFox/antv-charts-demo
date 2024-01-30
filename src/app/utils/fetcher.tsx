import useSWR from 'swr';

const fetcher = async (url: string) => {
    const res = await fetch(url, {
        method: 'GET'
    });
    if (!res.ok) {
        throw new Error('Cannot load data.');
    }

    return await res.json();
};

const useFetch = (path: string) => {
    const { data, error } = useSWR(path, fetcher);

    const isLoading = !data && !error;

    return { data, error, isLoading };
};

export default useFetch;