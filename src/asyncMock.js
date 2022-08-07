const products = [
    { id: '1', name: 'The Mandalorian by Stern', category: 'pinball', description: 'No description', image: 'https://www.thepinballcompany.com/wp-content/uploads/2021/05/Mandalorian-Pro-Cabinet-RF-01-scaled.jpg', price: '6899', stock: '4' },
    { id: '2', name: 'Jurassic Park', category: 'arcade', description: 'No description', image: 'https://www.thepinballcompany.com/wp-content/uploads/2017/02/Jurrassic-Park-Arcade.png', price: '17999', stock: '4' },
    { id: '3', name: 'Mario Kart GP DX', category: 'top', description: 'No description', image: 'https://www.thepinballcompany.com/wp-content/uploads/2017/02/mariokartgpdx.gif', price: '11999', stock: '4' },
    { id: '4', name: 'Pac-Man Home Edition', category: 'arcade', description: 'No description', image: 'https://www.thepinballcompany.com/wp-content/uploads/2022/07/Arcade-Party-1.jpg', price: '3599', stock: '4' },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(products) }, 2000);
    });
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 2000);
    });
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(products.find(p => p.id === id)) }, 2000);
    });
}
