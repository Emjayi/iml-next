import React from 'react'
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from 'next-intl/server';

const Page = ({ params: { locale } }: any) => {
    const t = useTranslations('ProductionLines');
    unstable_setRequestLocale(locale);
    return (
        <div className='h-[120dvh] flex flex-col justify-start items-center mt-8'>
            <h1 className='text-6xl'>{t('title')}</h1>
            <p className='text-3xl'>{t('description')}</p>
        </div>
    )
}

export default Page