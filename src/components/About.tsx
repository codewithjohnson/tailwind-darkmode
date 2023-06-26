import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-black transition-all ease-in delay-100 bg-gray-400 dark:bg-slate-950 dark:text-gray-300">
      <h1 className="mb-4 text-4xl font-bold">Welcome to Our World</h1>
      <p className="mb-4 text-lg text-center">
        At [Company Name], we believe that beauty is a language that transcends
        boundaries, cultures, and backgrounds. It is a universal thread that
        weaves through our lives, connecting us to the extraordinary wonders of
        the world. Our journey began with a simple vision—to create a space
        where beauty takes center stage, where stories unfold, and where dreams
        come to life.
      </p>
      <p className="mb-4 text-lg text-center">
        We are a passionate collective of artists, dreamers, and innovators who
        strive to bring forth the essence of beauty in all its forms. From the
        gentle brushstrokes of a painter to the harmonious melodies of a
        musician, we draw inspiration from the diverse tapestry of artistic
        expression. Through our products and services, we aim to ignite the
        spark of creativity within each individual, empowering them to embrace
        their unique beauty and celebrate their individuality.
      </p>
      <p className="mb-4 text-lg text-center">
        Our commitment to excellence is unwavering. Every creation that emerges
        from our ateliers is a testament to the meticulous craftsmanship and
        attention to detail that defines us. We source the finest materials from
        around the globe, cherishing the stories they hold and the journeys they
        have undertaken. With every stroke of our brushes, every note played on
        our instruments, and every design crafted with love, we aspire to touch
        the hearts and souls of those who encounter our creations.
      </p>
      <p className="mb-4 text-lg text-center">
        But our purpose goes beyond the tangible. We strive to create an oasis
        of inspiration, a sanctuary where minds can wander, and hearts can find
        solace. Our belief in the power of beauty drives us to constantly
        innovate, to push the boundaries of what is possible, and to create
        experiences that leave a lasting impact.
      </p>
    </div>
  );
};

export default About;
