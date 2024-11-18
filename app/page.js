import { headers } from "next/headers";

export default async function Home() {
  const headersList = headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0] || 
    headersList.get("host"); 

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>Geolocation</div>
      {ip ? <p>Your IP: {ip}</p> : <p>Unable to determine your IP address</p>}
    </div>
  );
}
