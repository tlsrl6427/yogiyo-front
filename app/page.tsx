import Image from 'next/image';
import Head from 'next/head';
import './globals.css';

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center h-screen">
      <Head>
        <title>yogiyo</title>
        <meta name="description" content="clone yogiyo"></meta>
      </Head>
      <main className="web-container mx-auto py-10 px-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-white">yogiyo?</h1>
      </main>
    </div>
  );
}
