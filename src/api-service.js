const basePath = "https://pcg2cvc1ij.execute-api.us-east-1.amazonaws.com/product/comics";
const libraryPath = "https://pcg2cvc1ij.execute-api.us-east-1.amazonaws.com/product/library";

//Comic API Queries
export const getComics = async () => {
    return makeRequest();
}

export const getComic = (comicId) => {
    return fetch(`${basePath}/${comicId}`).then((r) => r.json());
}

export const deleteComic = (comicId) => {
    return makeRequest(`${basePath}/${comicId}`, {
        method: 'DELETE'
    });
}

export const createComic = (comic) => {
    return makeRequest(basePath, {
        method: 'POST',
        body: JSON.stringify(comic),
        headers: {
            "content-type": 'application/json'
        }
    });
}

export const updateComic = (comic) => {                
    return makeRequest(`${basePath}/${comic.comicId}`, {
        method: 'PATCH',
        body: JSON.stringify(comic),
        headers: {
            "content-type": 'application/json'
        }
    });
}

//Library API Queries
export const getLibrary = (libraryId) => {
    return fetch(`${libraryPath}/${libraryId}`).then((r) => r.json());
}

export const createLibrary = (library) => {
    return makeRequest(libraryPath, {
        method: 'POST',
        body: JSON.stringify(library),
        headers: {
            "content-type": 'application/json'
        }
    });
}

export const updateLibrary = (library) => {
    return makeRequest(`${libraryPath}/${library.libraryId}`, {
        method: 'PATCH',
        body: JSON.stringify(library),
        headers: {
            "content-type": 'application/json'
        }
    });
}

function makeRequest(url = basePath, config) {
    config = config || {
        method: "GET"
    }

    return fetch(url, config).then((r) => r.json());
}