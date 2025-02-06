import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* จุดที่ 1 */}
      <h1 className="text-4xl font-bold absolute top-10 left-10">66026167</h1>
      
      {/* จุดที่ 2 */}
      <h1 className="text-4xl font-bold absolute bottom-10 right-10">66026167</h1>
      
      <div className="p-6 bg-white shadow-lg rounded-xl text-center text-gray-900">
        <h1 className="text-2xl font-bold">66026167</h1>
        <p className="text-lg mt-2">-- นายศุภกิตติ์ ราญพล --</p>
      </div>
      
      {/* จุดที่ 3 */}
      <h1 className="text-4xl font-bold absolute bottom-10 left-10">66026167</h1>
    </div>
  );
}
