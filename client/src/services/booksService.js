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

export const edit = async (bookId, bookData) => {
    const result = await request.put(`${baseUrl}/${bookId}`, bookData);

    return result;
};

export const remove = async (bookId) => request.remove(`${baseUrl}/${bookId}`);

export const filter = async (whereClause) => {
    let result;

    result = await request.get(`${baseUrl}${whereClause}`);

    return result;
}

export const getLatestBooks = async (whereClause, offset, count) => {
    
    const query = new URLSearchParams({
        where: whereClause,
        offset: offset,
        pageSize: count,
    });

    const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&${query}`);

    return result;
}

export const getUsersBooks = async (userId) => {
    
    const query = new URLSearchParams({
        where: `_ownerId="${userId}"`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}