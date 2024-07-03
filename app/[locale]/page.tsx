import Hero from "@/components/Hero/index";
import Slider from "@/components/Slider";
import { useTranslations } from "next-intl";
export default function Home() {
  // const { title1, title2, description } = await getDictionary(params.lang); // en
  const t = useTranslations('Home');

  return (
    <>
      <main className="mt-5 w-[100%]">
        <Hero title={t("title1")} title2={t("title2")} description={t("description")} />
        <Slider />
      </main >
    </>
  );
}
