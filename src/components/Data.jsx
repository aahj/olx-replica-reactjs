import image0 from '../image/0.webp';
import image1 from '../image/1.webp';
import image2 from '../image/2.webp';
import image3 from '../image/3.webp';
import image4 from '../image/4.webp';
import image5 from '../image/5.webp';
import image6 from '../image/6.webp';
import image7 from '../image/7.webp';
import image8 from '../image/8.webp';
import image9 from '../image/9.webp';
import image10 from '../image/10.webp';
import image11 from '../image/11.webp';

const Data = [
    {
        id: 1,
        imgsrc: image0,
        title: "Samsung A50",
        price: 35500,
        seller_desc: 'Bilal',
        description: "Lorem 1, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit a quam explicabo neque similique quo, praesentium libero atque quisquam dolorum iste voluptatem illum sequi expedita recusandae? Amet, repudiandae voluptatem?",
        location: 'karachi',
        slug: 'mobile-phones/samsung-a50',
        featured: true,
        category: {type:'mobile-phones'}
    },
    {
        id: 2,
        imgsrc: image1,
        title: "Sofa",
        price: 25300,
        seller_desc: 'rashi',
        description: 'Lorem 2, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit a quam explicabo neque similique quo, praesentium libero atque quisquam dolorum iste voluptatem illum sequi expedita recusandae? Amet, repudiandae voluptatem?',
        location: 'Pehsawar',
        slug: 'houses-furniture/sofa',
        featured: true,
        category: {type:'houses'}
    },
    {
        id: 3,
        imgsrc: image2,
        title: "Iphone X",
        price: 130000,
        seller_desc: 'tikka',
        description: "Lorem 3, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit a quam explicabo neque similique quo, praesentium libero atque quisquam dolorum iste voluptatem illum sequi expedita recusandae? Amet, repudiandae voluptatem?",
        location: 'Sialkot',
        slug: 'mobile-phones/iphone-x',
        featured: false,
        category:{type: 'mobile-phones'}
    },
    {
        id: 4,
        imgsrc: image3,
        title: "Couple & Corporate Hotel",
        price: 15100,
        seller_desc: 'Asghar',
        description: "Lorem 4, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit a quam explicabo neque similique quo, praesentium libero atque quisquam dolorum iste voluptatem illum sequi expedita recusandae? Amet, repudiandae voluptatem?",
        location: 'Faislabad',
        slug: 'hotels/couple-and-corporate-hotel',
        featured: true,
        category:{type: 'hotels'}
    },
    {
        id: 5,
        imgsrc: image4,
        title: "Simple Plot",
        price: 235500,
        seller_desc: 'Jawed',
        description: "Lorem 5, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit a quam explicabo neque similique quo, praesentium libero atque quisquam dolorum iste voluptatem illum sequi expedita recusandae? Amet, repudiandae voluptatem?",
        location: 'Faislabad',
        slug: 'lands-and-plots/simple-plot',
        featured: false,
        category:{type: 'lands-and-plots'}

    },
    {
        id: 6,
        imgsrc: image5,
        title: "Iphone 8",
        price: 75500,
        seller_desc: 'Ragma',
        description: "Lorem 6, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit a quam explicabo neque similique quo, praesentium libero atque quisquam dolorum iste voluptatem illum sequi expedita recusandae? Amet, repudiandae voluptatem?",
        location: 'Abtobbabad',
        slug: 'mobile-phones/iphone-8',
        featured: false,
        category:{type: 'mobile-phones'}

    },
    {
        id: 7,
        imgsrc: image6,
        title: "Dressing Table",
        price: 235500,
        seller_desc: 'Ramish',
        description: "Lorem 7, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit a quam explicabo neque similique quo, praesentium libero atque quisquam dolorum iste voluptatem illum sequi expedita recusandae? Amet, repudiandae voluptatem?",
        location: 'Larkana',
        slug: 'houses-furniture/dressing-table',
        featured: false,
        category:{type: 'houses'}
    },
    {
        id: 8,
        imgsrc: image7,
        title: "Bahria Town Plot",
        price: 535500,
        seller_desc: 'Asghar',
        description: "Lorem 8, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit a quam explicabo neque similique quo, praesentium libero atque quisquam dolorum iste voluptatem illum sequi expedita recusandae? Amet, repudiandae voluptatem?",
        location: 'Islamabad',
        slug: 'lands-and-plots/bahria-town-plot',
        featured: false,
        category:{type: 'lands-and-plots'}
    },
    {
        id: 9,
        imgsrc: image8,
        title: "Magical Chair",
        price: 15999,
        seller_desc: 'Shoghar',
        description: "Lorem 9, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit a quam explicabo neque similique quo, praesentium libero atque quisquam dolorum iste voluptatem illum sequi expedita recusandae? Amet, repudiandae voluptatem?",
        location: 'Karachi',
        slug: 'houses-furniture/magical-chair',
        featured: false,
        category: {type:'houses'}
    },
    {
        id: 10,
        imgsrc: image9,
        title: "Infinix A9",
        price: 84000,
        seller_desc: 'Fanky',
        description: "Lorem 10, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit a quam explicabo neque similique quo, praesentium libero atque quisquam dolorum iste voluptatem illum sequi expedita recusandae? Amet, repudiandae voluptatem?",
        location: 'Liaquatabad',
        slug: 'mobile-phones/infinix-a9',
        featured: true,
        category:{type: 'mobile-phones'}
    },
    {
        id: 11,
        imgsrc: image10,
        title: "Cultus",
        price: 91000,
        seller_desc: 'John Cena',
        description: "Lorem 11, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit a quam explicabo neque similique quo, praesentium libero atque quisquam dolorum iste voluptatem illum sequi expedita recusandae? Amet, repudiandae voluptatem?",
        location: 'Karachi',
        slug: 'cars/cultus',
        featured: false,
        category: {type:'cars'}
    },
    {
        id: 12,
        imgsrc: image11,
        title: "Corolla Altis 2.0",
        price: 144000,
        seller_desc: 'Hasan',
        description: "Lorem 12, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit a quam explicabo neque similique quo, praesentium libero atque quisquam dolorum iste voluptatem illum sequi expedita recusandae? Amet, repudiandae voluptatem?",
        location: 'Peshawar',
        slug: 'cars/corolla-altis-2.0',
        featured: false,
        category:{type: 'cars'}
    }
];
const detailProduct = {
    id: 1,
    imgsrc: image0,
    title: "Samsung A50",
    price: 35500,
    seller_desc: 'Bilal',
    description: "Lorem 1, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit a quam explicabo neque similique quo, praesentium libero atque quisquam dolorum iste voluptatem illum sequi expedita recusandae? Amet, repudiandae voluptatem?",
    location: 'karachi',
    slug: 'mobile-phones/samsung-a50',
    featured: true,
    category: {type:'mobile-phones'}
};

export {
    Data, detailProduct
}