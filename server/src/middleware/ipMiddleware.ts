import { Request, Response, NextFunction } from 'express';

export const getClientIP = (req: Request): string => {
    const forwarded = req.headers['x-forwarded-for'] as string;
    if (forwarded) {
        const ips = forwarded.split(',').map(ip => ip.trim());
        for (const ip of ips) {
            if (
                ip &&
                !ip.startsWith('127.') &&
                !ip.startsWith('192.168.') &&
                !ip.startsWith('10.') &&
                ip !== '::1'
            ) {
                return ip;
            }
        }
    }

    let ip = req.socket?.remoteAddress || 'unknown';

    // Преобразовать IPv6 localhost (::1) и IPv6-mapped IPv4 (::ffff:127.0.0.1)
    if (ip === '::1') return '127.0.0.1';
    if (ip.startsWith('::ffff:')) ip = ip.replace('::ffff:', '');

    return ip;
};

export const ipMiddleware = (req: Request, res: Response, next: NextFunction) => {
    req.clientIP = getClientIP(req);
    next();
};
