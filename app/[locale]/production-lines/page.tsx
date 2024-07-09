import React from 'react'
import { useTranslations } from "next-intl";

const Page = () => {
    const t = useTranslations('ProductionLines');
    return (
        <div className='h-[120dvh] flex flex-col justify-start items-center mt-8'>
            <h1 className='text-6xl'>{t('title')}</h1>
            <p className='text-3xl'>{t('description')}</p>
        </div>
    )
}

export default Page