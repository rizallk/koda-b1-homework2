import Card from '../components/Card';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold text-red-700 mb-7">
        Selamat datang di KFC
      </h1>

      <Hero />

      <hr className="text-gray-400 my-5" />

      <h1 className="text-2xl font-semibold mb-4">Menu Favorit</h1>

      <div className="grid sm:grid-cols-3 gap-4">
        <Card isFullCenter>
          <h3 className="text-lg font-semibold">Original Chicken</h3>
        </Card>
        <Card isFullCenter>
          <h3 className="text-lg font-semibold">Super Besar</h3>
        </Card>
        <Card isFullCenter>
          <h3 className="text-lg font-semibold">Chicken Bucket</h3>
        </Card>
      </div>
    </>
  );
}
