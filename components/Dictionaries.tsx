const dictionaries: any = {
    en: () => import("@/lib/dic/en.json").then((module) => module.default),
    fa: () => import("@/lib/dic/fa.json").then((module) => module.default)
};

export const getDictionary = async (locale: any) => dictionaries[locale]();