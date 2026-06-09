"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          className="flex flex-col items-center gap-4 rounded-2xl border px-6 py-12 text-center"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-card)",
            boxShadow: "var(--shadow)",
          }}
        >
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full"
            style={{ background: "rgba(239, 68, 68, 0.1)" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-semibold" style={{ color: "var(--text)" }}>
              Something went wrong
            </h3>
            <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
              {this.state.error?.message || "An unexpected error occurred."}
            </p>
          </div>
          <button
            type="button"
            onClick={this.handleReset}
            className="cursor-pointer rounded-xl px-5 py-2 text-xs font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: "var(--border)", color: "var(--text)" }}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
