"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
    products,
    header,
}: {
    header: React.ReactNode;
    products: {
        title: string;
        link: string;
        thumbnail?: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="relative flex h-[300vh] flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]"
        >
            {header}
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
                    {firstRow.map(product => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </motion.div>
                <motion.div className="mb-20 flex flex-row space-x-20">
                    {secondRow.map(product => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
                    {thirdRow.map(product => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

const gradientStyles = [
    "from-fuchsia-600 via-violet-600 to-indigo-600",
    "from-cyan-500 via-sky-600 to-blue-700",
    "from-emerald-500 via-teal-600 to-cyan-700",
    "from-amber-500 via-orange-500 to-rose-600",
    "from-pink-500 via-rose-500 to-red-600",
];

const getGradientClass = (title: string) => {
    const index = title.length % gradientStyles.length;
    return gradientStyles[index];
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail?: string;
    };
    translate: MotionValue<number>;
}) => {
    const hasThumbnail = Boolean(product.thumbnail && product.thumbnail.trim());
    const gradientClass = getGradientClass(product.title);

    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product relative h-96 w-[30rem] flex-shrink-0"
        >
            <Link href={product.link} className="block h-full w-full group-hover/product:shadow-2xl">
                {hasThumbnail ? (
                    <Image
                        src={product.thumbnail!}
                        height="600"
                        width="600"
                        className="absolute inset-0 h-full w-full object-cover object-left-top"
                        alt={product.title}
                    />
                ) : (
                    <div
                        className={`absolute inset-0 flex h-full w-full items-end bg-gradient-to-br ${gradientClass} p-6`}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_50%)]" />
                        <div className="relative z-10">
                            <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                                Recent question
                            </p>
                            <h2 className="mt-2 max-w-[20rem] text-xl font-semibold text-white">
                                {product.title}
                            </h2>
                        </div>
                    </div>
                )}
            </Link>
            <div className="pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-80"></div>
            <h2 className="absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100">
                {product.title}
            </h2>
        </motion.div>
    );
};
