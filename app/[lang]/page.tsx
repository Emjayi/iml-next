
import Image from "next/image";
import LanguageSelector from "@/components/LanguageSelector";
import { getDictionary } from "@/components/Dictionaries";


export default async function Page({ params }: any) {
  const { title, description } = await getDictionary(params.lang); // en

  return (
    <>
      <main className="mt-5 w-[100%]">
        <div className="w-[60%] mx-auto text-center mt-20">
          < h1 className="text-2xl">{title}</h1>
          <p className="text-base mt-10">{description}</p>
        </div>
      </main>
    </>
  );
}
