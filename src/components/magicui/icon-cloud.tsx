"use client";

import { useMemo } from "react";
import { Cloud, type CloudProps } from "react-icon-cloud";

export const cloudProps: Omit<CloudProps, "children" | "tags" | "id" | "tagCanvasOptions"> = {
    canvasStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingTop: 40,
    },
};

export type DynamicCloudProps = {
    iconSlugs: string[];
};

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
    const tags = useMemo(
        () =>
            iconSlugs.map((slug, index) => ({
                id: `${slug}-${index}`,
                title: slug,
                href: `https://www.google.com/search?q=${slug}`,
            })),
        [iconSlugs]
    );

    return <Cloud {...cloudProps} id="icon-cloud" tags={tags} tagCanvasOptions={{}} />;
}
