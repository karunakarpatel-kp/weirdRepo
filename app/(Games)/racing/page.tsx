import React from "react";
import GamePlayerBox from "../_GamesList/GameComponents/GamePlayerBox";
import Link from "next/link";
import Image from "next/image";
import escapeRoadImage from "@Public/escape-road.png";
import madalinImage from "@Public/madalin.jpg";
import highwayRacerImage from "@Public/highway-racer-cover.png";
import GameCard from "../_GamesList/GameComponents/GameCard";
import Slider from "react-slick";

const Racing = () => {
  return (
    <>
      <div className="col-span-3 border-0 border-green-800 mt-14 text-white ">
        <div className="secondMasonryGrid p-0 mt-6 sticky top-16">
          <ol className="list-none grid grid-cols-3 gap-1 list-outside p-0 m-0  ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((singleMap) => {
              return (
                <GameCard
                  linkHref="/racing"
                  imgSrc={escapeRoadImage}
                  imgAlt="Escape-Road"
                  gameTitle="Escape Road "
                  linkTitle="Escape-Road"
                />
              );
            })}
          </ol>
        </div>
      </div>
      <section className="col-span-6  border-0 border-red-500 m-auto w-full mb-32 mt-14">
        <div className="videoPlayer my-20 p-4">
          <GamePlayerBox />
          <article className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, rerum architecto? Voluptates nisi quaerat
            atque porro mollitia impedit, omnis illo, quae alias vel exercitationem ex ea quibusdam repudiandae vitae
            deserunt ullam fuga sed aliquid eos consectetur placeat corporis optio eum. Impedit quos a atque minus
            numquam cumque et, illum est molestias ex in suscipit accusamus quidem. Quaerat molestias distinctio
            tempore, error, blanditiis accusamus aliquid voluptates quod minima veniam, doloribus ex assumenda magni? Ab
            earum eveniet obcaecati, hic sunt totam. Provident explicabo laudantium autem nemo aspernatur distinctio?
            Eveniet laboriosam esse officia eligendi nulla repellendus maxime labore voluptatem quo iste! Incidunt
            eaque, asperiores quidem exercitationem quod deleniti, similique quia a possimus corporis est minima vitae
            inventore molestias esse voluptatem explicabo beatae iusto? Voluptas ipsa dolorem esse nam facere non iste
            quam repellendus reiciendis blanditiis sunt id modi cumque quo sint corporis ex et nobis, nesciunt tenetur
            quod possimus tempore perferendis itaque. Accusantium delectus illum totam ipsa doloribus velit iure quam
            quisquam at corrupti esse, eos est consequatur ullam rerum? Natus beatae voluptatibus quaerat minima
            veritatis? Corporis, natus doloribus veritatis autem est, recusandae ea consequatur praesentium vero, earum
            temporibus! Laudantium commodi, voluptates molestiae eaque quo aperiam consequatur distinctio beatae
            incidunt vero optio nam obcaecati aliquid minima sit velit at illum deleniti nisi iusto ad maxime qui omnis!
            Quidem eum sit dolor distinctio accusamus exercitationem fugiat autem quo veritatis quos explicabo voluptas
            hic voluptates doloremque fuga expedita, vel doloribus sed reprehenderit perferendis iusto quas! Optio
            magnam veritatis esse, nesciunt sapiente consequuntur ad magni, vero rem excepturi, deserunt error adipisci
            blanditiis dicta laboriosam voluptatem voluptates repellendus molestiae voluptatum nobis accusamus quod.
            Blanditiis fugiat, eveniet magni suscipit unde incidunt cum? Delectus repellendus natus reiciendis iusto,
            quam facere numquam similique asperiores eaque consequatur voluptas consectetur obcaecati omnis, sed, sequi
            iste autem! Enim nesciunt tempora suscipit maxime ab laborum beatae magnam sapiente laboriosam ducimus
            voluptas perspiciatis omnis, esse eius distinctio ipsa. Natus enim, praesentium fuga itaque cum officiis
            ullam adipisci facilis deleniti aliquid! Vel, similique a laudantium doloremque culpa voluptatum pariatur!
            Quisquam fugit deserunt voluptas. Maiores, non aspernatur sit repellat, quae ipsum ratione fuga enim rem
            odio eius consectetur ab obcaecati eaque, ad beatae ullam? Hic libero quisquam cum reprehenderit, deserunt
            sed ad quasi, quo explicabo voluptas in laboriosam minima consequatur? Fuga qui, sit quae ratione doloribus
            odio adipisci tempora fugiat asperiores explicabo vitae expedita nobis eos veritatis iure voluptas,
            eligendi, consequatur tempore recusandae amet sed ea. Ut.
          </article>
        </div>
      </section>
      <section className=" col-span-3 border-0 border-slate-500 mt-14">
        <div className="secondMasonryGrid p-0 mt-6 sticky top-16">
          <ol className="list-none grid grid-cols-2 gap-1 list-outside p-0 m-0">
            {[1, 2, 3, 4].map((singleMap) => {
              return (
                <GameCard
                  linkHref="/"
                  imgSrc={escapeRoadImage}
                  imgAlt="Escape-Road"
                  gameTitle="Escape Road "
                  linkTitle="Escape-Road"
                  scalVal={105}
                />
              );
            })}
          </ol>
        </div>
      </section>
    </>
  );
};

export default Racing;
