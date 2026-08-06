import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { databases } from "@/models/server/config";
import { db, questionCollection } from "@/models/name";
import { Query } from "node-appwrite";
import slugify from "@/utils/slugify";
import HeroSectionHeader from "./HeroSectionHeader";
import { safeAppwrite } from "@/app/lib/safe-appwrite";

export default async function HeroSection() {
    const questions = await safeAppwrite(
        () =>
            databases.listDocuments(db, questionCollection, [
                Query.orderDesc("$createdAt"),
                Query.limit(15),
            ]),
        { documents: [] } as any
    );

    return (
        <HeroParallax
            header={<HeroSectionHeader />}
            products={questions.documents.map((q: any) => ({
                title: q.title,
                link: `/questions/${q.$id}/${slugify(q.title)}`,
                thumbnail: "",
            }))}
        />
    );
}
