const generateBooks: (qty: number) => object = function (qty) {
    return new Array(qty).fill(null).map((_, index) => ({
        id: index,
        poster: `collection-${index + 1}-section-1.jpg`,
        rating: ``,
        title: `Collection ${index + 1}`,
        author: ``,
        year: ``,
        btnClass: ``,
    }));
};

export const COLLECTIONS = generateBooks(5);