import Link from "next/link";
import Image from "next/image";

export function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-12 w-48">
                <Image
                    src="/branding/logo.svg"
                    alt="Peachtree Outdoor Living"
                    fill
                    className="object-contain object-left"
                    priority
                />
            </div>
        </Link>
    );
}
