import Image from "next/image"

type Props = {
    imageUrl: string;
    title: string;
    text: string;
}

const Hero = ({ imageUrl, title, text}: Props) => (
    <div className="relative w-full h-128">
        <div className="relative flex flex-col-reverse max-w-7xl m-auto z-10 pb-12 text-center md:text-left">
            <div className="text-white max-w-2xl px-4">
                <h2 className="text-2xl md:text-5xl font-bold pb-8">
                    {title}
                </h2>
                <p className="text-md md:text-xl">
                    {text}
                </p>
            </div>
        </div>
        <Image priority objectFit="cover" objectPosition="center" layout="fill" src={imageUrl} alt="hero-img" />
    </div>
);

export default Hero