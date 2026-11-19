import { isIP } from "node:net";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const forwardedIp =
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-vercel-forwarded-for") ??
    req.headers.get("x-forwarded-for");
  const visitorIp = forwardedIp?.split(",")[0].trim();

  if (!visitorIp || !isIP(visitorIp)) {
    return NextResponse.json(
      { error: "Visitor IP unavailable" },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    );
  }

  try {
    const res = await fetch(
      `http://ip-api.com/json/${encodeURIComponent(visitorIp)}?fields=status,message,country,regionName,city,query`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Location lookup failed" },
        { status: 502, headers: { "Cache-Control": "no-store" } }
      );
    }

    const data = await res.json();

    if (data.status !== "success") {
      return NextResponse.json(
        { error: "Location unavailable" },
        { status: 502, headers: { "Cache-Control": "no-store" } }
      );
    }

    return NextResponse.json({
      ip: data.query,
      city: data.city,
      region: data.regionName,
      country: data.country,
    }, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to detect location" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}