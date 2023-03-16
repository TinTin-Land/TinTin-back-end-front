import type { NextPage } from 'next';
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import BingCourse from "./bind_course";
import Head from "../components/head";

const IndexPage: NextPage = () => {
    const router = useRouter()
    const { t } = useTranslation('common')
    console.log(t('change-locale'))
    console.log(router.locale)
  return (
      <main>
        <div>
          <Head/>
             <BingCourse/>
        </div>

      </main>
  )
}

export default IndexPage

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'footer']),
    }
})
