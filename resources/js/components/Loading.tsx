import React from 'react';

export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-2">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                <p className="text-lg font-medium text-primary">Loading...</p>
            </div>
        </div>
    );
}
