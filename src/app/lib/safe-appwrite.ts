export async function safeAppwrite<T>(
    cb: () => Promise<T>,
    fallback: T
): Promise<T> {
    try {
        return await cb();
    } catch (error) {
        // Only log in development to reduce noise in production
        if (process.env.NODE_ENV === 'development') {
            console.warn("Appwrite request failed during build/render:", error);
        }
        return fallback;
    }
}
