import Color from '../models/domain/color.model';
import { Category } from '../models/domain/category.model';
// export const data = [
//   new Color(
//     '1',
//     'Azul',
//     'blue',
//     new Category('Tech'),
//     '#0000FF',
//     'Representa tecnología, confianza y estabilidad.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '2',
//     'Rojo',
//     'red',
//     new Category('Pasión'),
//     '#FF0000',
//     'Simboliza energía, pasión y amor.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '3',
//     'Verde',
//     'green',
//     new Category('Naturaleza'),
//     '#008000',
//     'Evoca naturaleza, frescura y crecimiento.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '4',
//     'Amarillo',
//     'yellow',
//     new Category('Alegría'),
//     '#FFFF00',
//     'Refleja felicidad, optimismo y creatividad.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '5',
//     'Naranja',
//     'orange',
//     new Category('Energía'),
//     '#FFA500',
//     'Simboliza entusiasmo, determinación y éxito.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '6',
//     'Morado',
//     'purple',
//     new Category('Lujo'),
//     '#800080',
//     'Asociado a la realeza, creatividad y sabiduría.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '7',
//     'Rosa',
//     'pink',
//     new Category('Romance'),
//     '#FFC0CB',
//     'Representa dulzura, amor y ternura.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '8',
//     'Negro',
//     'black',
//     new Category('Elegancia'),
//     '#000000',
//     'Asociado a la sofisticación, poder y misterio.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '9',
//     'Blanco',
//     'white',
//     new Category('Paz'),
//     '#FFFFFF',
//     'Simboliza pureza, paz y limpieza.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '10',
//     'Gris',
//     'gray',
//     new Category('Neutralidad'),
//     '#808080',
//     'Denota equilibrio, sobriedad y modernidad.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '11',
//     'Turquesa',
//     'turquoise',
//     new Category('Relajación'),
//     '#40E0D0',
//     'Inspiración, tranquilidad y frescura.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '12',
//     'Cian',
//     'cyan',
//     new Category('Innovación'),
//     '#00FFFF',
//     'Refleja creatividad, modernidad y dinamismo.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '13',
//     'Magenta',
//     'magenta',
//     new Category('Expresión'),
//     '#FF00FF',
//     'Simbología de originalidad y expresividad.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '14',
//     'Beige',
//     'beige',
//     new Category('Calidez'),
//     '#F5F5DC',
//     'Evoca tranquilidad, simplicidad y calma.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '15',
//     'Dorado',
//     'gold',
//     new Category('Riqueza'),
//     '#FFD700',
//     'Representa éxito, riqueza y prestigio.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '16',
//     'Plata',
//     'silver',
//     new Category('Futuro'),
//     '#C0C0C0',
//     'Asociado a la tecnología, innovación y modernidad.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '17',
//     'Marrón',
//     'brown',
//     new Category('Tierra'),
//     '#A52A2A',
//     'Refleja estabilidad, solidez y naturaleza.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '18',
//     'Lavanda',
//     'lavender',
//     new Category('Serenidad'),
//     '#E6E6FA',
//     'Evoca calma, espiritualidad y equilibrio.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '19',
//     'Coral',
//     'coral',
//     new Category('Vitalidad'),
//     '#FF7F50',
//     'Simbología de energía, calidez y entusiasmo.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '20',
//     'Azul Marino',
//     'navy',
//     new Category('Profesionalismo'),
//     '#000080',
//     'Representa seriedad, profesionalismo y confianza.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '21',
//     'Verde Oliva',
//     'olive',
//     new Category('Sabiduría'),
//     '#808000',
//     'Asociado a la naturaleza, tradición y equilibrio.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '22',
//     'Rojo Vino',
//     'burgundy',
//     new Category('Elegancia'),
//     '#800020',
//     'Evoca sofisticación, pasión y distinción.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '23',
//     'Mostaza',
//     'mustard',
//     new Category('Creatividad'),
//     '#FFDB58',
//     'Asociado a la calidez, energía y originalidad.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '24',
//     'Verde Esmeralda',
//     'emerald',
//     new Category('Riqueza'),
//     '#50C878',
//     'Simboliza frescura, armonía y lujo.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '25',
//     'Fucsia',
//     'fuchsia',
//     new Category('Atrevimiento'),
//     '#FF00FF',
//     'Expresa diversión, dinamismo y confianza.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
//   new Color(
//     '26',
//     'Azul Celeste',
//     'skyblue',
//     new Category('Tranquilidad'),
//     '#87CEEB',
//     'Representa calma, claridad y libertad.',
//     2,
//     2,
//     '2025-03-03',
//     '2025-03-03'
//   ),
// ];


// menu items
// menuItems: Object[] = [
//     {
//       favorites: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fffafa" fill="none">
//     <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
// </svg>`,
//     },
//     {
//       archive: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fffafa" fill="none">
//     <path d="M21 7H3V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//     <path d="M21 7H3L4.2 5.4C5.08328 4.22229 5.52492 3.63344 6.15836 3.31672C6.7918 3 7.52786 3 9 3H15C16.4721 3 17.2082 3 17.8416 3.31672C18.4751 3.63344 18.9167 4.22229 19.8 5.4L21 7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//     <path d="M12 17L12 10.5M9 14.5C9.58984 15.1068 11.1597 17.5 12 17.5C12.8403 17.5 14.4102 15.1068 15 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
// </svg>`,
//     },
//     {
//       disable: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fffafa" fill="none">
//     <path d="M5.25 5L19.25 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//     <path d="M22.25 12C22.25 6.47715 17.7728 2 12.25 2C6.72715 2 2.25 6.47715 2.25 12C2.25 17.5228 6.72715 22 12.25 22C17.7728 22 22.25 17.5228 22.25 12Z" stroke="currentColor" stroke-width="1.5" />
// </svg>`,
//     },
//     {
//       unlike: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fffafa" fill="none">
//     <path d="M12 21C10.6588 21 9.88572 20.4278 8.33953 19.2834C0.221721 13.2749 1.01807 6.15294 4.53744 3.99415C7.21909 2.34923 9.55962 3.01211 10.9656 4.06801C11.5422 4.50096 11.8304 4.71743 12 4.71743C12.1696 4.71743 12.4578 4.50096 13.0344 4.06801C14.4404 3.01211 16.7809 2.34923 19.4626 3.99415C21.1812 5.04838 22.2505 7.28623 21.9494 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
//     <path d="M16 14L19 17M19 17L22 20M19 17L22 14M19 17L16 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
// </svg>`,
//     },
//     {
//       changed: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fffafa" fill="none">
//     <path d="M16.9767 19.5C19.4017 17.8876 21 15.1305 21 12C21 7.02944 16.9706 3 12 3C11.3126 3 10.6432 3.07706 10 3.22302M16.9767 19.5V16M16.9767 19.5H20.5M7 4.51555C4.58803 6.13007 3 8.87958 3 12C3 16.9706 7.02944 21 12 21C12.6874 21 13.3568 20.9229 14 20.777M7 4.51555V8M7 4.51555H3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
// </svg>`,
//     },
//     {
//       delete: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="tomato" fill="none">
//     <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
//     <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
//     <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
//     <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
// </svg>`,
//     },
//   ];
