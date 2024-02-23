import { dancingScript } from "@/lib/utils/fonts";

const About = () => {
  return (
    <section className="container mt-[12rem]">
      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-6">
          <h3 className={`text-deepRed font-extrabold uppercase text-3xl ${dancingScript.className}`}>About Us</h3>
          <div className="space-y-4 text-zinc-500">
            <p>
              StudBuds is here to revolutionize student food purchasing Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Ea laboriosam molestiae magnam ut, incidunt ipsa doloribus dolorum molestias.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum explicabo nemo maxime impedit corporis
              quam aperiam sapiente! Blanditiis odit omnis reprehenderit molestias? Ducimus cum atque, suscipit earum
              eos nisi vitae.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
