// app/api/location/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    // Use a public IP geolocation service
    const res = await fetch('http://ip-api.com/json?fields=status,message,country,regionName,city,query');
    const data = await res.json();

    if (data.status === 'fail') {
        return NextResponse.json({ error: data.message }, { status: 500 });
    }

    return NextResponse.json({
        ip: data.query,
        country: data.country,
        region: data.regionName,
        city: data.city,
    });
}
