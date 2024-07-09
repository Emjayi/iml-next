import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en-us", "fa-ir"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
    "en-us": "English",
    "fa-ir": "فارسی"
}

export const { Link, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales });