declare global {
    namespace Express {
        interface Request {
            clientIP?: string;
        }
    }
}
export {};
