import {
  Footer,
  Header,
  CtaGallery,
  MasonryGallery,
  CallToAction,
  ContentOne,
  ContentTwo,
} from "@/components/index";

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
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel modi, rem accusamus eligendi numquam error.",
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

export default function Home() {
  return (
    <>
      <Header props={headerProps} />
      <CtaGallery props={CtaGalleryProps} />
      <MasonryGallery props={MasonryGalleryProps} />
      <CallToAction />
      <ContentOne props={ContentOneProps} />
      <ContentTwo />
      <Footer />
    </>
  );
}
