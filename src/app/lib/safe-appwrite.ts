export async function safeAppwrite<T>(
    cb: () => Promise<T>,
    fallback: T
): Promise<T> {
    try {
        return await cb();
    } catch (error) {
        console.warn("Appwrite request failed during build/render:", error);
        return fallback;
    }
}
