async function request(path, options) {
    const res = await fetch(path, options);
    if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
    }
    return res.json();
}

export const getServices = () => request('/api/services/');

export const getProjects = () => request('/api/projects/');

export const sendQuote = (data) =>
    request('/api/quote-requests/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });