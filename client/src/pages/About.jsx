import React from "react";
import ImageCard from "../components/cards/ImageCard";
import AboutCard from "../components/cards/AboutCard";

const About = () => {
  return (
    <div>
      <ImageCard buttonRequired={false} title="About" />
      <div className="flex flex-col  max-w-7xl mx-auto my-20">
        <p className="text-3xl font-bold capitalize">Information: </p>
        <p className="text-lg leading-7 text-justify mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam earum
          magni mollitia quo autem, incidunt sunt sed voluptates blanditiis,
          commodi perspiciatis fugit velit in ex? Sequi quia totam recusandae
          vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          odit vero aperiam provident ducimus officiis, illum porro minus,
          accusantium necessitatibus quis distinctio tempora recusandae
          laboriosam eius. Placeat dignissimos sunt pariatur. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Architecto recusandae
          molestiae ratione possimus? Saepe placeat fugiat omnis dignissimos?
          Recusandae ratione perferendis sit nesciunt inventore velit asperiores
          rem, consequuntur doloribus veniam?Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Ratione, itaque, excepturi aspernatur ut
          eos adipisci error commodi amet magni provident recusandae quaerat
          rerum magnam minima incidunt voluptatem praesentium atque mollitia?
        </p>
      </div>
      <AboutCard rowReverse={true} />
      <AboutCard />
      <AboutCard rowReverse />
    </div>
  );
};

export default About;
