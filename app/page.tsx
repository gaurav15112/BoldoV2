import Image from "next/image";
import styles from "./page.module.scss";
import Services from "@/Components/Services/Services";
import Testimonial from "@/Components/Testimonial/Testimonial";
import Overview from "@/Components/CompanyOverview/Overview";
import NewsLetter from "@/Components/Newsletter/NewsLetter";
import Blog from "@/Components/Blog/Blog";
import NewsArticle from "@/Components/NewsArticle/NewsArticle";
export default function Home() {
  return (
    <>
      <main>
        <Services />
        <Testimonial />
        <Overview />
        <NewsArticle />
        <NewsLetter />
      </main>
    </>
  );
}
