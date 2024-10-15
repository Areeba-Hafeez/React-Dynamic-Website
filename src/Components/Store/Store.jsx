import React, { createContext, useReducer,   useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  Product71 from '../assest/kitchen.jpg'; // kitchen 
import Product72 from '../assest/room.jpg';     // Room
import Product73 from '../assest/Washroom.jpg';  // washroom
import Product74 from '../assest/Bedroom.jpg';      // Bedroom
import Product41 from '../assest/fur1.jpg';  // table
import Product42 from '../assest/furn1.jpg'  // table 
import Product43 from '../assest/furn2.jpg' // sofa 
import Product44 from '../assest/furn3.jpg' // Chair 
import Product100 from '../assest/product100.jpg' // Chair 
import Product45 from '../assest/product45.jpg' // Cushions
import Product46 from '../assest/Product46.jpg' // Storage
import Product47 from '../assest/furn7.jpg' // Cabinet 
import Product48 from '../assest/product48.jpg' // Bed
import Product49 from '../assest/product49.jpg' // Chair
import Product51 from '../assest/product51.jpg' // Table
import Product52 from '../assest/furn11.jpg' //  Table
import Product53 from '../assest/product53.jpg' // storage
import allfurn from '../assest/allfurn.jpg'
import kids from '../assest/kids.jpg';
import All from '../assest/all.jpg'
import Study from '../assest/Study.jpg';
import Product1 from '../assest/product1.jpg';
import Product2 from '../assest/product2.jpg';
import Product3 from '../assest/product3.jpg';
import Product4 from '../assest/product4.jpg';
import Product5 from '../assest/product5.jpg';
import Product6 from '../assest/product6.jpg';
import Product7 from '../assest/product7.jpg'; // bed
import Product8 from '../assest/product8.jpg'; //sofa
import Product9 from '../assest/product9.jpg'; //sofa
import Product10 from '../assest/product10.jpg'; //sofa
import Product11 from '../assest/product11.jpg';
import Product12 from '../assest/product12.jpg'; // bed
import Product13 from '../assest/product13.jpg';
import Product14 from '../assest/product14.jpg';
import Product15 from '../assest/product15.jpg'; //bed
import Product16 from '../assest/product16.jpg'; // bed
import Product17 from '../assest/product17.jpg';
import Product18 from '../assest/product18.jpg';
import Product19 from '../assest/product19.jpg';
import Product20 from '../assest/product20.jpg';
import Product21 from '../assest/product21.jpg';
import Product22 from '../assest/product22.jpg';
import Product23 from '../assest/product23.jpg';
import Product24 from '../assest/product24.jpg';
import Product25 from '../assest/product25.jpg';
import Product26 from '../assest/product26.jpg';
import Product27 from '../assest/product27.jpg';
import Product28 from '../assest/product28.jpg';
import Product29 from '../assest/product29.jpg';
import Product30 from '../assest/product30.jpg';
import Product34 from '../assest/product34.jpg';
import Product172 from  '../assest/product172.jpg' // ceiling lights 
import Product173 from  '../assest/product173.jpg' // ceiling lights 
import Product174 from  '../assest/product174.jpg' // Wall lights 
import Product175 from  '../assest/product175.jpg'  // wall lights
import Product176 from  '../assest/product176.jpg'  // wall lights
import Product177 from  '../assest/product177.jpg'  // wall lights
 import Product35 from '../assest/product35.jpg';   // Ceiling Light 
import  Product36 from '../assest/light2.jpg';  // Wall Lights 
import Product37 from '../assest/light3.jpg';  // Floor Lamps 
import Product38 from '../assest/light4.jpg';   //  Table Lights 
import Product39 from '../assest/light5.jpg';   //  Wall Lights 
import Product70 from '../assest/light6.jpg';   //    Ceiling Light
import Product61 from '../assest/decor1.jpg';    // Rugs
import Product62 from '../assest/decor3.jpg';       // Curtains
import Product63 from '../assest/decor2.jpg';    // Wall Arts
import Product64 from '../assest/decor4.jpg';    //  Cushions
import Product65 from '../assest/decor5.jpg';    // Vases
import Product66 from '../assest/decor6.jpg';    // Throws
import allLights from '../assest/allLights.jpg'    // All  Lights 
import Product81 from '../assest/kit1.jpg'; // kitchen
import Product82  from '../assest/kit2.jpg';   // kitchen
import Product83  from '../assest/bed1.jpg';   // Bed
import Product84  from '../assest/bed2.jpg';   // Bed
import Product50  from '../assest/contact.jpg';   //  Sofa
import Product85  from '../assest/bath1.jpg';    // Bathroom
import Product86  from '../assest/bath2.jpg';     // Bathroom
import Product87  from '../assest/live1.jpg';     // Living room
import Product88  from '../assest/live2.jpg';   // Living room
import Product55  from '../assest/Product55.jpg'; // Bed
 import Product58 from '../assest/product58.jpg' // Bed
 import Product59 from '../assest/product59.jpg' // Storage
import Product67  from '../assest/product67.jpg'; // Storage
import Product91  from '../assest/product91.jpg'; // rugs
import Product92  from '../assest/product92.jpg'; // rugs 
import Product171 from  '../assest/product171.jpg'
// import Product93  from '../assest/product93.jpg'; // rugs
import Product94  from '../assest/product94.jpg'; // rugs
import Product95  from '../assest/product95.jpg'; // rugs
import Product97  from '../assest/product97.jpg'; // rugs
import Product101  from '../assest/product101.jpg'; // Curtains
import Product102  from '../assest/product102.jpg'; // Curtains
import Product103  from '../assest/product103.jpg'; // Curtains
import Product104  from '../assest/product104.jpg'; // Curtains
import Product105  from '../assest/product105.jpg'; // Curtains
import Product106  from '../assest/product106.jpg'; // Curtains
import Product107  from '../assest/product107.jpg'; // Curtains
import Product108  from '../assest/product108.jpg'; // Curtains
import Product109  from '../assest/product109.jpg'; // Cushions
import Product110  from '../assest/product110.jpg'; // Cushion
import Product111  from '../assest/product111.jpg'; // Cushion
import Product112  from '../assest/product112.jpg'; // Cushion
import Product113  from '../assest/product113.jpg'; // Cushion
import Product114  from '../assest/product114.jpg'; // Cushion
import Product115  from '../assest/product115.jpg'; // Vases
import Product116   from '../assest/product116.jpg'; // Vases
import Product117   from '../assest/product117.jpg'; // Vases
import Product118   from '../assest/product118.jpg'; // Vases
import Product119   from '../assest/product119.jpg'; // Vases
import Product120   from '../assest/product120.jpg'; //  Wall Arts
import Product121   from '../assest/product121.jpg'; //  Wall Arts
import Product122   from '../assest/product122.jpg'; //  Wall Arts
import Product123   from '../assest/product123.jpg'; //  Wall Arts
import Product124   from '../assest/product124.jpg'; //  Wall Arts
import Product125   from '../assest/product125.jpg'; //  Wall Arts
import Product126   from '../assest/product126.jpg'; //  Wall Arts
import Product127   from '../assest/product127.jpg'; //  Wall Arts
import Product128   from '../assest/product128.jpg'; //  Wall Arts
import Product130   from '../assest/product130.jpg'; //  Wall Arts
import Product131   from '../assest/product131.jpg'; //  Wall Arts
import Product132   from '../assest/product132.jpg'; //  Wall Arts
import Product133   from '../assest/product133.jpg'; //  Wall Arts
import Product134   from '../assest/product134.jpg'; //  Wall Arts
import Product135   from '../assest/product135.jpg'; //  rugs
import Product136   from '../assest/product136.jpg'; //  rugs
import Product137   from '../assest/product137.jpg'; //  Wall Arts
import Product138   from '../assest/product138.jpg'; //  Wall Arts
import Product139   from '../assest/product139.jpg'; //  Wall Arts
import Product140   from '../assest/product140.jpg'; //  Wall Arts
import Product141  from '../assest/product141.jpg'; //  Wall Arts
import Product148  from '../assest/product148.jpg'; //  Wall Arts
import Product152  from '../assest/product152.jpg'; //  Wall Arts
import Product153  from '../assest/product153.jpg'; //  Wall Arts
import Product154  from '../assest/product154.jpg'; //  Wall Arts
import Product155  from '../assest/product155.jpg'; //  Wall Arts
import Product147   from '../assest/product147.jpg'; //  rugs
import Product142   from '../assest/product142.jpg'; //  rugs
import Product143   from '../assest/product143.jpg'; //  rugs
import Product144   from '../assest/product144.jpg'; //  rugs
import Product145   from '../assest/product145.jpg'; //  rugs
import Product161   from '../assest/product161.jpg'; //  Vases
import Product162   from '../assest/product162.jpg'; //  Vases
import Product163   from '../assest/product163.jpg'; //  Vases
import Product164   from '../assest/product164.jpg'; //  Vases
import Product165   from '../assest/product165.jpg'; //  Vases
import Product167   from '../assest/product167.jpg'; // Vases
import Product180   from '../assest/product180.jpg'; // Outdoor Lights
import Product181   from '../assest/product181.jpg'; // Out door Light 
import Product182   from '../assest/product182.jpg'; // Out door Light 
import Product183   from '../assest/product183.jpg'; // Out door Light 
import Product178   from '../assest/product178.jpg'; // Chair
import Product179   from '../assest/product179.jpg'; // storage
import light1 from '../assest/light1.jpg'; 
import light2 from '../assest/light2.jpg';
import light3 from '../assest/light3.jpg';
import light4 from '../assest/light4.jpg';
import light5 from '../assest/light5.jpg';
import light6 from '../assest/light6.jpg';

 // Loghting Items 
 const lightingItems = [
  { id: 0, img: light1, category: 'Outdoor', price: 4000, rating: '50000k' },
  { id: 1, img: light2, category: 'Wall', price: 4000, rating: '60000k' },
  { id: 2, img: light3, category: ' Outdoor', price: 4000, rating: '50000k' },
  { id: 3, img: light4, category: ' Lamps', price: 34000, rating: '90000k' },
  { id: 4, img: light5, category: 'Wall', price: 46000, rating: '50000k' },
  { id: 5, img: light6, category: 'Ceiling', price: 47000, rating: '40000k' },
  { id: 6, img: Product171, category: 'Ceiling', price: 89000, rating: '780000k' },
  { id: 7, img: Product172, category: 'Ceiling', price: 99000, rating: '480000k' },
  { id: 8, img: Product173, category: 'Ceiling' , price: 54000, rating: '2890000k' },
  { id: 9, img: Product174, category: 'Wall', price: 34000, rating: '2320000k' },
  { id: 10, img: Product175, category: 'Wall', price: 14000, rating: '210000k' },
  { id: 11, img: Product176, category: 'Lamps', price: 18000, rating: '890000k' },
  { id: 12, img: Product177, category: 'Lamps', price: 19000, rating: '900000k' },
  { id: 13, img: Product180, category: 'Outdoor', price: 65000, rating: '800000k' },
  { id: 14, img: Product181, category: 'Outdoor', price: 25000, rating: '700000k' },
  { id: 15, img: Product182, category: 'Lamps', price: 25000, rating: '18000k' },
  { id: 16, img: Product183, category: 'Outdoor', price: 150000, rating: '900000k' },
];

//  furniture Items 
const furnitureItems = [
  { id: '1110', img: Product41 , category: 'Table', type :'table',  price: 3000, rating: '200k' },
  { id: '1111', img: Product42 , category: 'Table', price: 4000, rating: '300k' },
  { id: '11129', img: Product51 , category: 'Table', price: 89000, rating: '98000k' },
  { id: '1112', img: Product50, category: 'Sofa', price: 130000, rating: '9003500k' },
  { id: '11113', img: Product155, category: 'Sofa', price: 4500, rating: '350k' },
  { id: '11114', img: Product8, category: 'Sofa', price: 8500, rating: '6750k' },
  { id: '11115', img: Product9, category: 'Sofa', price: 55000, rating: '90750k' },
  { id: '111124', img: Product25, category: 'Sofa', price: 95000, rating: '70950k' },
  { id: '111125', img: Product30, category: 'Sofa', price: 85000, rating: '54050k' },
  { id: '111130', img: Product55, category: 'Bed', price: 250000, rating: '876050k' },
  // { id: '111132', img: Product60, category: 'Storage', price: 450000, rating: '4576050k' },
  { id: '111126', img: Product34, category: 'Bed', price: 95000, rating: '74050k' },
  { id: '11116', img: Product10, category: 'Sofa', price: 95000, rating: '47750k' },
  { id: '11117', img: Product12, category: 'Bed', price: 155000, rating: '27750k' },
  { id: '11121', img: Product5, category: 'Bed', price: 255000, rating: '47750k' },
  { id: '11118', img: Product15, category: 'Bed', price: 100000, rating: '87750k' },
  { id: '11123', img: Product29, category: 'Bed', price: 250000, rating: '97750k' },
  { id: '11122', img: Product18, category: 'Bed', price: 500000, rating: '97750k' },
  { id: '11120', img: Product7, category: 'Bed', price: 300000, rating: '10750k' },
  { id: '11119', img: Product16, category: 'Bed', price: 500000, rating: '97750k' },
  { id: '11131', img: Product178, category: 'Chair', price: 500000, rating: '67750k' },
  { id: '11130', img: Product179, category: 'Storage', price: 500000, rating: '95750k' },
  { id: 3, img: Product44, category: 'Chair', price: 8000, rating: '500k' },
  { id: 4, img: Product46 , category: 'Storage', price: 4000, rating: '300k' },
  { id: 5, img: Product43 , category: 'Sofa', price: 4500, rating: '250k' },
  { id: 6, img: Product48 , category: 'Bed', price: 4500, rating: '250k' },
  { id: 7, img:  Product47 , category: 'Cabinet', price: 5500, rating: '350k' },
  { id: 8, img: Product52 , category: 'Table', price: 93000, rating: '200k' },
  { id: 9, img: Product49 ,  category: 'Chair', price: 2500, rating: '150k' },
  { id: 10, img:Product100 , category: 'Chair', price: 90500, rating: '467880k' },
  { id: 11, img: Product58  , category: 'Bed', price: 4500, rating: '87000k' },
  { id: 12, img: Product59  , category: 'Storage', price: 9000, rating: '39000k' },
  { id: 13, img: Product67   , category: 'Storage', price: 7500, rating: '9000k' }, 
];
//  decoration  Items 
const decorationItems = [
  { id: "0001", category: 'Rugs', img: Product61, price: '3000 PKR', rating: '300k' },
  { id: "0002", category: 'Wall' || 'Wall Arts', img: Product63, price: '1500 PKR', rating: '250k' },
  { id: "0003", category: 'Sofa', img: Product66, price: '4000 PKR', rating: '500k' },
  { id: "0004", category: 'Curtains', img: Product62, price: '800 PKR', rating: '150k' },
  { id: "0005", category:  'Cushions'|| 'pillows', img: Product64, price: '1200 PKR', rating: '200k' },
  { id: "0006", category: 'Vases', img: Product65, price: '900 PKR', rating: '180k' },
  { id: "0007", img: Product91, category: 'Rugs', price: '49800 PKR', rating: '10000k' },
  { id: "0008", img: Product92, category: 'Rugs', price: '68000 PKR', rating: '90000k' },
  // { id: "0009", img: Product93, category: 'Rugs', price: '89000 PKR', rating: '79000k' },
  { id: "0010", img: Product94, category: 'Rugs', price: '8000 PKR', rating: '49500k' },
  { id: "0011", img: Product95, category: 'Rugs', price: '98000 PKR', rating: '68000k' },
  { id: "0012", img: Product97, category: 'Rugs', price: '99000 PKR', rating: '58000k' },
  { id: "0013", img: Product101, category: 'Curtains' , price: '5000 PKR', rating: '58000k' },
  { id: "0014", img: Product102, category: 'Curtains', price: '28000 PKR', rating: '58000k' },
  { id: "0015", img: Product103, category: 'Curtains', price: '28000 PKR', rating: '44000k' },
  { id: "0016", img: Product104, category: 'Curtains', price: '89000 PKR', rating: '24000k' },
  { id: "0017", img: Product105, category: 'Curtains', price: '68000 PKR', rating: '84000k' },
  { id: "0018", img: Product106, category: 'Curtains', price: '5000 PKR', rating: '34000k' },
  { id: "0019", img: Product107, category:  'Cushions'|| 'pillows',  price: '6000 PKR', rating: '44000k' },
  { id: "0020", img: Product108, category: 'Curtains', price: '8200 PKR', rating: '19000k' },
  { id: "0021", img: Product109, category:  'Cushions'|| 'pillows', price: '8700 PKR', rating: '54000k' },
  { id: "0022", img: Product110, category:  'Cushions'|| 'pillows', price: '10000 PKR', rating: '23000k' },
  { id: "0023", img: Product111, category:  'Cushions'|| 'pillows', price: '88000 PKR', rating: '22000k' },
  { id: "0024", img: Product112, category:  'Cushions'|| 'pillows', price: '91000 PKR', rating: '14000k' },
  { id: "0025", img: Product113, category:  'Cushions'|| 'pillows', price: '19000 PKR', rating: '74000k' },
  { id: "0077", img: Product114, category:  'Cushions'|| 'pillows', price: '12000 PKR', rating: '34000k' },
  { id: "0071", img: Product152, category:  'Cushions'|| 'pillows', price: '17000 PKR', rating: '24000k' },
  { id: "0072", img: Product153, category:  'Cushions'|| 'pillows', price: '16000 PKR', rating: '328000k' },
  { id: "0073", img: Product155, category:  'Cushions'|| 'pillows', price: '76000 PKR', rating: '758000k' },
  { id: "0074", img: Product154, category:  'Cushions'|| 'pillows', price: '29000 PKR', rating: '94000k' },
  { id: "0027", img: Product115, category: 'Vases', price: '29000 PKR', rating: '94000k' },
  { id: "0028", img: Product116, category: 'Vases', price: '59000 PKR', rating: '36000k' },
  { id: "0029", img: Product117, category: 'Vases', price: '39000 PKR', rating: '86000k' },
  { id: "0030", img: Product118, category: 'Vases', price: '59000 PKR', rating: '56000k' },
  { id: "0031", img: Product120, category: 'Wall' || 'Wall Arts', price: '55000 PKR', rating: '76000k' },
  { id: "0032", img: Product121, category: 'Wall' || 'Wall Arts', price: '65000 PKR', rating: '86000k' },
  { id: "0033", img: Product122, category: 'Wall' || 'Wall Arts', price: '85000 PKR', rating: '96000k' },
  { id: "0034", img: Product123, category: 'Wall' || 'Wall Arts', price: '83000 PKR', rating: '66000k' },
  { id: "0035", img: Product124, category: 'Wall' || 'Wall Arts', price: '35000 PKR', rating: '56000k' },
  { id: "0036", img: Product125, category: 'Wall' || 'Wall Arts', price: '52000 PKR', rating: '36000k' },
  { id: "0037", img: Product126, category: 'Wall' || 'Wall Arts', price: '62000 PKR', rating: '36000k' },
  { id: "0038", img: Product127, category: 'Wall' || 'Wall Arts', price: '63000 PKR', rating: '76000k' },
  { id: "0039", img: Product128, category: 'Wall' || 'Wall Arts', price: '43000 PKR', rating: '36000k' },
  { id: "0040", img: Product130, category: 'Wall' || 'Wall Arts', price: '32000 PKR', rating: '66000k' },
  { id: "0041", img: Product131, category: 'Wall' || 'Wall Arts', price: '12000 PKR', rating: '46000k' },
  { id: "0042", img: Product132, category: 'Wall' || 'Wall Arts', price: '32000 PKR', rating: '27000k' },
  { id: "0043", img: Product133, category: 'Wall' || 'Wall Arts', price: '62000 PKR', rating: '34000k' },
  { id: "0044", img: Product134, category: 'Wall' || 'Wall Arts', price: '32000 PKR', rating: '22000k' },
  { id: "0045", img: Product137, category: 'Wall' || 'Wall Arts', price: '92000 PKR', rating: '82000k' },
  { id: "0046", img: Product138, category: 'Wall' || 'Wall Arts', price: '25000 PKR', rating: '74000k' },
  { id: "0047", img: Product139, category: 'Wall' || 'Wall Arts', price: '8000 PKR', rating: '86000k' },
  { id: "0048", img: Product140, category: 'Curtains', price: '10000 PKR', rating: '56000k' },
  { id: "0049", img: Product136, category: 'Rugs', price: '32000 PKR', rating: '62000k' },
  { id: "0050", img: Product135, category: 'Rugs', price: '42000 PKR', rating: '92000k' },
  { id: "0051", img: Product141, category: 'Curtains', price: '18000 PKR', rating: '36000k' },
  { id: "0052", img: Product142, category: 'Wall' || 'Wall Arts' || 'Wall Arts', price: '12000 PKR', rating: '26000k' },
  { id: "0053", img: Product143, category: 'Rugs', price: '15000 PKR', rating: '16000k' },
  { id: "0054", img: Product144, category: 'Rugs', price: '19000 PKR', rating: '56000k' },
  { id: "0055", img: Product145, category: 'Rugs', price: '28000 PKR', rating: '76000k' },
  { id: "0056", img: Product161, category: 'Vases', price: '70000 PKR', rating: '96000k' },
  { id: "0060", img: Product162, category: 'Vases', price: '40000 PKR', rating: '26000k' },
  { id: "0061", img: Product163, category: 'Vases', price: '20000 PKR', rating: '16000k' },
  { id: "0063", img: Product164, category: 'Vases', price: '14000 PKR', rating: '17000k' },
  { id: "0064", img: Product165, category: 'Vases', price: '11000 PKR', rating: '19000k' },
  { id: "0062", img: Product167, category: 'Vases', price: '10000 PKR', rating: '26000k' },
  { id: "0057", img: Product147, category: 'Rugs', price: '97000 PKR', rating: '96000k' },
  { id: "0058", img: Product148, category: 'Curtains', price: '24000 PKR', rating: '46000k' },
  { id: "0059", img: Product119, category: 'Vases', price: '59000 PKR', rating: '56000k' },
];
//  Designer Items 
const designerItems = [
  { id: '0', img: Product81, category: 'Kitchen' ,  price: '1,00000' ,  name: "John Dalton", description: 'Modern kitchen design.' },
  { id: '1', img: Product82, category: 'Kitchen',  price: '5, 00000' ,  name: "Jane Smith", description: 'Stylish kitchen interior.' },
  { id: '2', img: Product83, category: 'Bedroom',  price: '1,00000', name: "Alice Johnson", description: 'Cozy bedroom setup.' },
  { id: '3', img: Product84, category: 'Bedroom',  price: '3,00000',  name: "Bob Williams", description: 'Elegant bedroom design.' },
  { id: '4', img: Product85, category: 'Washroom' || 'Wash room',  price: '2 ,00000',  name: "Emily Davis", description: 'Luxurious bathroom features.' },
  { id: '5', img: Product86, category: 'Washroom' || 'Wash room',  price: '4,00000', name: "Michael Brown", description: 'Contemporary bathroom style.' },
  { id: '6', img: Product87, category: 'Livingroom' || 'living room', price: '120000',  name: "Chris Evans", description: 'Spacious living room layout.' },
  { id: '7', img: Product88, category: 'Livingroom' || 'living room',  price: '1,00000',  name: "Sarah Connor", description: 'Inviting living room ambiance.' },
  { id: '8', img: Product3, category: 'Washroom' || 'Wash room',  price: '2, 00000' ,  name: "David Jones", description: 'Elegant washroom features.' },
  { id: '9', img: Product4, category: 'Washroom' || 'Wash room',  price: '2, 00000' , name: "Sophia Lee", description: 'Stylish washroom design.' },
  { id: '10', img: Product2, category: 'Kitchen',  price: '1 ,00000' ,  name: "Liam Smith", description: 'Modern kitchen setup.' },
];
//  furniture categories data 
const furnitureCategories = [
    { id: 1, furnitureImg: Product42, category: 'Table' , },
    { id: 3, furnitureImg: Product43, category: 'Sofa' },
    { id: 4, furnitureImg: Product5, category: 'Bed' },
    { id: 5, furnitureImg: Product44 , category: 'Chair' },
    { id: 6, furnitureImg: Product53, category: 'Storage' },
    { id: 7, furnitureImg: allfurn , category: 'All' }
];
//  Lighting categories data 
const LightingCategories = [
    { id: 1, light: Product35, category: 'Ceiling' },
    { id: 2, light: Product36, category: 'Wall' || 'Wall Arts' },
    { id: 3, light: Product37, category: 'Lamps' },
    { id: 5, light: Product38, category: 'Outdoor' },
    { id: 6, light: allLights, category: 'All' },
];
//  Decoration Categories data 
const DecorationCategories = [
    { id: 1, decor: Product61, category: 'Rugs' },
    { id: 2, decor: Product62, category: 'Curtains' },
    { id: 3, decor: Product63, category: 'Wall' || 'Wall Arts' },
    { id: 4, decor: Product64, category:  'Cushions'|| 'pillows' },
    { id: 5, decor: Product65, category: 'Vases' },
    { id: 6, decor: Product66, category: 'All' },
];
// Designer Categroies 
const designerCategories = [
    { id: 1, src: Product71 , alt: 'Image 1', heading: 'Kitchen' },
    { id: 2, src: Product72 , alt: 'Image 2', heading: 'Livingroom' },
    { id: 3, src: Product73 , alt: 'Image 3', heading: 'Washroom' },
    { id: 4, src: Product74 , alt: 'Image 4', heading: 'Bedroom' },
    { id: 5, src: All , alt: 'Image 5', heading: 'All' },
]
// products 
const productImg = [
  { id: 1, price: "5000PKR", category: "Furniture", img: Product22, rating: "2K" },
  { id: 2, price: "3000PKR", category: "Furniture", img: Product15, rating: "4K" },
  { id: 3, price: "4000PKR", category: "Furniture", img: Product6, rating: "3K" },
  { id: 4, price: "6000PKR", category: "Livingroom", img: Product12, rating: "4.5K" },
  { id: 5, price: "3500PKR", category: "Livingroom", img: Product25, rating: "5K" },
  { id: 6, price: "2000PKR", category: "Lighting", img: Product23, rating: "3K" },
  { id: 7, price: "3500PKR", category: "Lighting", img: Product14, rating: "2.5K" }
]
const wishlistReducer = (state, action) => {
    switch (action.type) {
    case 'Add':
     return [...state, { ...action.payLoad }];   
    case 'Delete':
     return state.filter(item => item.id !== action.payLoad.id);
    default:
      return state; }};
export const ContextApp = createContext({
  designerItems,
    productImg,
    addToWishlist: () => {},
    removeFromWishlist: () => {},
    furnitureCategories,
    DecorationCategories,
    LightingCategories,
    designerItems,
    furnitureItems,
    decorationItems ,
  
});

const Store = ({children}) => {
  var navigate =  useNavigate()
  const handleSearch = (e) => {
             e.preventDefault()  
                   
              navigate(`/Search/${search}`)
              setSearch('')
  }
  
  const [wishlistItem, setWishlistItem] = useState([]);
  
  const [search , setSearch] = useState('')
  const [wishlist, dispatch] = useReducer(wishlistReducer, []);
    const addToWishlist = (item) => {
       if (!wishlist.some(existingItem => existingItem.id === item.id)) {
          dispatch({
            type : 'Add',
            payLoad : item });
           return dispatch
          }
    };
     const removeFromWishlist = (itemId) => {
          dispatch({
            type  : "Delete",
            payLoad : {
              id : itemId,
            }
        });
    };
return (
        <ContextApp.Provider value={{
          designerCategories,
            productImg,
            wishlistItem,
            addToWishlist,
            handleSearch,
            wishlist,
            removeFromWishlist,
            furnitureCategories,
            DecorationCategories,
            LightingCategories,
            designerItems,
            furnitureItems,
            decorationItems ,
            setWishlistItem,
            search,
            setSearch,
            lightingItems
           
          
        }}>
            {children}
        </ContextApp.Provider>
    );
};

export default Store;