import Hero from "@/components/Home/Hero/index";
import Services from "@/components/Home/Services";
import Slider from "@/components/Home/Slider";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
export default function Home({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Home');
  return (
    <>
      <main className="mt-5 w-[100%]">
        <Hero title={t("title1")} title2={t("title2")} description={t("description")} />
        <Slider />
        <Services />
        <div className="flex bottom-0 w-full flex-col justify-end items-center text-xl text-black h-[30vh]">
          <h2>Made in Khatoon Advertising</h2>
        </div>
      </main >
    </>
  );
}
