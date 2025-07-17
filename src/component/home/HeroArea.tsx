// // "use client";
// // import React from "react";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import Image from "next/image";
// // import Link from "next/link";

// // const HeroArea = () => {
// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 3000,
// //     arrows: false,  
// //     pauseOnHover: true,
// //   };

// //   const slides = [
// //     { id: 1, image: "/home/furniture_one_1.png" },
// //     { id: 2, image: "/home/furniture_one_2.png" },
// //   ];

// //   return (
// //     <div className="hero-area w-full relative overflow-hidden mt-5 md:mt-0">
// //       <Slider {...settings}>
// //         {slides.map((slide) => (
// //           <div key={slide.id} className="relative w-full h-[20vh] md:h-[50vh] lg:h-[60vh]">
// //             <Link href="/product">
// //               <Image
// //                 src={slide.image}
// //                 alt="Furniture"
// //                 layout="fill"
// //                 objectFit="containt"
// //                 className="w-full h-full"
// //               />
// //             </Link>
// //           </div>
// //         ))}
// //       </Slider>
// //     </div>
// //   );
// // };

// // export default HeroArea;




// "use client";

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
// import Link from "next/link";

// const HeroArea = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     pauseOnHover: true,
//   };

//   const slides = [
//     { id: 1, image: "/home/furniture_one_1.png" },
//     { id: 2, image: "/home/furniture_one_2.png" },
//   ];

//   return (
//     <div className="hero-area w-full relative overflow-hidden mt-5 md:mt-0">
//       <Slider {...settings}>
//         {slides.map((slide) => (
//           <div
//             key={slide.id}
//             className="relative w-full h-[20vh] md:h-[50vh] lg:h-[60vh]"
//           >
//             <Link href="/product">
//               <Image
//                 src={slide.image}
//                 alt="Furniture"
//                 fill
//                 style={{ objectFit: "contain" }}
//                 className="w-full h-full"
//               />
//             </Link>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default HeroArea;
