import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Card>
        <CardContent>
          <div className="w-full space-y-2">
            <Link href={`/dashboard`} className="w-full">
              <Button className="w-full">Dashboard</Button>
            </Link>
            <div className="pt-4 w-full">
              <Link href={`/snippets`} className="w-full">
                <Button className="w-full">Snippets</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
