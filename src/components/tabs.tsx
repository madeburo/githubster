"use client";

interface Tab {
  id: string;
  label: string;
  count: number;
  icon: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export function Tabs({ tabs, activeTab, onTabChange }: TabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: isActive
                ? "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))"
                : "var(--bg-card)",
              color: isActive ? "#fff" : "var(--text-muted)",
              border: isActive ? "none" : "1px solid var(--border)",
              boxShadow: isActive ? "var(--shadow-lg)" : "none",
            }}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
            <span
              className="rounded-full px-2 py-0.5 text-xs font-bold"
              style={{
                background: isActive ? "rgba(255,255,255,0.2)" : "var(--bg)",
                color: isActive ? "#fff" : "var(--text-muted)",
              }}
            >
              {tab.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
