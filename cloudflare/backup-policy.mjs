// Githubster publishes no database dumps or downloadable archives. Keep this
// policy aligned with the zone WAF rule, which rejects these before invocation.
export const backupMarkers = [
  ".sql", ".sqlite", ".dump", ".bak", ".backup", ".old", ".orig", ".save",
  ".zip", ".rar", ".7z", ".tar", ".tgz", ".tbz", ".txz", ".gz", ".bz2", ".xz", ".zst",
];

export function isBackupPath(pathname) {
  const path = pathname.toLowerCase();
  return backupMarkers.some((marker) => path.includes(marker)) || path.endsWith("~");
}

export function backupRuleExpression() {
  const path = "lower(url_decode(http.request.uri.path))";
  return '(http.host in {"githubster.com" "www.githubster.com"} and (\n  ' +
    [...backupMarkers.map((marker) => `${path} contains "${marker}"`), `ends_with(${path}, "~")`].join(" or\n  ") +
    "\n))";
}
