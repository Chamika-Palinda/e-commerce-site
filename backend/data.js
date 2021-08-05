import bcrypt from 'bcryptjs';

const data = {

    users:[
    {
        name:'Basir',
        email:'admin@example.com',
        password: bcrypt.hashSync('1234',8),
        isAdmin:true,
    },

    {
        name:'John',
        email:'user@example.com',
        password: bcrypt.hashSync('1234',8),
        isAdmin:false,
    },

    ],

    products:[
        {
            name:'Nike Slim Shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:120,
            countInStock:0,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
        {
            name:'Puma Slim Shirt',
            category:'Shirts',
            image:'/images/p2.jpg',
            price: 100,
            countInStock:50,
            brand:'Puma',
            rating:3,
            numReviews:3,
            description:'high quality product',
        },
        {
            name:'Noopa Slim Shirt',
            category:'Shirts',
            image:'/images/p3.jpg',
            price:230,
            countInStock:50,
            brand:'Noopa',
            rating:4,
            numReviews:13,
            description:'high quality product',
        },
        {
            name:'Niwed Slim Cotton',
            category:'Trousers',
            image:'/images/p4.jpg',
            price:100,
            countInStock:50,
            brand:'Niwed',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
        {
            name:'Puzekk Slim Cotton',
            category:'Trousers',
            image:'/images/p5.jpg',
            price:60,
            countInStock:50,
            brand:'Puzekk',
            rating:2,
            numReviews:7,
            description:'high quality product',
        },
        {
            name:'Adidas fit pants',
            category:'Trousers',
            image:'/images/p6.jpg',
            price:123,
            countInStock:50,
            brand:'Adidas',
            rating:6,
            numReviews:12,
            description:'high quality product',
        },
        
    ],
}

export default data;