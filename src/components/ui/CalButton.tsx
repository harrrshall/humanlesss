'use client';

import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
}

export function CalButton({ children, className, variant, size }: CalButtonProps) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "15min" });
            cal("ui", {
                theme: "dark",
                cssVarsPerTheme: {
                    light: { "cal-brand": "#6C63FF" },
                    dark: { "cal-brand": "#4C4CFF" }
                },
                hideEventTypeDetails: true,
                layout: "month_view"
            });
        })();
    }, []);

    return (
        <Button
            className={className}
            variant={variant}
            size={size}
            data-cal-namespace="15min"
            data-cal-link="harshal-singh-logu1i/15min"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
        >
            {children}
        </Button>
    );
} 