import { getDictionary } from "@/components/Dictionaries";
import { Button } from "@nextui-org/button";
import Hero from "@/components/Hero/index";
import Slider from "@/components/Slider";

export default async function Page({ params }: any) {
  const { title1, title2, description } = await getDictionary(params.lang); // en

  return (
    <>
      <main className="mt-5 w-[100%]">
        <Hero title={title1} title2={title2} description={description} />
        <Slider />
      </main >
    </>
  );
}
