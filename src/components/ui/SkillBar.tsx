interface SkillBarProps {
    name: string;
    level: number;
    icon?: string;
}

export function SkillBar({ name, level, icon }: SkillBarProps) {
    return (
        <div className="group">
            <div className="flex items-center justify-between mb-2">
                <span className="flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)]">
                    {icon && <span>{icon}</span>}
                    {name}
                </span>
                <span className="text-xs text-[var(--color-foreground-muted)]">
                    {level}%
                </span>
            </div>
            <div className="h-2 bg-[var(--color-background-alt)] rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${level}%` }}
                />
            </div>
        </div>
    );
}
