import {
  Footer,
  Header,
  CtaGallery,
  MasonryGallery,
  CallToAction,
  ContentOne,
  ContentTwo,
  ContentThree,
  Faq,
  Alert,
  MarqueeText,
  MarqueeReview,
  LoadingScreen,
  CallToActionImage,
  LeafletMap,
  CookieBanner,
  Navbar,
  TertiaryHeading,
  ContentFour,
  Tab,
  SecondaryHeading,
  ContentFive,
} from "@/components/index";
import { useSignInModal } from "../components/layout/sign-in-modal";
import { useState, Suspense } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const headerProps = {
  id: "1",
  title: "Herzlich Willkommen zum Café Kloster",
  caption:
    "Von Kuchen bis Kaffee und Warme Küche, wir freuen uns auf ihren Besuch und halten viele klösterliche Köstlichkeiten für sie bereit",
  cta: {
    main: { title: "Reservieren", link: "/reservieren" },
    secondary: { title: "Speisekarte", link: "/speisekarte" },
  },
  images: [
    { id: "1", src: "/header-image.jpg", alt: "coffe image" },
    { id: "2", src: "/header-image.jpg", alt: "coffe image" },
  ],
};

const CtaGalleryProps = {
  id: "1",
  title: "Unsere meistgeliebten Kaffee´s",
  caption:
    "Dein Kaffee ist unsere Priorität. Wir hoffen auf exzellenten Geschmack.",
  cta_link: "/kaffee",
  cta_title: "Leckerer Kaffee",
  slides: [
    {
      id: "1",
      src: "/header-image.jpg",
      alt: "test",
      date: new Date(),
      title: "Coffee Eventssss",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quasi nihil, error placeat perspiciatis quos dolorum officiis maxime consequatur amet ullam atque velit modi quia corrupti numquam facere totam possimus in eum eaque reprehenderit fugit quibusdam id. Obcaecati provident quam quidem aliquam earum iure beatae aspernatur id adipisci at maxime officia molestiae ut mollitia ea accusantium blanditiis magni nobis perspiciatis vero sed dolores, sint odio? Obcaecati, dolore similique mollitia tenetur omnis aut perspiciatis ex saepe nesciunt nulla laudantium voluptates expedita, impedit, eligendi velit perferendis earum eos nam ipsam quis ratione necessitatibus assumenda! Officia vero, provident tempora consequuntur dolores voluptatibus magni minima nulla voluptatum ut delectus voluptatem, eligendi ad sapiente obcaecati aut pariatur ullam ducimus, iusto corrupti velit laudantium distinctio? Consectetur corporis voluptate nam quae, quas dolor praesentium aspernatur temporibus aliquam maiores ipsum quia, architecto nesciunt placeat magni voluptates minus? Eos, maiores ipsum nihil laboriosam minima beatae laborum consequuntur fuga culpa doloremque harum maxime ducimus minus architecto quasi quo explicabo quae cupiditate incidunt distinctio. Voluptas sed reiciendis ducimus quis tenetur, nam aut quod reprehenderit adipisci animi inventore at ullam possimus velit commodi odio doloribus quam beatae quos incidunt non officiis corporis. Id, quae! Rerum dignissimos, ut, aspernatur, deleniti enim mollitia placeat officia cum aut repudiandae incidunt nostrum animi consequuntur hic recusandae earum sit error maxime qui culpa pariatur nobis impedit a soluta? Facere delectus dolor consequuntur. Soluta, numquam eos ipsa quaerat ut est, exercitationem repellat explicabo maiores animi illo voluptate eaque quo autem magnam ea eius corporis voluptatum, expedita ratione dolorem.",
    },
    {
      id: "2",
      src: "/header-image.jpg",
      alt: "test",
      date: new Date(),
      title: "Vegan Milk",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel modi, rem accusamus eligendi numquam error.",
    },
    {
      id: "3",
      src: "/header-image.jpg",
      alt: "test",
      date: new Date(),
      title: "Amaretto Cino",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel modi, rem accusamus eligendi numquam error.",
    },
  ],
};

const MasonryGalleryProps = {
  title: "Bilder die schmecken",
  caption: "Gerichte die geknipst sind",
  images: [
    {
      id: "1",
      alt: "test",
      src: "/content_one-1.jpg",
      caption: "A Big Test Yoooo",
    },
    {
      id: "1",
      alt: "test",
      src: "/content_one-2.jpg",
      caption: "A Big Test Yoooo",
    },
    {
      id: "1",
      alt: "test",
      src: "/content_one-3.jpg",
      caption: "A Big Test Yoooo",
    },
    {
      id: "1",
      alt: "test",
      src: "/content_one-1.jpg",
      caption: "A Big Test Yoooo",
    },
    {
      id: "1",
      alt: "test",
      src: "/content_one-5.jpg",
      caption: "A Big Test Yoooo",
    },
    {
      id: "1",
      alt: "test",
      src: "/content_one-4.jpg",
      caption: "A Big Test Yoooo",
    },
    {
      id: "1",
      alt: "test",
      src: "/content_one-3.jpg",
      caption: "A Big Test Yoooo",
    },
    {
      id: "1",
      alt: "test",
      src: "/content_one-1.jpg",
      caption: "A Big Test Yoooo",
    },
    {
      id: "1",
      alt: "test",
      src: "/content_one-3.jpg",
      caption: "A Big Test Yoooo",
    },
    {
      id: "1",
      alt: "test",
      src: "/content_one-1.jpg",
      caption: "A Big Test Yoooo",
    },
    {
      id: "1",
      alt: "test",
      src: "/content_one-5.jpg",
      caption: "A Big Test Yoooo",
    },
    {
      id: "1",
      alt: "test",
      src: "/content_one-4.jpg",
      caption: "A Big Test Yoooo",
    },
    {
      id: "1",
      alt: "test",
      src: "/content_one-3.jpg",
      caption: "A Big Test Yoooo",
    },
    {
      id: "1",
      alt: "test",
      src: "/content_one-1.jpg",
      caption: "A Big Test Yoooo",
    },
    {
      id: "1",
      alt: "test",
      src: "/content_one-3.jpg",
      caption: "A Big Test Yoooo",
    },
    {
      id: "1",
      alt: "test",
      src: "/content_one-1.jpg",
      caption: "A Big Test Yoooo",
    },
    {
      id: "1",
      alt: "test",
      src: "/content_one-5.jpg",
      caption: "A Big Test Yoooo",
    },
    {
      id: "1",
      alt: "test",
      src: "/content_one-4.jpg",
      caption: "A Big Test Yoooo",
    },
    {
      id: "1",
      alt: "test",
      src: "/content_one-3.jpg",
      caption: "A Big Test Yoooo",
    },
    {
      id: "1",
      alt: "test",
      src: "/content_one-1.jpg",
      caption: "A Big Test Yoooo",
    },
  ],
};

const CallToActionProps = {
  id: "test",
  title: "Hol dir deine Kaffeebox",
  caption: "Jetzt bestellen",
  cta_title: "Abonnieren",
  cta_link: "/",
  theme: "dark",
};

const ContentOneProps = {
  id: "test",
  title: "Erfahre mehr!",
  caption: "Über uns",
  images: [
    {
      id: "1",
      src: "/content_one-1.jpg",
      alt: "Header Image",
    },
    {
      id: "2",
      src: "/content_one-2.jpg",
      alt: "Header Image",
    },
    {
      id: "3",
      src: "/content_one-3.jpg",
      alt: "Header Image",
    },
    {
      id: "4",
      src: "/content_one-4.jpg",
      alt: "Header Image",
    },
    {
      id: "5",
      src: "/content_one-5.jpg",
      alt: "Header Image",
    },
    {
      id: "6",
      src: "/content_one-5.jpg",
      alt: "Header Image",
    },
  ],
  content_title: "Im Tilo",
  content_text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odit repellendus illo tempore voluptatum placeat? Nam odit incidunt maxime unde eius corporis temporibus reiciendis hic dolore magnam, delectus alias, expedita earum nobis veritatis! Ullam in nam ducimus eius id aliquam quod totam alias. Dolor hic accusantium beatae et quod unde magni nam odio, sit voluptate, est error. Autem blanditiis fugiat dolore nemo doloribus, iure corporis tempore commodi nulla totam quo animi. Tempora quasi ipsa obcaecati expedita qui a, maiores quia minus sit quisquam error voluptatibus culpa id illo repudiandae ad laboriosam unde iusto, nisi veniam. Facere praesentium veniam corporis quisquam vero est, laborum atque, voluptate, aperiam similique nobis totam iure ipsa cumque enim alias error placeat quas reiciendis! Atque nihil fuga cumque mollitia consequatur! Quo sunt ad recusandae similique doloremque magnam deleniti ea perferendis est architecto quibusdam consequatur expedita repellendus porro neque iste, accusantium, quidem a ducimus aperiam, reiciendis dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, magnam soluta? Culpa minima, praesentium a amet iure quia dolorum deserunt numquam quis alias accusamus, libero iusto laboriosam fugiat modi cumque ad ipsam vero, asperiores voluptatum autem perferendis totam debitis. Voluptatem in at quae quidem minima eius expedita ex, nulla totam! Saepe aut autem cumque non enim, expedita veniam, harum ad optio dolor quisquam tempore, velit cupiditate voluptatem quam nulla minima. Ullam vitae culpa fugiat odio, corrupti facere voluptatem modi necessitatibus repellendus. Distinctio, expedita nostrum. Aut necessitatibus ex cupiditate ullam officiis reiciendis aliquid? Perferendis adipisci sunt, quo fugit maiores praesentium veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, magnam soluta? Culpa minima, praesentium a amet iure quia dolorum deserunt numquam quis alias accusamus, libero iusto laboriosam fugiat modi cumque ad ipsam vero, asperiores voluptatum autem perferendis totam debitis. Voluptatem in at quae quidem minima eius expedita ex, nulla totam!",
  content_caption:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem dolorem soluta, architecto, perferendis labore doloribus sit corrupti tempora tempore hic aperiam asperiores cum accusantium cumque!",
};

const ContentTwoProps = {
  id: "test",
  title: "Sehr neugierig",
  caption: "Geschichten aus dem Paulaner Garten",
  boxes: [
    {
      id: "1",
      src: "/content_one-1.jpg",
      alt: "Header Image",
      title: "Hello World!",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consequuntur temporibus molestiae qui harum quaerat cupiditate, culpa maiores omnis pariatur placeat repudiandae quam veritatis dolorum eveniet? Repellendus quo, quisquam qui minus in id atque officiis voluptatum doloremque dolore, molestiae, quasi odio a amet quibusdam aliquid rem consequatur quidem expedita delectus.",
    },
    {
      id: "2",
      src: "/content_one-2.jpg",
      alt: "Header Image",
      title: "Hello Another World!",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consequuntur temporibus molestiae qui harum quaerat cupiditate, culpa maiores omnis pariatur placeat repudiandae quam veritatis dolorum eveniet? Repellendus quo, quisquam qui minus in id atque officiis voluptatum doloremque dolore, molestiae, quasi odio a amet quibusdam aliquid rem consequatur quidem expedita delectus.",
    },
    {
      id: "3",
      src: "/content_one-3.jpg",
      alt: "Header Image",
      title: "Wow another Super Hello World!",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consequuntur temporibus molestiae qui harum quaerat cupiditate, culpa maiores omnis pariatur placeat repudiandae quam veritatis dolorum eveniet? Repellendus quo, quisquam qui minus in id atque officiis voluptatum doloremque dolore, molestiae, quasi odio a amet quibusdam aliquid rem consequatur quidem expedita delectus.",
    },
  ],
};

const ContentThreeProps = {
  title: "Wir legen Wert auf Qualität",
  caption: "Unser Versprechen",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, voluptatum? Ut veniam eligendi quia. Officiis corrupti nihil accusantium, quae, ex nesciunt quam quos omnis quisquam sint optio distinctio nam excepturi sed commodi, totam cum error iste explicabo odio sit voluptatibus. Obcaecati, minima? Voluptate laudantium mollitia sed repudiandae nobis ab placeat provident voluptas perferendis eum et porro fuga modi minima fugiat delectus reprehenderit rerum, amet totam quia hic eos. Quod vitae, sapiente iste illum saepe minus voluptatibus quaerat placeat porro dolor asperiores aliquam laudantium, nostrum nisi? Velit aliquid hic quis voluptatem explicabo voluptates eligendi omnis ab aspernatur blanditiis, praesentium ut alias.",
  list: [
    {
      id: "1",
      text: "lorem orem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "2",
      text: "lorem orem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "3",
      text: "lorem orem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ],
  cta_title: "Speisekarte",
  cta_link: "/",
  images: [
    {
      id: "1",
      src: "/content_one-1.jpg",
      alt: "test",
    },
    {
      id: "2",
      src: "/content_one-2.jpg",
      alt: "test",
    },
    {
      id: "3",
      src: "/content_one-3.jpg",
      alt: "test",
    },
    {
      id: "4",
      src: "/content_one-4.jpg",
      alt: "test",
    },
    {
      id: "5",
      src: "/content_one-5.jpg",
      alt: "test",
    },
  ],
};

const faqProps = {
  id: "test",
  title: "Häufig gestellte Fragen",
  caption:
    "Brauchst du eine kleine Kaffeepause von all deinen Fragen? Schau doch mal in unserem FAQ vorbei!",
  image: {
    alt: "alt",
    src: "/cta-bg.jpg",
  },
  faqs: [
    { id: "string", question: "Kaffee Sorten", answer: "string" },
    { id: "string", question: "Sitzplätze", answer: "string" },
    { id: "string", question: "Reservierung", answer: "string" },
    { id: "string", question: "Anfahrt", answer: "string" },
    { id: "string", question: "Bestellen", answer: "string" },
    { id: "string", question: "Veranstaltungen", answer: "string" },
    { id: "string", question: "Mittagstich", answer: "string" },
    { id: "string", question: "Für die Kinder", answer: "string" },
  ],
  theme: "dark",
};

const alertProps = {
  id: "test",
  text: "Wichtig: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, pariatur!",
};

const marqueeTextProps = {
  id: "test",
  text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, itaque.",
  theme: "dark",
};

const marqueeReviewProps = {
  id: "test",
  title: "Was unsere Kunden sagen",
  caption: "Reviews",
  text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  cta_title: "Mehr Bewertungen",
  cta_link: "/",
  reviews: [
    {
      id: "test",
      name: "Joshua",
      image: {
        src: "/content_one-1.jpg",
        alt: "test",
      },
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      rating: 4,
    },
    {
      id: "test",
      name: "Joshua",
      image: {
        src: "/content_one-5.jpg",
        alt: "test",
      },
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      rating: 4,
    },
    {
      id: "test",
      name: "Tester",
      image: {
        src: "/content_one-2.jpg",
        alt: "test",
      },
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      rating: 5,
    },
    {
      id: "test",
      name: "Joshua",
      image: {
        src: "/content_one-3.jpg",
        alt: "test",
      },
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      rating: 4,
    },
    {
      id: "test",
      name: "Joshua",
      image: {
        src: "/content_one-4.jpg",
        alt: "test",
      },
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      rating: 2,
    },
  ],
};

const CallToActionImageProps = {
  id: "test",
  title: "Guten Appetit",
  caption: "Leckereien aus dem Kloster",
  cta_title: "Jetzt Essen",
  cta_link: "/",
  image: { src: "/cta-bg-2.jpg", alt: "test" },
};

const NavbarProps = {
  id: "test",
  theme: "dark",
};

const TabProps = {
  id: "test",
  title: "Geschichte",
  caption: "Über die Entstehung",
  tabs: [
    {
      id: "test1",
      title: "SuperTest",
      image: { src: "/cta-bg-2.jpg", alt: "test" },
      heading: "Test",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ratione eius dolorum vel nemo quo accusantium voluptatum illum nam, soluta libero inventore dolorem odit atque officia rem maxime alias ipsum quas tempore asperiores omnis fugit non. Aut ratione blanditiis voluptatum tenetur tempore, exercitationem sit explicabo voluptate alias, at nam, illum natus. Assumenda repellat ipsam deleniti voluptas, aliquam suscipit in temporibus laboriosam obcaecati omnis explicabo quasi non, architecto aut eos. Vel nulla doloremque totam reiciendis veniam laboriosam eos nam. Quae rem reprehenderit esse! Commodi nam neque voluptatibus ullam iure unde quibusdam voluptates aliquam odio voluptatem perferendis alias quis, illum velit itaque minima cupiditate! Voluptas, cum quidem ducimus molestias delectus facilis excepturi nulla harum accusamus voluptates error quia inventore corporis dolores cumque in sequi tempore! Deleniti harum sequi reiciendis neque mollitia architecto ut delectus provident debitis doloribus, autem id eligendi voluptate! Nihil sit labore quos maiores veniam pariatur voluptatibus ipsum rem fugit.",
    },
    {
      id: "test2",
      title: "SuperTest2",
      image: { src: "/cta-bg.jpg", alt: "test" },
      heading: "Test2",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ratione eius dolorum vel nemo quo accusantium voluptatum illum nam, soluta libero inventore dolorem odit atque officia rem maxime alias ipsum quas tempore asperiores omnis fugit non. Aut ratione blanditiis voluptatum tenetur tempore, exercitationem sit explicabo voluptate alias, at nam, illum natus. Assumenda repellat ipsam deleniti voluptas, aliquam suscipit in temporibus laboriosam obcaecati omnis explicabo quasi non, architecto aut eos. Vel nulla doloremque totam reiciendis veniam laboriosam eos nam. Quae rem reprehenderit esse! Commodi nam neque voluptatibus ullam iure unde quibusdam voluptates aliquam odio voluptatem perferendis alias quis, illum velit itaque minima cupiditate! Voluptas, cum quidem ducimus molestias delectus facilis excepturi nulla harum accusamus voluptates error quia inventore corporis dolores cumque in sequi tempore! Deleniti harum sequi reiciendis neque mollitia architecto ut delectus provident debitis doloribus, autem id eligendi voluptate! Nihil sit labore quos maiores veniam pariatur voluptatibus ipsum rem fugit.2",
    },
    {
      id: "test3",
      title: "SuperTest3",
      image: { src: "/cta-bg.jpg", alt: "test" },
      heading: "Test3",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ratione eius dolorum vel nemo quo accusantium voluptatum illum nam, soluta libero inventore dolorem odit atque officia rem maxime alias ipsum quas tempore asperiores omnis fugit non. Aut ratione blanditiis voluptatum tenetur tempore, exercitationem sit explicabo voluptate alias, at nam, illum natus. Assumenda repellat ipsam deleniti voluptas, aliquam suscipit in temporibus laboriosam obcaecati omnis explicabo quasi non, architecto aut eos. Vel nulla doloremque totam reiciendis veniam laboriosam eos nam. Quae rem reprehenderit esse! Commodi nam neque voluptatibus ullam iure unde quibusdam voluptates aliquam odio voluptatem perferendis alias quis, illum velit itaque minima cupiditate! Voluptas, cum quidem ducimus molestias delectus facilis excepturi nulla harum accusamus voluptates error quia inventore corporis dolores cumque in sequi tempore! Deleniti harum sequi reiciendis neque mollitia architecto ut delectus provident debitis doloribus, autem id eligendi voluptate! Nihil sit labore quos maiores veniam pariatur voluptatibus ipsum rem fugit.2",
    },
    {
      id: "test4",
      title: "SuperTest4",
      image: { src: "/cta-bg.jpg", alt: "test" },
      heading: "Test4",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ratione eius dolorum vel nemo quo accusantium voluptatum illum nam, soluta libero inventore dolorem odit atque officia rem maxime alias ipsum quas tempore asperiores omnis fugit non. Aut ratione blanditiis voluptatum tenetur tempore, exercitationem sit explicabo voluptate alias, at nam, illum natus. Assumenda repellat ipsam deleniti voluptas, aliquam suscipit in temporibus laboriosam obcaecati omnis explicabo quasi non, architecto aut eos. Vel nulla doloremque totam reiciendis veniam laboriosam eos nam. Quae rem reprehenderit esse! Commodi nam neque voluptatibus ullam iure unde quibusdam voluptates aliquam odio voluptatem perferendis alias quis, illum velit itaque minima cupiditate! Voluptas, cum quidem ducimus molestias delectus facilis excepturi nulla harum accusamus voluptates error quia inventore corporis dolores cumque in sequi tempore! Deleniti harum sequi reiciendis neque mollitia architecto ut delectus provident debitis doloribus, autem id eligendi voluptate! Nihil sit labore quos maiores veniam pariatur voluptatibus ipsum rem fugit.2",
    },
    {
      id: "test9",
      title: "SuperTest9",
      image: { src: "/cta-bg.jpg", alt: "test" },
      heading: "Test9",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ratione eius dolorum vel nemo quo accusantium voluptatum illum nam, soluta libero inventore dolorem odit atque officia rem maxime alias ipsum quas tempore asperiores omnis fugit non. Aut ratione blanditiis voluptatum tenetur tempore, exercitationem sit explicabo voluptate alias, at nam, illum natus. Assumenda repellat ipsam deleniti voluptas, aliquam suscipit in temporibus laboriosam obcaecati omnis explicabo quasi non, architecto aut eos. Vel nulla doloremque totam reiciendis veniam laboriosam eos nam. Quae rem reprehenderit esse! Commodi nam neque voluptatibus ullam iure unde quibusdam voluptates aliquam odio voluptatem perferendis alias quis, illum velit itaque minima cupiditate! Voluptas, cum quidem ducimus molestias delectus facilis excepturi nulla harum accusamus voluptates error quia inventore corporis dolores cumque in sequi tempore! Deleniti harum sequi reiciendis neque mollitia architecto ut delectus provident debitis doloribus, autem id eligendi voluptate! Nihil sit labore quos maiores veniam pariatur voluptatibus ipsum rem fugit.2",
    },
    {
      id: "test5",
      title: "SuperTest5",
      image: { src: "/cta-bg.jpg", alt: "test" },
      heading: "Test5",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ratione eius dolorum vel nemo quo accusantium voluptatum illum nam, soluta libero inventore dolorem odit atque officia rem maxime alias ipsum quas tempore asperiores omnis fugit non. Aut ratione blanditiis voluptatum tenetur tempore, exercitationem sit explicabo voluptate alias, at nam, illum natus. Assumenda repellat ipsam deleniti voluptas, aliquam suscipit in temporibus laboriosam obcaecati omnis explicabo quasi non, architecto aut eos. Vel nulla doloremque totam reiciendis veniam laboriosam eos nam. Quae rem reprehenderit esse! Commodi nam neque voluptatibus ullam iure unde quibusdam voluptates aliquam odio voluptatem perferendis alias quis, illum velit itaque minima cupiditate! Voluptas, cum quidem ducimus molestias delectus facilis excepturi nulla harum accusamus voluptates error quia inventore corporis dolores cumque in sequi tempore! Deleniti harum sequi reiciendis neque mollitia architecto ut delectus provident debitis doloribus, autem id eligendi voluptate! Nihil sit labore quos maiores veniam pariatur voluptatibus ipsum rem fugit.2",
    },
    {
      id: "test6",
      title: "SuperTest6",
      image: { src: "/cta-bg.jpg", alt: "test" },
      heading: "Test6",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ratione eius dolorum vel nemo quo accusantium voluptatum illum nam, soluta libero inventore dolorem odit atque officia rem maxime alias ipsum quas tempore asperiores omnis fugit non. Aut ratione blanditiis voluptatum tenetur tempore, exercitationem sit explicabo voluptate alias, at nam, illum natus. Assumenda repellat ipsam deleniti voluptas, aliquam suscipit in temporibus laboriosam obcaecati omnis explicabo quasi non, architecto aut eos. Vel nulla doloremque totam reiciendis veniam laboriosam eos nam. Quae rem reprehenderit esse! Commodi nam neque voluptatibus ullam iure unde quibusdam voluptates aliquam odio voluptatem perferendis alias quis, illum velit itaque minima cupiditate! Voluptas, cum quidem ducimus molestias delectus facilis excepturi nulla harum accusamus voluptates error quia inventore corporis dolores cumque in sequi tempore! Deleniti harum sequi reiciendis neque mollitia architecto ut delectus provident debitis doloribus, autem id eligendi voluptate! Nihil sit labore quos maiores veniam pariatur voluptatibus ipsum rem fugit.2",
    },
    {
      id: "test7",
      title: "SuperTest7",
      image: { src: "/cta-bg.jpg", alt: "test" },
      heading: "Test7",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ratione eius dolorum vel nemo quo accusantium voluptatum illum nam, soluta libero inventore dolorem odit atque officia rem maxime alias ipsum quas tempore asperiores omnis fugit non. Aut ratione blanditiis voluptatum tenetur tempore, exercitationem sit explicabo voluptate alias, at nam, illum natus. Assumenda repellat ipsam deleniti voluptas, aliquam suscipit in temporibus laboriosam obcaecati omnis explicabo quasi non, architecto aut eos. Vel nulla doloremque totam reiciendis veniam laboriosam eos nam. Quae rem reprehenderit esse! Commodi nam neque voluptatibus ullam iure unde quibusdam voluptates aliquam odio voluptatem perferendis alias quis, illum velit itaque minima cupiditate! Voluptas, cum quidem ducimus molestias delectus facilis excepturi nulla harum accusamus voluptates error quia inventore corporis dolores cumque in sequi tempore! Deleniti harum sequi reiciendis neque mollitia architecto ut delectus provident debitis doloribus, autem id eligendi voluptate! Nihil sit labore quos maiores veniam pariatur voluptatibus ipsum rem fugit.2",
    },
    {
      id: "test8",
      title: "SuperTest8",
      image: { src: "/cta-bg.jpg", alt: "test" },
      heading: "Test8",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ratione eius dolorum vel nemo quo accusantium voluptatum illum nam, soluta libero inventore dolorem odit atque officia rem maxime alias ipsum quas tempore asperiores omnis fugit non. Aut ratione blanditiis voluptatum tenetur tempore, exercitationem sit explicabo voluptate alias, at nam, illum natus. Assumenda repellat ipsam deleniti voluptas, aliquam suscipit in temporibus laboriosam obcaecati omnis explicabo quasi non, architecto aut eos. Vel nulla doloremque totam reiciendis veniam laboriosam eos nam. Quae rem reprehenderit esse! Commodi nam neque voluptatibus ullam iure unde quibusdam voluptates aliquam odio voluptatem perferendis alias quis, illum velit itaque minima cupiditate! Voluptas, cum quidem ducimus molestias delectus facilis excepturi nulla harum accusamus voluptates error quia inventore corporis dolores cumque in sequi tempore! Deleniti harum sequi reiciendis neque mollitia architecto ut delectus provident debitis doloribus, autem id eligendi voluptate! Nihil sit labore quos maiores veniam pariatur voluptatibus ipsum rem fugit.2",
    },
  ],
  images: [
    {
      id: "test",
      src: "/cta-bg-2.jpg",
      alt: "test",
    },
    {
      id: "test",
      src: "/cta-bg.jpg",
      alt: "test",
    },
    {
      id: "test",
      src: "/header-image.jpg",
      alt: "test",
    },
    {
      id: "test",
      src: "/header-preview-2.jpg",
      alt: "test",
    },
  ],
};

const SecondaryHeadingProps = {
  id: "test",
  title: "Öffnungszeiten",
  caption: "Lorem ipsum dolor sit amet consectetur.",
  image: { src: "/cta-bg-2.jpg", alt: "test" },
  theme: "dark",
};

export default function Home() {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  return (
    <>
      <motion.div className="relative overflow-x-hidden">
        <LoadingScreen />
        <Alert props={alertProps} />
        <Navbar props={NavbarProps} />
        <Header props={headerProps} />
        <ContentFive />
        {/* <TertiaryHeading /> */}
        <CtaGallery props={CtaGalleryProps} />
        <MarqueeText props={marqueeTextProps} />
        <ContentFour />
        <MasonryGallery props={MasonryGalleryProps} />
        <MarqueeReview props={marqueeReviewProps} />
        <Tab props={TabProps} />
        <SecondaryHeading props={SecondaryHeadingProps} />
        <Faq props={faqProps} />

        <CookieBanner />

        <CallToActionImage props={CallToActionImageProps} />

        <CallToAction props={CallToActionProps} />
        <ContentOne props={ContentOneProps} />
        <ContentThree props={ContentThreeProps} />
        <ContentTwo props={ContentTwoProps} />

        <CallToAction props={CallToActionProps} />
        <LeafletMap />
        <Footer />
      </motion.div>
    </>
  );
}
