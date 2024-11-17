const BASE_URL = 'http://localhost:8080';

export const getAllBooks = async (search = '', page = 1, limit = 5) => {
    const url =
        `${BASE_URL}/book/all?search=${search}&page=${page}&limit=${limit}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const result = await fetch(url, options);
        const data  = await result.json();

        return data;
    } catch (err) {
        return err;
    }
}
export const AddBook = async (bookObj) => {
    const url = `${BASE_URL}/book/add-book`;
    console.log('url ', url);
    // Create a FormData object
    const formData = new FormData();

    // Append all fields to the FormData object
    for (const key in bookObj) {
        formData.append(key, bookObj[key]);
    }
    // FormData handles the headers and content type
    const options = {
        method: 'POST',
        body: formData
    };
    try {
        const result = await fetch(url, options);
        const data = await result.json();
        return data;
    } catch (err) {
        return err;
    }
};
export const GetBooksById = async (id) => {
    const url =
        `${BASE_URL}/book/${id}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const result = await fetch(url, options);
        const { data } = await result.json();
        console.log(data);
        return data;
    } catch (err) {
        return err;
    }
}