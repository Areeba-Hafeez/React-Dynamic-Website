import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './portfolio.module.css';
import portfolio1Img1 from '../assest/pic1.jpg';
import portfolio1Img2 from '../assest/pic2.jpg';
import portfolio1Img3 from '../assest/pic3.jpg';
import portfolio1Img4 from '../assest/pic4.jpg';
import portfolio2Img1 from '../assest/pic5.jpg';
import portfolio2Img2 from '../assest/pic6.jpg';
import portfolio2Img3 from '../assest/pic7.jpg';
import portfolio2Img4 from '../assest/pic8.jpg';
import portfolio3Img1 from '../assest/pic9.jpg';
import portfolio3Img2 from '../assest/pic10.jpg';
import portfolio3Img3 from '../assest/pic11.jpg';
import portfolio3Img4 from '../assest/pic12.jpg';
import portfolio4Img1 from '../assest/pic13.jpg';
import portfolio4Img2 from '../assest/pic14.jpg';
import portfolio4Img3 from '../assest/pic15.jpg';
import portfolio4Img4 from '../assest/pic16.jpg';
import portfolio5Img1 from '../assest/Product1.jpg';
import portfolio5Img2 from '../assest/Product2.jpg';
import portfolio5Img3 from '../assest/Product3.jpg';
import portfolio5Img4 from '../assest/Product4.jpg';
import portfolio6Img1 from '../assest/Product5.jpg';
import portfolio6Img2 from '../assest/Product6.jpg';
import portfolio6Img3 from '../assest/Product7.jpg';
import portfolio6Img4 from '../assest/Product8.jpg';
import portfolio7Img1 from '../assest/Product9.jpg';
import portfolio7Img2 from '../assest/Product10.jpg';
import portfolio7Img3 from '../assest/Product11.jpg';
import portfolio7Img4 from '../assest/Product12.jpg';
import portfolio8Img1 from '../assest/Product13.jpg';
import portfolio8Img2 from '../assest/Product14.jpg';
import portfolio8Img3 from '../assest/Product15.jpg';
import portfolio8Img4 from '../assest/Product16.jpg';
import portfolio9Img1 from '../assest/Product17.jpg';
import portfolio9Img2 from '../assest/Product18.jpg';
import portfolio9Img3 from '../assest/Product19.jpg';
import portfolio9Img4 from '../assest/Product20.jpg';
import portfolio10Img1 from '../assest/Product21.jpg';
import portfolio10Img2 from '../assest/Product22.jpg';
import portfolio10Img3 from '../assest/Product23.jpg';
import portfolio10Img4 from '../assest/Product24.jpg';
import portfolio11Img1 from '../assest/Product25.jpg';
import portfolio11Img2 from '../assest/Product26.jpg';
import portfolio11Img3 from '../assest/Product27.jpg';
import portfolio11Img4 from '../assest/Product28.jpg';
import portfolio1 from '../assest/profileman1.jpg';
import portfolio2 from '../assest/profileman2.jpg';
import portfolio3 from '../assest/profileman3.jpg';
import portfolio4 from '../assest/profileman4.jpg';
import portfolio5 from '../assest/profileman5.jpg';
import portfolio6 from '../assest/profileman6.jpg';
import portfolio7 from '../assest/profileman7.jpg';
import portfolio8 from '../assest/profileman8.jpg';
import  portfolio9 from '../assest/profileman9.jpg';
import  portfolio10 from '../assest/profileman10.jpg';
import  portfolio11 from '../assest/profileman11.jpg';
const Profile = () => {
    const { id } = useParams(); 
    const designers = [
        {
            id: '0',
            name: 'JOHN DOE',
            image: portfolio1,
            portfolioItems: [
                { src: portfolio1Img1, heading: 'The Bauhaus Movement', text: 'An exploration of the Bauhaus architectural style featuring iconic furniture pieces and minimalist textiles.' },
                { src: portfolio1Img2, heading: 'Decor Products', text: 'Innovative decor solutions including stylish cushions, vibrant fabrics, and beautiful rug mats.' },
                { src: portfolio1Img3, heading: 'Villa Savoye', text: 'A classic example of modernist architecture with a focus on seamless indoor-outdoor transitions.' },
                { src: portfolio1Img4, heading: 'Apple Store Design', text: 'Minimalist design that enhances user experience through clean lines and functional decor.' },
            ],
            contactInfo: {
                email: 'Johndoe211@gmail.com',
                phone: '(555) 123-4567',
                consultationFee: '33000$',
            },
        },
        {
            id: '1',
            name: 'JANE SMITH',
            image: portfolio2,
            portfolioItems: [
                { src: portfolio2Img1, heading: 'The Bauhaus Movement', text: 'An exploration of the Bauhaus architectural style with key emphasis on geometric forms and functional furnishings.' },
                { src: portfolio2Img2, heading: 'Decor Products', text: 'Innovative decor solutions featuring custom cushions, rich fabrics, and stunning area rugs.' },
                { src: portfolio2Img3, heading: 'Villa Savoye', text: 'Highlighting the interplay between light and materials in modernist architecture.' },
                { src: portfolio2Img4, heading: 'Apple Store Design', text: 'A study in minimalism that creates an inviting shopping experience.' },
            ],
            contactInfo: {
                email: 'janesmith@gmail.com',
                phone: '(555) 987-6543',
                consultationFee: '35000$',
            },
        },
        {
            id: '2',
            name: 'ALICE JOHNSON',
            image: portfolio3,
            portfolioItems: [
                { src: portfolio3Img1, heading: 'Modern Kitchen', text: 'A blend of style and functionality featuring custom cabinetry and quality appliances.' },
                { src: portfolio3Img2, heading: 'Cozy Living Room', text: 'Creating inviting spaces with plush cushions, soft fabrics, and decorative rugs.' },
                { src: portfolio3Img3, heading: 'Elegant Dining', text: 'A fusion of comfort and elegance, showcasing beautiful table settings and ambient lighting.' },
                { src: portfolio3Img4, heading: 'Stylish Office', text: 'Creating productive workspaces with ergonomic furniture and inspiring decor.' },
            ],
            contactInfo: {
                email: 'alicejohnson@gmail.com',
                phone: '(555) 234-5678',
                consultationFee: '32000$',
            },
        },
        {
            id: '3',
            name: 'BOB WILLIAMS',
            image: portfolio4,
            portfolioItems: [
                { src: portfolio4Img1, heading: 'Elegant Office Space', text: 'Designing efficient work environments with functional layouts and modern furnishings.' },
                { src: portfolio4Img2, heading: 'Stylish Bedroom', text: 'Comfort meets aesthetic appeal with cozy bedding and thoughtfully chosen accessories.' },
                { src: portfolio4Img3, heading: 'Contemporary Living Room', text: 'A modern take on traditional design featuring statement pieces and layered textiles.' },
                { src: portfolio4Img4, heading: 'Chic Bathroom', text: 'Luxurious bathroom renovations that emphasize comfort and style.' },
            ],
            contactInfo: {
                email: 'bobwilliams@gmail.com',
                phone: '(555) 345-6789',
                consultationFee: '34000$',
            },
        },
        {
            id: '4',
            name: 'EMMA DAVIS',
            image: portfolio5,
            portfolioItems: [
                { src: portfolio5Img1, heading: 'Sustainable Design', text: 'Eco-friendly living spaces featuring recycled materials and sustainable practices.' },
                { src: portfolio5Img2, heading: 'Bright Interiors', text: 'Using natural light to enhance space with sheer fabrics and light-colored furnishings.' },
                { src: portfolio5Img3, heading: 'Rustic Cabin', text: 'Charming designs that blend with nature, incorporating natural wood and cozy textiles.' },
                { src: portfolio5Img4, heading: 'Urban Loft', text: 'Modern designs for city living, emphasizing open spaces and contemporary decor.' },
            ],
            contactInfo: {
                email: 'emmadavis@gmail.com',
                phone: '(555) 456-7890',
                consultationFee: '31000$',
            },
        },
        {
            id: '5',
            name: 'CHARLIE BROWN',
            image: portfolio6,
            portfolioItems: [
                { src: portfolio6Img1, heading: 'Minimalist Style', text: 'Less is more in interior design, focusing on clean lines and functional decor.' },
                { src: portfolio6Img2, heading: 'Bold Colors', text: 'Using colors to energize spaces with vibrant accents and striking artwork.' },
                { src: portfolio6Img3, heading: 'Mixed Materials', text: 'Combining textures for interest, from fabrics to furniture.' },
                { src: portfolio6Img4, heading: 'Family Home', text: 'Creating cozy environments for families with safe, inviting designs.' },
            ],
            contactInfo: {
                email: 'charliebrown@gmail.com',
                phone: '(555) 567-8901',
                consultationFee: '32000$',
            },
        },
        {
            id: '6',
            name: 'LUCY HARRIS',
            image: portfolio7,
            portfolioItems: [
                { src: portfolio7Img1, heading: 'Industrial Chic', text: 'Blending raw elements with modern design featuring metal fixtures and rustic textiles.' },
                { src: portfolio7Img2, heading: 'Coastal Vibes', text: 'Bringing the beach indoors with light colors and natural fibers.' },
                { src: portfolio7Img3, heading: 'Traditional Elegance', text: 'Timeless designs that never go out of style, emphasizing classic furnishings and rich fabrics.' },
                { src: portfolio7Img4, heading: 'Smart Home', text: 'Integrating technology seamlessly into design for enhanced living.' },
            ],
            contactInfo: {
                email: 'lucyharris@gmail.com',
                phone: '(555) 678-9012',
                consultationFee: '35000$',
            },
        },
        {
            id: '7',
            name: 'DAVID MARTINEZ',
            image: portfolio8,
            portfolioItems: [
                { src: portfolio8Img1, heading: 'Open Concept Living', text: 'Designing fluid and functional spaces with versatile furniture and decor.' },
                { src: portfolio8Img2, heading: 'Luxury Bathrooms', text: 'Creating spa-like retreats at home with elegant fixtures and serene textiles.' },
                { src: portfolio8Img3, heading: 'Smart Storage Solutions', text: 'Maximizing space with innovative designs, including multifunctional furniture.' },
                { src: portfolio8Img4, heading: 'Garden Oasis', text: 'Incorporating nature into interior design with greenery and outdoor elements.' },
            ],
            contactInfo: {
                email: 'davidmartinez@gmail.com',
                phone: '(555) 789-0123',
                consultationFee: '33000$',
            },
        },
        {
            id: '8',
            name: 'SOPHIA WILSON',
            image: portfolio9,
            portfolioItems: [
                { src: portfolio9Img1, heading: 'Art Deco Revival', text: 'Reviving classic design styles with luxurious fabrics and bold colors.' },
                { src: portfolio9Img2, heading: 'Fashionable Offices', text: 'Creating stylish workspaces with ergonomic furniture and chic decor.' },
                { src: portfolio9Img3, heading: 'Creative Spaces', text: 'Designing for inspiration and productivity with dynamic layouts and vibrant accents.' },
                { src: portfolio9Img4, heading: 'Vintage Charm', text: 'Incorporating antiques into modern design for a unique touch.' },
            ],
            contactInfo: {
                email: 'sophiawilson@gmail.com',
                phone: '(555) 890-1234',
                consultationFee: '34000$',
            },
        },
        {
            id: '9',
            name: 'MIA THOMPSON',
            image: portfolio10,
            portfolioItems: [
                { src: portfolio10Img1, heading: 'Culinary Spaces', text: 'Designing functional kitchens for chefs with high-quality materials and smart layouts.' },
                { src: portfolio10Img2, heading: 'Color Psychology', text: 'Using colors to influence mood with thoughtful selections of fabrics and decor.' },
                { src: portfolio10Img3, heading: 'Children’s Rooms', text: 'Fun and safe designs for kids, featuring playful decor and durable materials.' },
                { src: portfolio10Img4, heading: 'Elegant Entrances', text: 'Creating first impressions that last with inviting decor and striking furnishings.' },
            ],
            contactInfo: {
                email: 'miathompson@gmail.com',
                phone: '(555) 901-2345',
                consultationFee: '30000$',
            },
        },
        {
            id: '10',
            name: 'OLIVER MARTIN',
            image: portfolio11,
            portfolioItems: [
                { src: portfolio11Img1, heading: 'Luxury Villas', text: 'Creating lavish living experiences with exquisite decor and fine materials.' },
                { src: portfolio11Img2, heading: 'Renovation Mastery', text: 'Transforming spaces with expert design and high-quality finishes.' },
                { src: portfolio11Img3, heading: 'Outdoor Living', text: 'Bringing the indoors out with stylish furniture and vibrant landscaping.' },
                { src: portfolio11Img4, heading: 'Custom Furniture', text: 'Designing bespoke pieces for unique spaces that reflect individual style.' },
            ],
            contactInfo: {
                email: 'olivermartin@gmail.com',
                phone: '(555) 012-3456',
                consultationFee: '36000$',
            },
        },
    ];
    
    
   
    const designer = designers.find(d => d.id === id);
    return (
        <div>
            <div className={`mt-5 ${styles.aboutcon}`}>
                <h1 className= { `text-center display-4 m-3 font-bold uppercase ${styles.header}`}>
                    DESIGN <span className='text-custom-yellow'>ER </span>PORTFOLIO
                </h1>
            </div>
            <div className={`container-fluid p-1 ${styles.aboutmodel}`}>
                <div className={`r ${styles.wrapper}`}>
                    <div className={`col-md-6 col-sm-12 ${styles.imagesWrapper}`}>
                        <img src={designer.image} className={`img-fluid ${styles.portfolioImg}`} alt={`About ${designer.name}`} />
                    </div>
                    <div className={`col-md-6 col-sm-12 ${styles.textBox}`}>
                        <h3 className="fw-bold text-1xl">Hey I'm</h3>
                        <h1 className="fw-bold text-1xl">{designer.name}</h1>
                        <p className=  { ` ${styles.paragraph} `}>
                            Welcome to my interior design portfolio! I specialize in creating designs that reflect the unique personalities and lifestyles of my clients. 
                        </p>
                        <h2 className='text-[12px] font-medium uppercase'>
                            Starting from <span style={{ color: "red", fontSize: "14px" }}>{designer.contactInfo.consultationFee}</span> for basic consultations.
                        </h2>
                        <h2 className='text-custom_blue text-[15] my-2 font-bold '>
                            <i className="fa-solid fa-envelope"></i> {designer.contactInfo.email}
                        </h2>
                        <h2 className='text-1xl'>
                            <i className="fa-solid fa-phone"></i> Phone: {designer.contactInfo.phone}
                        </h2>
                    </div>
                </div>
                <div>
                    <h3 className={`text-2xl font-[600] uppercase  m-5`}>achievements</h3>
                </div>
                <div className="container-fluid">
                  
                        <div className={`row sliderImg text-center ${styles.potfolioRow}`}>
                            {designer.portfolioItems.map((item, itemIndex) => (
                                <div key={itemIndex} className={`col-md-6 col-sm-12 text-center mb-5 ${styles.card}`}>

                                        <img src={item.src} className= { ` ${styles.cardImgTop}`} alt={`Portfolio Item ${itemIndex + 1}`} />
                                  
                                    <div className="card-body p-1 ">
                                        <h5 className={`${styles.cardTitle}`}>{item.heading}</h5>
                                        <p className= {`${styles.cardText} mb-4 `} >{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
