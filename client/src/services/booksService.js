import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/books'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (bookId) => {
    const result = await request.get(`${baseUrl}/${bookId}`, );

    return result;
}

export const create = async (bookData) => {
    const result = await request.post(baseUrl, bookData);

    return result;
};

export const remove = async (bookId) => request.remove(`${baseUrl}/${bookId}`);