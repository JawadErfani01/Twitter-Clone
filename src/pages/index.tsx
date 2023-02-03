import Head from "next/head";
import { Inter } from "@next/font/google";
import Layout from "@/components/Layout";
import SideBar from "@/components/SideBar";
import HomePage from "@/components/Home";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-flow-col ">
        <SideBar />
        <HomePage />
        <SearchBar />
      </div>
    </Layout>
  );
}
