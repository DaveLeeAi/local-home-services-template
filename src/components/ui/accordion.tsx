"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a utils file with clsx/tailwind-merge usually found in shadcn projects

// Simple Context for Accordion State
const AccordionContext = React.createContext<{
    value?: string;
    onValueChange?: (value: string) => void;
}>({});

interface AccordionProps {
    children: React.ReactNode;
    type?: "single" | "multiple"; // Keeping API similar to Radix for drop-in replacement later if needed
    collapsible?: boolean;
    className?: string;
    defaultValue?: string;
}

export function Accordion({ children, type = "single", className, defaultValue }: AccordionProps) {
    const [value, setValue] = React.useState<string>(defaultValue || "");

    const handleValueChange = (newValue: string) => {
        setValue(prev => prev === newValue ? "" : newValue); // Toggle behavior for 'single' collapsible
    };

    return (
        <AccordionContext.Provider value={{ value, onValueChange: handleValueChange }}>
            <div className={className}>{children}</div>
        </AccordionContext.Provider>
    );
}

interface AccordionItemProps {
    children: React.ReactNode;
    value: string;
    className?: string;
}

export function AccordionItem({ children, value, className }: AccordionItemProps) {
    return (
        <div className={cn("border-b", className)} data-value={value}>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, { itemValue: value });
                }
                return child;
            })}
        </div>
    );
}

interface AccordionTriggerProps {
    children: React.ReactNode;
    className?: string;
    itemValue?: string; // Injected by parent
}

export function AccordionTrigger({ children, className, itemValue }: AccordionTriggerProps) {
    const context = React.useContext(AccordionContext);
    const isOpen = context.value === itemValue;

    return (
        <div className="flex">
            <button
                type="button"
                onClick={() => context.onValueChange?.(itemValue || "")}
                className={cn(
                    "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                    className
                )}
                data-state={isOpen ? "open" : "closed"}
            >
                {children}
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </button>
        </div>
    );
}

interface AccordionContentProps {
    children: React.ReactNode;
    className?: string;
    itemValue?: string; // Injected by parent
}

export function AccordionContent({ children, className, itemValue }: AccordionContentProps) {
    const context = React.useContext(AccordionContext);
    const isOpen = context.value === itemValue;

    if (!isOpen) return null;

    return (
        <div className={cn("overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", className)}>
            <div className="pb-4 pt-0">{children}</div>
        </div>
    );
}
